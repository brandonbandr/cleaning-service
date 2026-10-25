import { useContext, useEffect } from "react"
import { BookingContext } from "./BookingContext"
import SchedulingContext from "./SchedulingContext"
import BookingDayContext from "./BookingDayContext"

const BookingMenu = () => {

    const [active, setActive] = useContext(BookingContext)
    
    // GET THE INFO NEEDED TO SEND POST REQUEST
    const [day, setDay] = useContext(BookingDayContext);
    const {number, time, name, setSubmited, setNumber, setTime, setName, title} = useContext(SchedulingContext)

    console.log(JSON.stringify({
                        day,
                        number,
                        time,
                        name
                    }))

    const POST = async () => {

        // VALIDATING THE INPUTS TO MAKE SURE THEY AREN'T BLANK
        if (time != '' && name != '' && day != '' && number.length == 10 && day != "Not Availible") {

            

            try {
                const response = await fetch('http://127.0.0.1:8000/info/submit2/', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        day,
                        number,
                        time,
                        name
                    }),
                    
                });

                
                const data = await response.json()

                
                

                
                
            } catch (err) {
                console.log(err)
            };
        }

        else {

            // TODO MAKE THIS A POP-UP INFORMING THEM THE ISSUE
            console.log("Aye the current info isn't good")
        }
    }

    useEffect( () => {

        setActive(false)
    }, [])

    return (
        <>
            <div className={`bm-bottom position-fixed fixed-bottom d-flex align-items-start justify-content-evenly bg-primary-subtle shadow rounded rounded-3 opacity-75 py-3 ${active ? "opacity-100" : "opacity-0 d-none"}`}>

                <button className="btn display-6 text-center rounded rounded-3 btn-secondary text-black border border-black border-1 border-opacity-25 "
                onClick={() => { 

                    setActive(false)
                    }}
                >
                    <h1 className="fs-5 text-info text-center my-auto"> Close </h1>
                </button>

                <button className={`submit btn display-6 text-center rounded rounded-3 btn-primary text-black border border-black border-1 border-opacity-25 ${(time != '' && name != '' && day != '' && number.length == 10) ? '' : 'disabled'}`}>
                    <h1 className="fs-5 text-info text-center my-auto"
                        onClick={ async () => {

                                // VALIDATING THE INPUTS TO MAKE SURE THEY AREN'T BLANK
                                if (time != '' && name != '' && day != '' && number.length == 10) {

                                    try {
                                        const response = await fetch('http://127.0.0.1:8000/info/submit/', {
                                            method: "POST",
                                            headers: {
                                                "Content-Type": "application/json"
                                            },
                                            body: JSON.stringify({
                                                day,
                                                number,
                                                time,
                                                name
                                            }),
                                            
                                        });
                                        const data = await response.json()
                                        
                                        setSubmited((past) => { return past ? false : true})

                                        const delay = (ms) => {

                                            return new Promise(resolve=> setTimeout(resolve, ms));
                                        }

                                        const Submitted = async () => {

                                            title.current.innerText = "Thank You!"
                                            await delay(3000)
                                            title.current.innerText = "Consultation Scheduling"
                                            
                                        }
                                        
                                        Submitted()
                                        console.log(data)
                                    } catch (err) {
                                        console.log(err)
                                    };
                                }

                                else {

                                    // TODO MAKE THIS A POP-UP INFORMING THEM THE ISSUE
                                    console.log("Aye the current info isn't good")
                                }}}
                    > Submit </h1>
                </button>
            </div>
        </>
    )
}

export default BookingMenu