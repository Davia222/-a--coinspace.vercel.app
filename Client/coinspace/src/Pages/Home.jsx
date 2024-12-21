import React, { useEffect, useState } from "react"
import DashboardNav from "../Components/DashboardNav"
import ActovityLog from "../Components/ActovityLog"
import Swtcher from "../Components/Swtcher.jsx"
import NftSec from "../Components/NftSec.jsx"
import ViewOnlySec from "../Components/ViewOnlySec.jsx"





function Home() {

  const [nftColor,setNftColor] = useState("nftSwitch")
  const[watchColor, setWatchColor] = useState("")
  const[nftSecOn, setNftSecOn] = useState(true)
  const[viewOnlySecOn,setViewOnlySecOn] = useState(false)

  const nftSwitch =()=>{
    setNftColor("nftSwitch")
    setWatchColor("")

   if(nftSecOn === false){
    setNftSecOn(true)
    setViewOnlySecOn(false)
   }
   
  }

  const watchOnlySwitch =()=>{
    setWatchColor("watchOnlySwitch")
    setNftColor("")

    if(viewOnlySecOn === false){
      setViewOnlySecOn(true)
      setNftSecOn(false)
    }
  }


  return(
    <>
    <DashboardNav/>
    <ActovityLog/>

    <section className='switchSec'>
   <div className='switchDiv'>
    <div className={nftColor} onClick={nftSwitch}><p>NFT</p></div>

    <div className={watchColor} onClick={watchOnlySwitch}><p>View-Only</p></div>
   </div>
   </section>

    {nftSecOn && <NftSec nftSecOn={nftSecOn} />}

    {viewOnlySecOn && <ViewOnlySec/>}



    </>
  )
}

export default Home
