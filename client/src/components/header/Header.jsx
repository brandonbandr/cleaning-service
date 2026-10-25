import logo from '../../assets/react.svg';

const Header = () => {

    return (
        <>
        
            <div className="h-25 p-2">
                <div className="text-info d-flex bg-primary border border-1 border-black border-opacity-25 bg-opacity-25 align-items-center justify-content-center text-center flex-column shadow h-100 w-100 p-5 rounded rounded-5 ">

                    {/* IMAGE OF COMPANY LOGO */}
                    <div className="ratio ratio-4x3 h-75 mb-3">

                        <img src={logo} alt="icon" className="h-100 w-100" />

                    </div>

                    {/* TEXT FOR THE ITEMS */}
                    <h1 className="display-6 h-25 fw-normal w-100">
                        Icela's Cleaning  Service <span className='display-6 fs-4 fw-medium'>LLC</span>
                    </h1>
                </div>
                
            </div>
        </>
    )
}

export default Header