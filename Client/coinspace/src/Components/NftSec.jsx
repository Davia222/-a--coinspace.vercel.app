import React, { useEffect, useRef, useState } from 'react'
import SingleNft from './SingleNft'
import spark from "../assets/spark.png"
import artofSeason from "../assets/slideImages/artofSeason.png"
import charles from "../assets/slideImages/charles.png"
import getijde from "../assets/slideImages/getijde.png"
import grapes from "../assets/slideImages/grapes.png"
import impossible from "../assets/slideImages/impossible.png"
import neural from "../assets/slideImages/neural.png"
import oneNight from "../assets/slideImages/oneNight.png"
import zeeverse from "../assets/slideImages/zeeverse.png"
import verify from "../assets/verify.png"
import Countdown from './CountDown'
import artNFTImg from "../assets/artnft.png"
import musicImg from "../assets/musicImg.png"
import gamingImg from "../assets/gamingImg.png"
import photographyImg from "../assets/photosImg.png"
import CharlesPeters from '../Nftpages/CharlesPeters'
import ArtOfSeasons from '../Nftpages/ArtOfSeasons'
import CloneX from '../Nftpages/CloneX'
import Courtyard from '../Nftpages/Courtyard'
import CubaAPlace from '../Nftpages/CubaAPlace'
import Doodles from '../Nftpages/Doodles'
import Emby from '../Nftpages/Emby'
import EnsEth from '../Nftpages/EnsEth'
import Getide from '../Nftpages/Getide'
import HuneGenesis from '../Nftpages/HuneGenesis'
import Impossible from '../Nftpages/Impossible'
import LilPudgys from '../Nftpages/LilPudgys'
import MomentsOfArg from '../Nftpages/MomentsOfArg'
import Nakamigos from '../Nftpages/Nakamigos'
import PudgyPen from '../Nftpages/PudgyPen'
import RedactedRemi from '../Nftpages/RedactedRemi'
import RtfkktAnimus from '../Nftpages/RtfkktAnimus'
import SeedWorld from '../Nftpages/SeedWorld'
import TheGrapes from '../Nftpages/TheGrapes'
import Zeeverse from '../Nftpages/Zeeverse'




