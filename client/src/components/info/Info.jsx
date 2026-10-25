import InfoCard from './InfoCard';
import './style.css';

const Info = () => {



    return (
        <>
        
            <div className="bg w-100 h-75 rounded rounded-5 px-3 py-4 shadow border border-1 border-black border-opacity-25 d-flex flex-column align-items-center justify-content-start gap-3">
                
                <InfoCard item = "Phone Number"></InfoCard>
                <InfoCard item = "Email"></InfoCard>
                
            </div>
            
        </>
    )
};

export default Info;