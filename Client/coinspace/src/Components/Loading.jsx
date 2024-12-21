import React, { useEffect, useState } from 'react'
import ScaleLoader from "react-spinners/ScaleLoader";

function Loading() {

    const[loader, setLoader] = useState(true)

    useEffect(()=>{
        setTimeout(()=>{
            setLoader(false)
        },[2000])

    },[])

  return (
    <>
   {loader && <div className='loadingScreen'>
    <ScaleLoader color='#CF02D9'/>
   </div>}
    </>
  )
}

export default Loading
