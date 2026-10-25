import { useContext } from "react"
import { BookingContext } from "./BookingContext"
import BookingMenu from "./BookingMenu"
import Calendar from "./Calendar"
import Schedule from "./Scheduling/Schedule"

const BookingActive = () => {


    const [active, setActive] = useContext(BookingContext)

    return (

        <>
                <div className= {`col-md-12 col-lg-5 col-sm-12 col-xs-12 d-flex flex-column align-items-center align-content-center justify-content-evenly bm container text-info position-relative ${active ? "h-75 opacity-100" : "h-0 opacity-0"}`}>
                    
                    {/* ACTUAL INFORMATION TO BE FILLED IN */}
                    <Calendar></Calendar>

                    {/* SCHEDULING LOCATION HERE */}
                    <Schedule></Schedule>

                    
                </div>
                {/* BOTTOM OF THE MENU */}
                    <BookingMenu></BookingMenu>
                
        </>
    )
}

export default BookingActive