import React, { useEffect } from 'react'
import Nav from '../Components/Nav'
import handCoin from "../assets/handCoin.png"
import { Link } from 'react-router-dom'
import spark from "../assets/spark.png"
import secondImg from "../assets/chartsOnPhone.png"
import Aos from 'aos'
import 'aos/dist/aos.css'
import monkey from "../assets/monkey.png"
import capeBro from "../assets/bro.png"
import buu from "../assets/buu.png"
import skullDudes from "../assets/skull.png"
import horse from "../assets/horse.jpg"
import verify from "../assets/verify.png"
import star from "../assets/star.png"
import virtualGuy from "../assets/virtualGuy.png"
import logo from "../assets/logo.png"




function LandingPage() {

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  useEffect(()=>{
    Aos.init({
      duration:800
    })
    return () =>{
      Aos.refresh()
      Aos.refreshHard()
    }
  },[])

  let lessThan = "&lessthan;"

  return (
    <>
      <section className='firstCTA'>
      <Nav/>

    <section className='firstCTAFlexer'>

      {/* CTA */}

      <div className='firstSecTextDiv'>

      <h1 className=' unlockText'>Unlock and Trade: Your Crypto and NFT Hub. </h1>

      <Link to="/signup" className='text-white getStarted'>Get Started Now</Link>

      </div>

      {/* image */}

      <div className='firstSecImg'>

        <img src={handCoin} alt="" className='handImg' />

      </div>

      </section>

      </section>

      {/* second section */}

      <section className='braggingSec' >

        <section className='stats' >

        <div className='activeUsers' data-aos="fade-right">
          <p className='big'>2K+</p>

          <img src={spark} alt=""  className='spark'/>

         <p className='lastText'>ACTIVE USERS</p>

         

         </div>

        <div className='avgRating' data-aos="fade-right">
          <p className='big'>4.8</p>

          <img src={spark} alt=""  className='spark'/>

         <p className='lastText'>AVG RATING</p>

        

         </div>

        <div className='activeStats' data-aos="fade-right">
          <p className='big'>24/7</p>

          <img src={spark} alt=""  className='spark'/>

           <p className='lastText'>ACTIVE</p> 

           

           </div>

        </section>

        <section className='braggingWriteUp'>

          <div className='bragFirstDiv'>

          <h1 className='keyBenefits' data-aos="fade-left">Key Benefits:</h1>

          <div className='numberFlexer' data-aos="fade-up">
          <span className='numbering'>1 </span> <img src={spark} alt="" className='numberSpark'/>
          <p className='seamlessly'> Seamlessly Withdraw from Watch-Only Accounts</p>
          </div>

          
          <div className='numberFlexer' data-aos="fade-up" >
          <span className='numbering'>2 </span> <img src={spark} alt="" className='numberSpark'/>
          <p className='seamlessly'> Browse and buy unique NFTs, from digital art to virtual collectibles.</p>
          </div>

          <div className='numberFlexer' data-aos="fade-up" >
          <span className='numbering'>3 </span> <img src={spark} alt="" className='numberSpark'/>
          <p className='seamlessly'> Easily navigate through our platform, perfect for crypto enthusiasts and NFT collectors.</p>
          </div>

          </div>
       
         <div className='bragSecondImgDiv' data-aos="fade-up">

          <img src={secondImg} alt="" className='secondMainImg'/>


         </div>

         </section>
        
      </section>

      {/* third Section */}


      <section className='discountAndRevSec'>

         <section className='nftDiscountSec'>

          <h1 className='exploreH1' data-aos="fade-down">

            {/* <img src={spark} alt="" className='spark' /> */}

            <span className='explore' data-aos="fade-down">Explore </span>
             <span className='our' data-aos="fade-down" >Our </span> 
             <span className='exclusive' data-aos="fade-down">Exclusive </span>
              <span className='nft' data-aos="fade-down">NFT </span> 
              <span className='collection' data-aos="fade-down">Collection </span>

              <img src={spark} alt="" className='spark' />

              </h1>


          <section className='nftSec'>

            <div className='nftAndProps' data-aos="fade-right">

            <img src={monkey} alt="" className='monkey'  />

            <div className='nftdetails' >

              <p className='nftName'>Based Boring Baboon Club <img src={verify} alt="" className='verify'/></p>

              <p className='pricevalue'> <span>0.1082 ETH </span>  <span> 0.0001 ETH </span> <span>3,623 </span>

              </p>

              <p className='priceName'> <span>Total volume</span> <span>Floor price</span> <span>Owners</span>

              </p>


            </div>

            </div>

            <div className='nftAndProps' data-aos="fade-right">

            <img src={skullDudes} alt="" className='skull'  />

            <div className='nftdetails'>
              
              <p className='nftName'>Painting with AI  <img src={verify} alt="" className='verify'/></p>

              <p className='pricevalue'> <span>4.00 ETH</span>  <span> 0.0052 ETH </span> <span>261</span>

              </p>

              <p className='priceName'> <span>Total volume</span> <span>Floor price</span> <span>Owners</span>
              
              </p>

            </div>
            </div>

            <div className='nftAndProps' data-aos="fade-right">
            <img src={capeBro} alt="" className='cape' />

            <div className='nftdetails' >
            <p className='nftName'>Nakamigos <img src={verify} alt="" className='verify'/></p>

            <p className='pricevalue'> <span> 46,705 ETH</span>  <span> 0.0710 ETH </span> <span>5,452</span>

            </p>

            <p className='priceName'> <span>Total volume</span> <span>Floor price</span> <span>Owners</span>

            </p>

            </div>

            </div>

            <div className='nftAndProps' data-aos="fade-right"> 
            <img src={buu} alt="" className='horse' />

            <div className='nftdetails' >
              <p className='nftName'>Cath Simard Editions<img src={verify} alt="" className='verify'/></p>

              <p className='pricevalue'> <span>240.0 ETH </span>  <span> 0.0750 ETH </span> <span>480 </span>

              </p>

              <p className='priceName'> <span>Total volume</span> <span>Floor price</span> <span>Owners</span>
              
              </p>

            </div>

            </div>

          </section>

          <div className='viewMoreDiv'>

          <Link to="/login" className='text-white getStarted' data-aos="fade-up" >View More</Link>
          </div>

         </section>

         <section className='TestimonialSec'>

         <h1 className='exploreH12' data-aos="fade-down">

{/* <img src={spark} alt="" className='spark' /> */}

<span className='explore' data-aos="fade-down">What </span>
 <span className='our' data-aos="fade-down" >Our </span> 
 <span className='exclusive' data-aos="fade-down">Users </span>
  <span className='nft' data-aos="fade-down">Are </span> 
  <span className='collection' data-aos="fade-down">Saying</span>

  <img src={spark} alt="" className='spark' />

  </h1>

  <div className='userMain'>

  <div className='users' >
    <div className="review1" data-aos="fade-right">
    <img src={star} alt="" className='star' />

      <p>This platform made it so easy to access my funds and buy amazing NFTs. Highly recommend!</p>

      <p>Alex T.</p>
      
      </div>

    <div className="review2" data-aos="fade-right">
    <img src={star} alt="" className='star' />

        <p>I was hesitant at first, but the guides and support were fantastic! Found some great NFTs too.</p>

        <p>Jamie L.</p>

    </div>

    <div className="review3" data-aos="fade-right">
    <img src={star} alt="" className='star' />

     <p>I just like how easy buying an nft is here, also like the recommendation system was able to join BBBC early</p>

      <p>Maria S.</p>

    </div>

    <div className="review1" data-aos="fade-right">
    <img src={star} alt="" className='star' />

      <p>I've had the view-only account on my trust wallet for 7 months now, didn't believe it would be possible to Withdraw. </p>

      <p> John D.</p>

    </div>

  </div>

  

  </div>

         </section>

      </section>

      <section className='lastCTA'>



        <div className='virtualGuy'>

        <img src={virtualGuy} alt="" data-aos="fade-up"/>
        
        </div>

     
       
        <h1 data-aos="fade-right">Ready to Take Control of Your Crypto and Explore NFTs</h1>

       

        <Link to="/signup" className='getStarted' data-aos="fade-up" >Start Now!</Link>

      </section>

      <footer>
        <div className="footerSec1">

          <div className='footerLogoDiv'>
            <img src={logo} alt="" className='footerLogo' />
            <p className='text-2xl'>Coinex</p>

            </div>

          <p>Join thousands of satisfied users today.</p>

        </div>
        <div className="footerSec2">

          <h1 className='text-center text-xl'>Socials</h1>

          <a href="https://www.facebook.com/profile.php?id=61561591574683&mibextid=LQQJ4d">Facebook</a>

          <a href="https://wa.me/31629824915?text=Hello">Whatsapp</a>

          

        </div>

        <div className="footerSec3">
         <Link to="/disclaimer">Disclaimer</Link>
         <Link to="/privacy">Privacy</Link>
         <Link to="/terms">Terms</Link>
        </div>

      </footer>

    </>
  )
}

export default LandingPage
