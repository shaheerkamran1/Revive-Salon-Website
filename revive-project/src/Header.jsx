import { NavLink } from "react-router-dom"
const Header =()=>{
    return(
        <>
         <head>
             <title>Revive Men's Lounge</title>
        </head>
     <header>
    {/* <article>
        <h3>Developer's Note:</h3>
        <h4>Muhammad Shaheer Kamran (SP22-BSE-072) BSE-4B</h4>
        This is a homepage design for the assignment where my topic was a simple demonstration 
        of a salon website where an intro about the salon is shown. 
        The user can come and see about the details about the organization's culture and see about the services offered.
        At the end of footer, of both home page and appointment page a user can go to social media sites where more information is shown
        </article><br></br> */}

        
             

   
     
    {/* <div class="logoImg">
    <img src="./images/revive_logo.jpg" alt='Error' width='250px' height='250px'/>
    <img src="./images/Revive_Mens_Lounge.jpg" alt='Error' width="250px" height="250px"/>
    </div> */}
{/* 
<div class="Navigators">
<nav>
        <ul>
            <li><NavLink to="Home"><a >Home</a></NavLink></li><br/>
            <li><NavLink to="Appointment"><a>Appointment</a></NavLink></li>
            <li><NavLink to="Services"><a>Services</a></NavLink></li>
            <li><NavLink to="AboutUs"><a>About Us</a></NavLink></li>
            <li><NavLink to="ContactUs"><a>Contact US</a></NavLink></li>
            <hr/>
        
        </ul>
        
    </nav>

</div> */}
</header> 
<body>

    <div className="navbar bg-base-100  ">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl" style={{marginLeft:'50%' }}>Revive Men's Lounge</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1" style={{marginRight:'40px'}}>
    <li><NavLink to="/"><a >Home</a></NavLink></li><br/>
      <li>
        <details>
          <summary>
            Links
          </summary>
          <ul className="p-2 bg-base-100 rounded-t-none">
            <li><NavLink to="Appointment"><a>Appointment</a></NavLink></li>
            <li><NavLink to="Services"><a>Services</a></NavLink></li>
            <li><NavLink to="AboutUs"><a>About Us</a></NavLink></li>
            <li><NavLink to="ContactUs"><a>Contact US</a></NavLink></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>
</body>

        </>
    )
}

export default Header


