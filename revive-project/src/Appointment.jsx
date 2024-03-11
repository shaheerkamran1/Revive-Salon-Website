import './Appointment.css'

const Appointment=()=>{
return(
    <>

<head>

        <title>Appointment Form</title>
        <article>

        <h3>Developer's Note:</h3>
        <h4>Muhammad Shaheer Kamran (SP22-BSE-072) BSE-4B</h4>
        This Webpage is designed for the purpose of forms and table creation demonstration.
        Where a  user can input his name, last name, email , gender, and add some comments about him. 
        He or she can select about the city too.
        All of this form is done inside a fieldset to give the form a clear layout.
        </article>


        <img src="./images/revive logo.jpg" alt="Error" width="80" height="80px"/>
        <img src="./images/Revive Men's Lounge.jpg "alt="Error" width="800" height="400"/>

        <nav>
    <ul>
        <li><a href="Home.jsx" target="_blank">Home</a></li><br/>
        <li><a href="Appointment.jsx" target="_blank">Appointment</a></li>
        <br/>
    
    </ul>
    
</nav>
</head>


<body>

        
        <div className="hero min-h-screen" style={{backgroundImage: 'url(./public/images/pic6.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold"> Appointment Form</h1>
      <p className="mb-5">Set your appointment at Revive Men's Lounge now.</p>

    <label className="form-control w-full max-w-xs">
            <div className="label">
                <span className="firstName-text" >First Name</span>
            </div>
        <input type="text" placeholder="Name" className="input input-bordered w-full max-w-xs"/>
         
    </label>

    <label className="form-control w-full max-w-xs">
            <div className="label">
                <span className="Name-text" >Last Name</span>
            </div>
        <input type="text" placeholder="Name" className="input input-bordered w-full max-w-xs"/>         
    </label>

    
    <label className="form-control w-full max-w-xs">
            <div className="label">
                <span className="Email-email">Email</span>
            </div>
        <input type="email" placeholder="Email" className="input input-bordered w-full max-w-xs"/>         
    </label>

    
    <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="City-text">City</span> </div>
  <select className="select select-bordered">
    <option disabled selected id="opt">Pick one</option>
    <option id="opt">Multan</option>
    <option id="opt">Lahore</option>
    <option id="opt">Karachi</option>
    <option id="opt">Bahawalpur</option>
  </select><br/>


  <span style={{marginRight:'65%'}}>Enter Services</span>
  <textarea placeholder="Enter your services in points" className="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea><br/><br/>
  <div style={{textAlign:'center'}}>
  <button  className="btn button"  >Send</button>
  </div>
    
</label>   
    </div>
  </div>
</div>        
        </body>

        </>
    )
}

export default Appointment;