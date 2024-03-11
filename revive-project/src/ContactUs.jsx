import './ContactUs.css'
const ContactUs=()=>{
    return(
        <>
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse" >
    <div className="text-center lg:text-left" style={{marginLeft:"12%"}}>
      <h1 className="text-5xl font-bold">Contact Us</h1>
      <p className="py-6">Help us to get better. For suggestions and complain contact us.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form id="formBorder" className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input id="textInput" type="text" placeholder="Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input id="textInput" type="email" placeholder="Email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Number</span>
          </label>
          <input id="textInput" type="number" placeholder="Your contact no." className="input input-bordered" required />
        </div>

        <label className="form-control">
    <div className="label">
            <span className="label-text">Message</span>
            
    </div>
    <textarea id="textInput" className="textarea textarea-bordered h-24 " placeholder="Your Message"></textarea>
        </label>

        <div className="form-control mt-6">
          <button className="btn btn-outline">Send</button>
        </div>
      </form>
    </div>
  </div>

  <div>

  
</div>
</div>
      </>
    )
}

export default ContactUs