function NftSec() {

  const [roller, setRoller] = useState("roller")
  const [roller2, setRoller2] = useState("static")
  const [roller3, setRoller3] = useState("static")
  const [roller4, setRoller4] = useState("static")
  const [roller5, setRoller5] = useState("static")
  const [allSec, setAllSec] = useState(true)
  const [artSec, setArtSec] = useState(false)
  const [gamingSec, setGamingSec] = useState(false)
  const [photographySec,setPhotographySec]= useState(false)
  const [membershipSec, setMembershipSec] = useState(false)


  const changeToRoller1 =()=>{
    setRoller("roller")
    setRoller2("static")
    setRoller3("static")
    setRoller4("static")
    setRoller5("static")

    setAllSec(true)
    setArtSec(false)
    setGamingSec(false)
    setPhotographySec(false)
    setMembershipSec(false)
  }

  const changeToRoller2 =()=>{
    setRoller("static")
    setRoller2("roller")
    setRoller3("static")
    setRoller4("static")
    setRoller5("static")

    setAllSec(false)
    setArtSec(true)
    setGamingSec(false)
    setPhotographySec(false)
    setMembershipSec(false)
  }

  const changeToRoller3 =()=>{
    setRoller("static")
    setRoller2("static")
    setRoller3("roller")
    setRoller4("static")
    setRoller5("static")

    setAllSec(false)
    setArtSec(false)
    setGamingSec(true)
    setPhotographySec(false)
    setMembershipSec(false)
  }

  const changeToRoller4 =()=>{
    setRoller("static")
    setRoller2("static")
    setRoller3("static")
    setRoller4("roller")
    setRoller5("static")

    setAllSec(false)
    setArtSec(false)
    setGamingSec(false)
    setPhotographySec(true)
    setMembershipSec(false)
  }

  const changeToRoller5 =()=>{
    setRoller("static")
    setRoller2("static")
    setRoller3("static")
    setRoller4("static")
    setRoller5("roller")

    setAllSec(false)
    setArtSec(false)
    setGamingSec(false)
    setPhotographySec(false)
    setMembershipSec(true)
  }

  const[arrowLeft, setArrowLeft] = useState(false)
  const[arrowRight, setArrowRight] = useState(false)

  const hoverToshow = ()=>{
    setArrowLeft(true)
    setArrowRight(true)
    
  }

  const hoverToClose =()=>{
    setArrowLeft(false)
    setArrowRight(false)
  }

  // All slide section


 

  const [showFirst, setShowFirst] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirst(prevState => !prevState);
    }, 4000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const allButton =()=>{
   if(showFirst === false){
    setShowFirst(true)
   }
  }

  const artButton =()=>{
   
  }

  const leftAndRight = useRef(null)

  const goRight =()=>{
    leftAndRight.current.scrollTo({
    left:leftAndRight.current.scrollLeft + 3000,
   behavior:"smooth"
    })
  }

  const goLeft = ()=>{
    leftAndRight.current.scrollTo({
      left:leftAndRight.current.scrollLeft - 3000,
      behavior:"smooth"
    })
  }

  const mouseWheel =(e)=>{
    leftAndRight.current.scrollLeft += e.deltaY
  }

  

  

  const [randomNumber, setRandomNumber] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      const min = 1;
      const max = 3;
      const newRandomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      setRandomNumber(newRandomNumber);
    }, 4000); // Change 1000 to adjust how frequently the number changes (in milliseconds)
    
    return () => clearInterval(interval);
  }, []);
   let [theNumber, setTheNumber] = useState(1)
  useEffect(()=>{
    const changeEnter = setInterval(()=>{
      setTheNumber(prevState => prevState + 1)
    },4000)

   

    return ()=>{
      clearInterval(changeEnter)
    }
       
  },[]) 

  if(theNumber === 4){
    setTheNumber(1)
  }

  const [enter, setEnter]= useState("enter")

  //hover for details func

  const [hoverDetail1, setHoverDetail1]=useState(false)
  const [hoverDetail2, setHoverDetail2]=useState(false)
  const [hoverDetail3, setHoverDetail3]=useState(false)

  const hoverIn1 = ()=>{
    setHoverDetail1(true)
  }

  const hoverOut1 = ()=>{
    setHoverDetail1(false)
  }

  const hoverIn2 = ()=>{
    setHoverDetail2(true)
  }

  const hoverOut2 = ()=>{
    setHoverDetail2(false)
  }

  const hoverIn3 = ()=>{
    setHoverDetail3(true)
  }

  const hoverOut3 = ()=>{
    setHoverDetail3(false)
  }

  //inner nfts
  const[artOfSeasonState, setArtOfSeasonState]=useState(false)
  const[charlesState,setCharlesState] = useState(false)
  const[cloneXState,setCloneXState]=useState(false)
  const[courtyardState, setCourtyardState]= useState(false)
  const[CubaState,setCubaState]=useState(false)
  const[doodleState,setDoodlesState]=useState(false)
  const[embyState,setEmbyState]= useState(false)
  const[ensEthState,setEnsEthState]=useState(false)
  const[getijdeState,setGetijeState]=useState(false)
  const[huneGenesisState,setHuneGenesisState]=useState(false)
  const[impossibleState,setImpossibleState]=useState(false)
  const[lilPudgysState,setLilPudgysState]=useState(false)
  const[momentsOfArgState,setMomentsOfArgState]=useState(false)
  const[nakamigosState,setNakamigosState]=useState(false)
  const[pudgyPenState,setPudgyPenState]=useState(false)
  const[redactedState,setRedactedState]=useState(false)
  const[rtfkktAnimusState,setRtfkktAnimusState]=useState(false)
  const[seedWorldState,SetSeedWorldState] = useState(false)
  const[theGrapesState,SetTheGrapesState] = useState(false)
  const[zeeverseState,SetZeeverseState]=useState(false)

  const [nftSec2, setNftSec2] = useState(true)

  const artOfSeasonFunc =()=>{

    if(artOfSeasonState === false){
      setArtOfSeasonState(true)
     }
  
     if(artOfSeasonState === true){
      setArtOfSeasonState(false)
     }

    if(nftSec2 === true){
      setNftSec2(false)
     }
  
     if(nftSec2 === false){
      setNftSec2(true)
     }
  }

  const charlesFunc = ()=>{
   if(charlesState === false){
    setCharlesState(true)
   }

   if(charlesState === true){
    setCharlesState(false)
   }

   if(nftSec2 === true){
    setNftSec2(false)
   }

   if(nftSec2 === false){
    setNftSec2(true)
   }

  }


  const cloneXFunc =()=>{

    if(cloneXState === false){
      setCloneXState(true)
     }
  
     if(cloneXState === true){
      setCloneXState(false)
     }

    if(nftSec2 === true){
      setNftSec2(false)
     }
  
     if(nftSec2 === false){
      setNftSec2(true)
     }
  }

  const CourtyardFunc =()=>{

    if(courtyardState === false){
      setCourtyardState(true)
     }
  
     if(courtyardState === true){
      setCourtyardState(false)
     }

    if(nftSec2 === true){
      setNftSec2(false)
     }
  
     if(nftSec2 === false){
      setNftSec2(true)
     }
  }

  const CubaAPlaceFunc =()=>{
    if(CubaState === false){
      setCubaState(true)
     }
  
     if(CubaState === true){
      setCubaState(false)
     }

    if(nftSec2 === true){
      setNftSec2(false)
     }
  
     if(nftSec2 === false){
      setNftSec2(true)
     }
  }
  
  const DoodlesFunc =()=>{

    if(doodleState === false){
      setDoodlesState(true)
     }
  
     if(doodleState === true){
      setDoodlesState(false)
     }
    if(nftSec2 === true){
      setNftSec2(false)
     }
  
     if(nftSec2 === false){
      setNftSec2(true)
     }
  }

  const embyFunc = ()=>{

    if(embyState === false){
      setEmbyState(true)
     }
  
     if(embyState === true){
      setEmbyState(false)
     }

    if(nftSec2 === true){
      setNftSec2(false)
     }
  
     if(nftSec2 === false){
      setNftSec2(true)
     }
  } 


  const EnsEthFunc = ()=>{

    if(ensEthState === false){
      setEnsEthState(true)
     }
  
     if(ensEthState === true){
      setEnsEthState(false)
     }

    if(nftSec2 === true){
      setNftSec2(false)
     }
  
     if(nftSec2 === false){
      setNftSec2(true)
     }
  }

  const getijdeFunc =()=>{

    if(getijdeState === false){
      setGetijeState(true)
     }
  
     if(getijdeState === true){
      setGetijeState(false)
     }


    if(nftSec2 === true){
      setNftSec2(false)
     }
  
     if(nftSec2 === false){
      setNftSec2(true)
     }
  }

  const HuneGenesisFunc = ()=>{
    if(huneGenesisState === false){
      setHuneGenesisState(true)
     }
  
     if(huneGenesisState === true){
      setHuneGenesisState(false)
     }


    if(nftSec2 === true){
      setNftSec2(false)
     }
  
     if(nftSec2 === false){
      setNftSec2(true)
     }
  }

  const impossibleFunc = ()=>{

    if(impossibleState === false){
      setImpossibleState(true)
     }
  
     if(impossibleState === true){
      setImpossibleState(false)
     }

    if(nftSec2 === true){
      setNftSec2(false)
     }
  
     if(nftSec2 === false){
      setNftSec2(true)
     }
  }

  const LilPudgysFunc =()=>{

    if(lilPudgysState === false){
      setLilPudgysState(true)
     }
  
     if(lilPudgysState === true){
      setLilPudgysState(false)
     }

    if(nftSec2 === true){
      setNftSec2(false)
     }
  
     if(nftSec2 === false){
      setNftSec2(true)
     }
  }

  const MomentsOfArgFunc =()=>{

    if(momentsOfArgState === false){
      setMomentsOfArgState(true)
     }
  
     if(momentsOfArgState === true){
      setMomentsOfArgState(false)
     }

    if(nftSec2 === true){
      setNftSec2(false)
     }
  
     if(nftSec2 === false){
      setNftSec2(true)
     }
  }

  const NakamigosFunc =()=>{

    if(nakamigosState === false){
      setNakamigosState(true)
     }
  
     if(nakamigosState === true){
      setNakamigosState(false)
     }

    if(nftSec2 === true){
      setNftSec2(false)
     }
  
     if(nftSec2 === false){
      setNftSec2(true)
     }
  }

  const PudgyPenFunc =()=>{

    if(pudgyPenState === false){
      setPudgyPenState(true)
     }
  
     if(pudgyPenState === true){
      setPudgyPenState(false)
     }

    if(nftSec2 === true){
      setNftSec2(false)
     }
  
     if(nftSec2 === false){
      setNftSec2(true)
     }
  }

  const RedactedRemiFunc =()=>{

    if(redactedState === false){
      setRedactedState(true)
     }
  
     if(redactedState === true){
      setRedactedState(false)
     }

    if(nftSec2 === true){
      setNftSec2(false)
     }
  
     if(nftSec2 === false){
      setNftSec2(true)
     }
  }

  const RtfkktAnimusFunc =()=>{

    if(rtfkktAnimusState === false){
      setRtfkktAnimusState(true)
     }
  
     if(rtfkktAnimusState === true){
      setRtfkktAnimusState(false)
     }

    if(nftSec2 === true){
      setNftSec2(false)
     }
  
     if(nftSec2 === false){
      setNftSec2(true)
     }
  }

  const SeedWorldFunc =() =>{

    if(seedWorldState === false){
      SetSeedW(true)
     }
  
     if(seedWorldState === true){
      SetSeedWorldState(false)
     }

    if(nftSec2 === true){
      setNftSec2(false)
     }
  
     if(nftSec2 === false){
      setNftSec2(true)
     }
  }

  const TheGrapesFunc =()=>{

    if(theGrapesState === false){
      SetTheGrapesState(true)
     }
  
     if(theGrapesState === true){
      SetTheGrapesState(false)
     }

    if(nftSec2 === true){
      setNftSec2(false)
     }
  
     if(nftSec2 === false){
      setNftSec2(true)
     }
  }

  const zeeverseFunc =()=>{
    if(zeeverseState === false){
     SetZeeverseState(true)
     }
  
     if(zeeverseState === true){
      SetZeeverseState(false)
     }

    if(nftSec2 === true){
      setNftSec2(false)
     }
  
     if(nftSec2 === false){
      setNftSec2(true)
     }
  }




  return (
    <>
   
   {/* <p>{theNumber}</p> */}

   {nftSec2 && <section className='nftSecOpen'>

      <nav className='nftNav'>
        <div className='ghost'></div>
        <p></p>
        <p></p>
        <p className={roller} onClick={changeToRoller1}>Best Selling</p>
        <p className={roller2} onClick={changeToRoller2}>Art</p>
        <p className={roller3} onClick={changeToRoller3}>Gaming</p>
        <p className={roller4} onClick={changeToRoller4}>Photography</p>
        <p className={roller5} onClick={changeToRoller5}>Music</p>
        <p></p>
        <p></p>
        <div className='ghost'></div>
      </nav>

      {/* All Sec Starts */}

      {allSec &&  

  <section  className='nftImageFlexer' onMouseOver={hoverToshow} onMouseOut={hoverToClose} onWheel={mouseWheel}>

   
    {/* first set */}

    

    {showFirst ? <span className={enter + theNumber}> <div className={"image1"} onMouseOver={hoverIn1} onMouseOut={hoverOut1}><img src={charles} alt="" onClick={charlesFunc} />
     {hoverDetail1 && <><p className='nftSecNftName'>Charles Peterson Grunge Years <img src={verify} alt="" className='verify' /></p>
     <p className='floorPrice text-sm'>Floor 0.25 ETH</p></>}
    </div>
     <div className="image2" onMouseOver={hoverIn2} onMouseOut={hoverOut2}><img src={grapes} alt="" onClick={TheGrapesFunc}/>
    {hoverDetail2 && <> <p className='nftSecNftName'>The Grapes <img src={verify} alt="" className='verify'/></p>
     <p className='floorPrice text-sm'>Floor 0.11 ETH</p></>}
     </div>
     <div className="image3" onMouseOver={hoverIn3} onMouseOut={hoverOut3}><img src={artofSeason} alt="" onClick={artOfSeasonFunc} />
     {hoverDetail3 && <><p className='nftSecNftName'>The Art of Seasons <img src={verify} alt="" className='verify' /></p>
     <p className='floorPrice text-sm'>Floor 0.02 ETH</p></>}
     </div>

     </span> :

      

       <span className={enter + theNumber}>  <div className="image4" onMouseOver={hoverIn1} onMouseOut={hoverOut1}><img src={zeeverse} alt="" onClick={zeeverseFunc} />
       {hoverDetail1 && <> <p className='nftSecNftName'>Zeeverse: Items <img src={verify} alt="" className='verify' /></p>
       <p className='floorPrice text-sm'>Floor 0.01 ETH</p></>}
       </div>
     <div className="image5" onMouseOver={hoverIn2} onMouseOut={hoverOut2}><img src={impossible} alt="" onClick={impossibleFunc} />
      {hoverDetail2 &&<><p className='nftSecNftName'>The Impossible Creatures <img src={verify} alt="" className='verify' /></p>
     <p className='floorPrice text-sm'>Floor 0.15 ETH</p></>}
     </div>
     <div className="image6" onMouseOver={hoverIn3} onMouseOut={hoverOut3}><img src={getijde} alt=""  onClick={getijdeFunc}/>
     {hoverDetail3 && <> <p className='nftSecNftName'>Getijde by Bart Simons <img src={verify} alt="" className='verify' /></p>
     <p className='floorPrice text-sm'>Floor 0.25 ETH</p></>}
     </div>

     </span>}
    

 </section>
}

   {/* All Sec End  */}


   {/* Art Sec Start */}

   {artSec && <section className='artSec'>

    <div className='artNFTImgDiv'><img src={artNFTImg} alt="" className='artNFTImg' onClick={MomentsOfArgFunc} /></div>

    <p className='artImgName '>Moments of Argleton Lane </p>

    <p className='artImgDetails'><span>100 items</span> | <span>0.14 ETH</span></p>

    <p className='artImgViewCol'><span className='blurrer'></span> <span className='viewColTxt'>View Collection</span></p>


   </section>}

    {/* Art Sec End  */}


    {/* gaming sec start  */}

    {gamingSec && <section className='gamingSec'>
    <div className='artNFTImgDiv'><img src={gamingImg} alt="" onClick={embyFunc} className='artNFTImg' /></div>

    <p className='artImgName flex'>Emby <img src={verify} alt="" className='verify' /></p>

    <p className='artImgDetails'><span>2,750 items</span> | <span>0.172999 ETH</span></p>

    <p className='artImgViewCol'><span className='blurrer'></span> <span className='viewColTxt'>View Collection</span></p>


   </section>}


    {/* gaming sec end */}



    {/* Photography sec start */}

    {photographySec && <section className='photographySec'>
    <div className='artNFTImgDiv'><img src={photographyImg} alt="" onClick={CubaAPlaceFunc} className='artNFTImg' /></div>

    <p className='artImgName flex'>"Cuba" A place that stole my heart</p>

    <p className='artImgDetails'><span>30 items</span></p>

    <p className='artImgViewCol'><span className='blurrer'></span> <span className='viewColTxt'>View Collection</span></p>

   </section>}

    {/* Photography sec end */}


    {/* Membership sec Start */}

    {membershipSec && <section className='membershipSec'>
    <div className='artNFTImgDiv'><img src={musicImg} alt="" className='artNFTImg' onClick={HuneGenesisFunc} /></div>

    <p className='artImgName flex'>Hune Genesis <img src={verify} alt="" className='verify' /></p>

    <p className='artImgDetails'><span>1,035 items</span> | <span>0.03818 ETH</span></p>

    <p className='artImgViewCol'><span className='blurrer'></span> <span className='viewColTxt'>View Collection</span></p>

   </section>}

    {/* Membership sec end */}

    <h1 className='nftTrendingH1 text-3xl'><span className='explore'>Trending</span> <span className='our'> NFTs</span> <img src={spark} alt="" className='spark' /></h1>

    <SingleNft artOfSeasonFunc={artOfSeasonFunc} charlesFunc={charlesFunc} cloneXFunc={cloneXFunc} CourtyardFunc={CourtyardFunc} CubaAPlaceFunc={CubaAPlaceFunc} DoodlesFunc={DoodlesFunc} embyFunc={embyFunc} EnsEthFunc={EnsEthFunc} getijdeFunc={getijdeFunc} HuneGenesisFunc={HuneGenesisFunc} impossibleFunc={impossibleFunc} LilPudgysFunc={LilPudgysFunc} MomentsOfArgFunc={MomentsOfArgFunc} NakamigosFunc={NakamigosFunc} PudgyPenFunc={PudgyPenFunc}  RedactedRemiFunc={RedactedRemiFunc} SeedWorldFunc={SeedWorldFunc} TheGrapesFunc={TheGrapesFunc} RtfkktAnimusFunc={RtfkktAnimusFunc}  zeeverseFunc={zeeverseFunc}  />

    

    </section> }

    {artOfSeasonState && <ArtOfSeasons artOfSeasonFunc={artOfSeasonFunc} />}
    
    {charlesState && <CharlesPeters charlesFunc={charlesFunc} />}

     {cloneXState && <CloneX cloneXFunc={cloneXFunc} /> } 

     {courtyardState &&<Courtyard CourtyardFunc={CourtyardFunc} />}

     {CubaState && <CubaAPlace CubaAPlaceFunc={CubaAPlaceFunc} />}

     {doodleState && <Doodles DoodlesFunc={DoodlesFunc} />}

     {embyState && <Emby embyFunc={embyFunc} />}

     {ensEthState && <EnsEth EnsEthFunc={EnsEthFunc} />}

     {getijdeState && <Getide getijdeFunc={getijdeFunc} />}

     {huneGenesisState && <HuneGenesis HuneGenesisFunc={HuneGenesisFunc} />}

     {impossibleState && <Impossible impossibleFunc={impossibleFunc} />} 

     {lilPudgysState && <LilPudgys LilPudgysFunc={LilPudgysFunc} />}

     {momentsOfArgState && <MomentsOfArg MomentsOfArgFunc={MomentsOfArgFunc} />}

     {nakamigosState && <Nakamigos NakamigosFunc={NakamigosFunc} />}

     {pudgyPenState && <PudgyPen PudgyPenFunc={PudgyPenFunc} />}

     {redactedState && <RedactedRemi RedactedRemiFunc={RedactedRemiFunc} />}

     {rtfkktAnimusState && <RtfkktAnimus RtfkktAnimusFunc={RtfkktAnimusFunc} />}

     {seedWorldState && <SeedWorld SeedWorldFunc={SeedWorldFunc} />}

     {theGrapesState && <TheGrapes TheGrapesFunc={TheGrapesFunc} />}

     {zeeverseState && <Zeeverse zeeverseFunc={zeeverseFunc} />}

    
    </>
  )
}

export default NftSec
