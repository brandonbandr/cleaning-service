import Header from "./components/header/Header";
import Info from "./components/info/Info";
import Booking from "./components/booking/Booking";


function App() {


  return (
    <>
      <div className="overflow-hidden">
        <div className="container bg-secondary px-lg-6 " style={{height:'100vh',}}>

          {/* CREATE THE HEADER */}
            <Header></Header>
          {/* CARDS FOR THE INFORMATION */}
            <Info></Info>
          {/* BOOKING ASPECT */}
            
          {/* ABOUT ME SECTION */}
          
        </div>
        <Booking></Booking>
      </div>
      {/* <div className="vh-25 bg-secondary w-100 container"></div> */}
    </>
  )
}

export default App
