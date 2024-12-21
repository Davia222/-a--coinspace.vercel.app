import React, { useEffect, useRef, useState } from 'react'
import backButton from "../assets/backButton.svg"
import verify from "../assets/verify.png"
import artCover from "../assets/The Art of Seasons - Collection _ OpenSea/cover.png"
import spark from "../assets/spark.png"
import artIcon from "../assets/The Art of Seasons - Collection _ OpenSea/icon.jpg"
import image1 from "../assets/The Art of Seasons - Collection _ OpenSea/1.jpg"

import image2 from "../assets/The Art of Seasons - Collection _ OpenSea/2.jpg"
import image3 from "../assets/The Art of Seasons - Collection _ OpenSea/3.jpg"
import image4 from "../assets/The Art of Seasons - Collection _ OpenSea/4.jpg"
import image5 from "../assets/The Art of Seasons - Collection _ OpenSea/5.jpg"
import image6 from "../assets/The Art of Seasons - Collection _ OpenSea/6.jpg"
import image7 from "../assets/The Art of Seasons - Collection _ OpenSea/7.jpg"
import image8 from "../assets/The Art of Seasons - Collection _ OpenSea/8.jpg"
import image9 from "../assets/The Art of Seasons - Collection _ OpenSea/9.jpg"
import image10 from "../assets/The Art of Seasons - Collection _ OpenSea/10.jpg"
import image11 from "../assets/The Art of Seasons - Collection _ OpenSea/11.jpg"
import image12 from "../assets/The Art of Seasons - Collection _ OpenSea/12.jpg"
import image13 from "../assets/The Art of Seasons - Collection _ OpenSea/13.jpg"
import image14 from "../assets/The Art of Seasons - Collection _ OpenSea/14.jpg"
// import image15 from "../assets/The Art of Seasons - Collection _ OpenSea/15.jpg"
// import image16 from "../assets/The Art of Seasons - Collection _ OpenSea/16.jpg"
// import image17 from "../assets/The Art of Seasons - Collection _ OpenSea/17.jpg"
// import image18 from "../assets/The Art of Seasons - Collection _ OpenSea/18.jpg"
// import image19 from "../assets/The Art of Seasons - Collection _ OpenSea/19.jpg"
// import image20 from "../assets/The Art of Seasons - Collection _ OpenSea/20.jpg"


