

const InfoCard = (props) => {

    let info = '';
    switch (props.item) {

        case "Phone Number":

            info = '843 - 465 - 0927'
            break;

        case "Email":

            info = 'Icelascleaningservice@gmail.com'
            break;
    }


    return (

        <>
        
            <div className="py-2 w-100 info-h rounded rounded-3 fs-6 bg-primary text-info fw-normal px-3 bg-gradient bg-opacity-75 mb-3 shadow">

                <h1 className="fs-5">{props.item}:</h1>

                <h1 className="fs-6">{info}</h1>
            </div>
        </>
    )
}

export default InfoCard