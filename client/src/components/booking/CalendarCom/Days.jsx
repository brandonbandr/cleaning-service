import { useContext } from "react";
import BookingDayContext from "../BookingDayContext";

const Days = (date) => {

    // HOOK UP SO IT CHANGES THE STATE OF TEH CALENDAR FOR THE SELECTED DAY
    const [day, setDay] = useContext(BookingDayContext);
    // AVAILIBLE DAY
    if (Object.keys(date).length == 4) {
        return (

            <>
                <button className={`border border-1 border-primary border-opacity-25 rounded-3 d-flex align-items-center justify-content-center text-primary display-6 fs-4 text-primary block text-center nav-underline ${date.availible == false ? `disabled text-danger btn-outline-danger` : `text-success btn-outline-success`}`}
                onClick = { () => {
                    if (date.availible == true) {

                        const dispDate = new Date();
                        dispDate.setMonth(date.month);
                        setDay(`${dispDate.toLocaleString('en-US', { month: 'long' })} ${date.day} ${date.year}`);
                    }
                    else {

                        setDay('Not Available');
                    }            
                }}
                > 
                    {date.day} 
                    
                    </button>
            </>
        )
    }

    else {

        <button className= {'border border-1 border-primary border-opacity-25 rounded-3 d-flex align-items-center justify-content-center text-primary display-6 fs-4 text-primary block text-center nav-underline'}>

        </button>        
    }
}

export default Days