import CalendarDays from "./CalendarCom/CalendaryDays";
import { useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const Calendar = () => {


    const [curTime, setCurTime] = useState([new Date().getMonth(), new Date().getFullYear()])

    const adjustDate = (forward) => {

        if (forward) {

            // RESET TO NEXT YEAR
            if (curTime[0] == 11) {

                setCurTime([0, curTime[1] + 1])
            }

            // INCREMENT ONE MONTH UP
            else { 
                setCurTime([curTime[0] + 1, curTime[1]])

            }
        }
        else {

            // GO TO YEAR BEFORE
            const today = new Date()
            if (curTime[0] == today.getMonth() && curTime[1] == today.getFullYear()) {

                // GIVE ERROR MESSAGE SOMEHOW
                console.log('nono')
            }

            // SET TO YEAR BEFORE
            else if (curTime[0] == 0) {

                
                setCurTime( [11, curTime[1] - 1]  )
                console.log('Go back a year')
            }

            // GO BACK A MONTH
            else {

                setCurTime([curTime[0] - 1, curTime[1]])
                console.log("Go back a month")
            }
        }
    }

    return (
        <>

            <div className="w-100 bg-primary-subtle shadows h-75 mb-3 rounded rounded-3 p-3">

                <h1 className="h-25 display-3 fs-2 text-primary fw-semibold w-100 text-center border-bottom border-2 border-primary border-opacity-50 d-flex justify-content-evenly align-items-center">
                    <FiArrowLeft onClick={ () => { adjustDate(false) } }></FiArrowLeft>
                    <p>{ new Date(curTime[1], curTime[0], 1).toLocaleString('default', {month: 'long'}) }
                        <br></br>
                        <span className="fs-6">{ curTime[1] }</span>
                    </p>
                    <FiArrowRight onClick={ () => { adjustDate(true) }  }></FiArrowRight>
                </h1>   

                <CalendarDays curMonth = {curTime[0]} curYear= {curTime[1]} ></CalendarDays>
            </div>
        </>
    )
};

export default Calendar;