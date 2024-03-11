import { ReactDOM } from "react-dom/client"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import NoPage from "./NoPage"
import Layout from  "./Layout"
import Header from "./Header"
import Home from "./home"
import Appointment from "./Appointment"
import Footer from "./Footer"
import { NavLink } from "react-router-dom"
import Helo from "./Helo" 
import Services from "./Services"
import AboutUs from "./AboutUs"
import ContactUs from "./ContactUs"
import Experiment from "./Experiment"

// import './App.css';


 function App() {
  
  return (
    <>
 
    
    <Header/>
    <BrowserRouter>

    <Routes>
      {/* <Route path="/" element ={<Header/>}/> */}
      <Route path="/" element ={<Home/>}/>
      <Route path="Appointment" element={<Appointment/>}/>
      <Route path="Services" element={<Services/>}/>
      <Route path="AboutUs" element={<AboutUs/>}/>
      <Route path="ContactUs" element={<ContactUs/>}/>    
    </Routes>
        
    </BrowserRouter>
    
    <Footer/>
  
      {/* <Header/>
      <Home />
      <Appointment/>
      <Footer/> */}
      {/* <Experiment/> */}
      

    </>
  )
}
export default App
// const root= ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App/>)