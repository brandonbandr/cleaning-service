import './styles.css'
import Days from './Days';
import { CalendarContext } from './CalendarContext';
import SchedulingContext from '../SchedulingContext';
import { useContext, useEffect, useState } from 'react';

const CalendarDays = (  {curMonth, curYear}) =>  {

    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    // CALENDAR DAYS SIMULATED
    const [dates, setDates] = useState([])
    const {submited} = useContext(SchedulingContext)

    

    useEffect( () => {

        getEvents();
        
    }, [curMonth, curYear, submited])

    const getEvents = async () => {

        try {
            // ERROR HERE
            const response = await fetch(`http://127.0.0.1:8000/info/${curMonth + 1}-${curYear}/`);
            const data = await response.json()
            console.log(data)
            setDates(data)
        
        } catch (err) {

            console.log(err)
        }
    }

    return (
        <>  

            
            <div className="border border-primary border-3 rounded rounded-3 h-75 w-100 mt-2 border-opacity-50 d-flex align-items-start justify-content-start flex-wrap p-2">

                {/* THE DAYS PRESENT MONDAY - SUNDAY */}
                {days.map( (day, num) => (

                    <h2 key={`block-${num}`} className={`display-6 fs-4 text-primary block text-center ${(day != "Sun") ? 'border-right' : `border-left`} border-1 border-primary`}>{day}</h2>
                ))}

                {/* NUMERIC CALENDAR DAYS */}
                
                {dates.map( (stuff, key) => (

                    
                    <Days key={key} availible={stuff.availible} day= {stuff.day} month={curMonth} year={curYear} ></Days>

                ))
                }
            </div>

            
            
        </>
    )
}

export default CalendarDays