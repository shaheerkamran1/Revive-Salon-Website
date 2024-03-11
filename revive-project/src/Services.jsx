import './Services.css'
const Services=()=>{
   
   const myServices=[
    {
        title:"Hair Cut",
        image:"./public/images/haircut.jpg",
        description:"Elevate your style with precision and expertise at Revive Mens Lounge. Our skilled stylists craft personalized haircuts that reflect your unique personality and preferences.    From classic cuts to contemporary styles, experience the art of grooming in a luxurious and relaxed atmosphere.",
        price:"Rs 800",
    },
    {
        title:"Beard Cut",
        image:"./public/images/pic4.jpg",
        description:"Sculpt your style at Revive Men's Lounge. Our skilled barbers deliver precise Beard Cuts, tailored to your preference—be it a clean, polished look or a rugged, masculine edge. Elevate your grooming routine with meticulous care and attention to detail. Step into a world where your signature beard is crafted with expertise.",
        price:"Rs 500",
    },
    {
        title:"Cleansing",
        image:"./public/images/men_facial.jpg",
        description:"Indulge in a revitalizing cleansing experience at Revive Men's Lounge. Our skilled aestheticians use premium products to gently cleanse and purify your skin, promoting a refreshed complexion. Enjoy the soothing touch of our experts as they create a personalized cleansing ritual tailored to your skin's unique needs. Step into a world where skincare meets relaxation for a revitalized, glowing complexion at Revive Men's Lounge.",
        price:"Rs 800",
    },
    {
        title:"Skin Lightening Treatment",
        image:"./public/images/Skin_Lightening.PNG",
        description:"Illuminate your complexion at Revive Men's Lounge with our expert Skin Lightening Treatment. Our skilled professionals use advanced techniques and premium products to address skin concerns, promoting a brighter and even-toned complexion. Experience a personalized approach to skincare as our specialists tailor treatments to your unique needs. Step into a world of radiant confidence at Revive Men's Lounge, where your journey to a brighter, rejuvenated skin begins.",
        price:"Rs 6000",
    },
    {
        title:"Full Face Threading",
        image:"./public/images/threading.PNG",
         description:"Achieve flawless beauty at Revive Men's Lounge with our precision Full Face Threading service. Our skilled aestheticians use the ancient art of threading to sculpt your brows, remove unwanted facial hair, and define your features. Experience the precision and gentleness of threading, leaving your skin smooth and impeccably shaped. Step into a world where expertise meets elegance, and discover the transformative effects of Full Face Threading at Revive Men's Lounge.",
        price:"Rs 1000",
    },
    {
        title:"Full Body Wax",
        image:"./public/images/wax.jpg",
        description:"Experience the epitome of smoothness at Revive Men's Lounge with our expert Full Body Wax service. Our skilled estheticians use premium waxing techniques to remove unwanted hair, leaving your skin silky and hair-free. Indulge in a comfortable and precise waxing experience that caters to your specific needs and preferences. Step into a world of refined grooming at Revive Men's Lounge, where our Full Body Wax service unveils a confident and polished you.",
        price:"Rs 4000"
    },
    {
        title:"Hydra & BB Glow",
        image:"./public/images/Hydra.jpg",
         description:"Reveal radiant, hydrated skin at Revive Men's Lounge with our indulgent Hydra & BB Glow treatment. Our skilled professionals combine the power of hydrating techniques with BB Glow to enhance your complexion. Experience a personalized approach as we tailor the treatment to your unique skin needs, leaving you with a luminous and even-toned glow. Step into a world where skincare meets luxury, and let Revive Men's Lounge bring out your natural radiance with Hydra & BB Glow.",
        price:"Rs 12000",
    },
    {
        title:"Hair Protein Restore",
        image:"./public/images/protein.jpg",
        description:"Revitalize your hair at Revive Men's Lounge with our Hair Protein Restore treatment. Our skilled stylists use advanced protein formulas to strengthen and repair damaged strands, restoring natural shine. Experience a customized approach tailored to your hair's unique needs. Step into a world where rejuvenation meets hair care excellence.",
        price:"Rs 2500",
    },
    
    {
        title:"Keratin Treatment",
        image:"./public/images/Keratin.jpg",
        description:"Transform your locks at Revive Men's Lounge with our Keratin Treatment. Our expert stylists use premium keratin formulations to smooth, de-frizz, and enhance the overall health of your hair. Experience the luxury of sleek, manageable strands with our customized approach tailored to your hair type. Step into a world where revitalized, frizz-free hair is just a Keratin Treatment away at Revive Men's Lounge.",
        price:"Rs 10000",
    },
    
   ]
   
    return(
        <>
        <br/><br/><br/>
        <div className="PageHeading">
            <h1 className="mb-5 text-5xl font-bold">Our Services</h1>
        </div>
        <br/><br/><br/>
        <div >
        {myServices.map((service)=>(
            <div className=" bg-base-100 shadow-xl" style={{width:'30%', display:"inline-block", marginLeft:"45px"}}>
            <figure><img src={service.image} alt={service.title} style={{width:'363px',height:'250px',marginLeft:'50px'}} /></figure>
            <div className="card-body" style={{marginBottom:'100px'}}>
              <h2 className="card-title" style={{marginLeft:'130px'}}>{service.title}</h2>
              <p style={{marginLeft:'25px',marginBottom:'25px'}}>{service.description}</p>
              <div className="card-actions justify-end" style={{justifyContent:'center'}}>
                <button className="btn btn-outline btn-info" onClick={()=>{alert(`You selected ${service.title}`)}}>{service.price} </button>
              </div>
            </div>
          </div>
            
        ))}
        </div>

{/* 
        <div className="card w-96 bg-base-100 shadow-xl">
  
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div> */}


        </>
    )
}

export default Services