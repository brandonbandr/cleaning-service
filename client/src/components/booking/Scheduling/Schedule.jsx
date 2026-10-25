import './styles.css'
import { useContext, useEffect, useRef } from 'react';
import SchedulingContext from '../SchedulingContext';
import BookingDayContext from '../BookingDayContext';


const Schedule = () => {

    const [day, setDay] = useContext(BookingDayContext);
    // const [number, setNumber] = useState("");
    // const [time, setTime] = useState('7:00');
    const {number, setNumber, time, setTime, name, setName, submited, title} = useContext(SchedulingContext)

    const delay = (ms) => {

        return new Promise(resolve=> setTimeout(resolve, ms));
    }

    const Submitted = async () => {

        title.current.innerText = "Thank You!"
        await delay(5000)
        title.current.innerText = "Consultation Scheduling"
    }

    useEffect( () => {

        setNumber('')
        setTime('')
        setDay('')
        setName('')


    }, [submited])

    const timeValidation = (t) => {

        const hour = t.slice(0, 2)
        
        if (hour > 6 && hour < 14) {

            setTime(t)
        }

        else {

            // INCLUDE AN ERROR POPUP/ALERT TO BE MADE!!
            console.log("Not a good time!")
        }

    }

    const numberValidation = (num) => {

        const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        const ans = num.toString().split('')
        let flag = true;

        ans.forEach(element => {
            
            if (!(element in numbers)) {

                flag = false
            }
        });

        if (flag && ans.length < 11) { setNumber(num) }
    }

    return (
        <>
        
            <div className="w-100 block-size bg-primary-subtle shadow rounded rounded-3 p-3">

                <h1 className="display-4 fs-2 text-primary fw-semibold w-100 text-center pb-2 border-bottom border-2 border-primary border-opacity-50"
                ref={title}
                >
                    Consultation Scheduling</h1>   

                <form>
                    <div className="w-100 h-50 d-flex align-items-end justify-content-center">

                        {/* DATE SELECTED */}
                        <div className="w-50 h-100 px-2">

                            <label htmlFor="Date" className='form-label text-primary'>Date:</label>
                            <p className='text-primary form-control-plaintext'>{day}</p>
                        </div>

                        {/* TIME SELECTED */}
                        <div className="w-50 h-100 px-2">
                            
                            <label htmlFor="time" className='form-label text-primary'>Time:</label>
                            <input type='time' className='form-control' value={time} onChange={ (e) => { timeValidation(e.target.value) } }></input>

                        </div>
                    </div>

                    <div className="w-100 h-50 d-flex align-items-end justify-content-center">

                        {/* NAME SELECTED */}
                        <div className="w-50 h-100 px-2">

                            <label htmlFor="Name" className='form-label text-primary'>Name:</label>
                            <input type='text' id='Name' className='form-control' value={name} onChange={ (e) => { setName(e.target.value) } }></input>
                        </div>

                        {/* NUMBER SELECTED */}
                        <div className="w-50 h-100 px-2">
                            
                            <label htmlFor="Number" className='form-label text-primary'>Number:</label>
                            <input type='text' id='Number' className='form-control' 
                            value={number}
                            onChange={ (e) => {

                                // CHECK IF THE NUMBER > 10 OR IF A NON-NUMBER WAS TYPED
                                numberValidation(e.target.value);
                             } }
                            ></input>

                        </div>
                    </div>
                    
                </form>
            </div>
        </>
    )
}

export default Schedule;