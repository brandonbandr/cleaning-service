import BookingActive from './BookingActive';
import { BookingContext } from './BookingContext';
import BookingDayContext from './BookingDayContext';
import SchedulingContext from './SchedulingContext';

import './style.css';
import { useRef, useState } from 'react';

const Booking = () => {

    const [active, setActive] = useState(false);
    const [day, setDay] = useState('');
    
    // PLACE INTO SCHEDULINGCONTEXT PROVIDER
    const [dates, setDates] = useState([])
    const [number, setNumber] = useState("");
    const [time, setTime] = useState('');
    const [name, setName] = useState('');
    const [submited, setSubmited] = useState(false);
    const title = useRef(null)


    return (

        <>  
            <SchedulingContext.Provider value = { {dates, number, time, name, setName, setDates, setNumber, setTime, submited, setSubmited, title}  }>
            <BookingDayContext.Provider value = { [day, setDay] }>
            <BookingContext.Provider value={ [active, setActive] }>
                <div className= {`position-absolute overflow-hidden bottom-0 w-100 left-0 bh bg-primary bg-gradient border border-1 border-opacity-50 border-white rounded rounded-3 ${active ? 'active bg-opacity-0' : ''}`}
                onClick={   () => {

                    if (!active) {

                        setActive(true)
                    }
                    }}
                >
                    <h1 className={`display-4 text-center w-100 py-3 text-white z-3 ${active ? "h-10 fw-normal" : "h-25"}`}
                    

                    >Book Now!</h1>

                    <BookingActive></BookingActive>

                </div>
            </BookingContext.Provider>
            </BookingDayContext.Provider>
            </SchedulingContext.Provider>
        </>
    )
}

export default Booking;