function ArtOfSeasons({artOfSeasonFunc}) {

  const [buyWhole, setBuyWhole]=useState("displayNone")


 

  const showInFunc = ()=>{

    let theEnterer = document.documentElement.scrollTop

    if(theEnterer > 320){
      setBuyWhole("buyWhole")
    }
    if(theEnterer < 320){
      setBuyWhole("displayNone")
    }
  }

  
    
    window.addEventListener("scroll",showInFunc)
  


  return (
    <>
    <section>
      
   <div className='backDiv' onClick={artOfSeasonFunc}>
   <img src={backButton} alt="" className='backButton'  />
   </div>
   <h1 className=' text-center flex artH1'>
    <span className='explore'>The </span> 
    <span className='our'> Art </span> 
    <span className='exclusive'>of </span> 
     <span className='collection'>Seasons</span> 
     <img src={spark} alt="" className='spark' /></h1>
   <div className='gradient2'></div>

   <div className='artCoverImgDiv'>
    <img src={artCover} alt="" className='artCoverImg' />
   </div>
   
   <div className='nftIconAndDetails'>
   <div className='nftNameAndIconFlexer'>

    <div className='nftIconDiv'><img src={artIcon} alt="" className='artIcon' /></div>
    <div className='artNameAndCreator'>
    <p className='artNameInArt text-sm'>The Art of Seasons <img src={verify} alt="" className='verify' /></p>
    <p className='artNameCreator text-sm gray'>RENGA-INC <img src={verify} alt="" className='verify' /></p>
    </div>

    </div>

    <div className='nftDetailsFlexer text-sm'>
    <p className="nftDetail1">
      <p>13,457 ETH</p>
      <p className='gray'>Total volume</p>
      </p>

    <p className="nftDetail2">
      <p>0.019 ETH</p>
      <p className='gray'>Floor price</p>
    </p>

    <p className="nftDetail3">
      <p>0.0148 WETH</p>
      <p className='gray'>Best offer</p>
    </p>

    <p className="nftDetail4">
      <p>2,959 (41%)</p>
      <p className='gray'>Owners (Unique)</p>

    </p>
    </div>

   </div>

   <div className='gradient'></div>

   <div className={buyWhole}>
    <div className='buyWholeDetails'>

      <p className="buyDetails1 text-sm"><span className='gray text-xs'>Items:</span> 7,237</p> .
      <p className="buyDetails2 text-sm"><span className='gray text-xs'>Created:</span> Mar 2022</p>.
      <p className="buyDetails3 text-sm"><span className='gray text-xs'>Chain:</span> ETH</p>
    </div>

    <div className='getStarted buyColl text-sm'>
      Buy Collection
    </div>

   </div>

   
      <section className='artAllNftSec'>

        <div className="mainNftItem1">

          <span className='mainNftImage1_1'>
            <img src={image1} alt="" />
          </span>

          <span className='mainNftImage2_2'>

          </span>

        </div>

        <div className="mainNftItem2">
          <span className='mainNftImage1_1'>
            <img src={image2} alt="" />
          </span>

          <span className='mainNftImage2_2'>

            </span>
          </div>

        <div className="mainNftItem3">
          <span className='mainNftImage1_1'>
            <img src={image3} alt="" />
          </span>

          <span className='mainNftImage2_2'>

            </span></div>

        <div className="mainNftItem4">
        <span className='mainNftImage1_1'>
            <img src={image4} alt="" />
          </span>

          <span className='mainNftImage2_2'>

            </span>
        </div>

        <div className="mainNftItem5">
        <span className='mainNftImage1_1'>
            <img src={image5} alt="" />
          </span>

          <span className='mainNftImage2_2'>

            </span>
        </div>

        <div className="mainNftItem6">
        <span className='mainNftImage1_1'>
            <img src={image6} alt="" />
          </span>

          <span className='mainNftImage2_2'>

            </span>
        </div>

        <div className="mainNftItem7">
        <span className='mainNftImage1_1'>
            <img src={image7} alt="" />
          </span>

          <span className='mainNftImage2_2'>

            </span>
        </div>

        <div className="mainNftItem8">
          <span className='mainNftImage1_1'>
            <img src={image8} alt="" />
          </span>

          <span className='mainNftImage2_2'>

            </span></div>

        <div className="mainNftItem9">
        <span className='mainNftImage1_1'>
            <img src={image9} alt="" />
          </span>

          <span className='mainNftImage2_2'>

            </span>
        </div>

        <div className="mainNftItem10">
        <span className='mainNftImage1_1'>
            <img src={image10} alt="" />
          </span>

          <span className='mainNftImage2_2'>

            </span>
        </div>

        <div className="mainNftItem11">
        <span className='mainNftImage1_1'>
            <img src={image11} alt="" />
          </span>

          <span className='mainNftImage2_2'>

            </span>
        </div>

        <div className="mainNftItem12">
        <span className='mainNftImage1_1'>
            <img src={image12} alt="" />
          </span>

          <span className='mainNftImage2_2'>

            </span>
        </div>

        <div className="mainNftItem13">
        <span className='mainNftImage1_1'>
            <img src={image13} alt="" />
          </span>

          <span className='mainNftImage2_2'>

            </span>
        </div>

        <div className="mainNftItem14">
        <span className='mainNftImage1_1'>
            <img src={image14} alt="" />
          </span>

          <span className='mainNftImage2_2'>

            </span>
        </div>

        {/* <div className="mainNftItem15">img15</div>

        <div className="mainNftItem16">img16</div>

        <div className="mainNftItem17">img17</div>

        <div className="mainNftItem18">img18</div>

        <div className="mainNftItem19">img19</div>

        <div className="mainNftItem20">img20</div> */}

      </section>

      </section>

      
   </>
  )
}

export default ArtOfSeasons
