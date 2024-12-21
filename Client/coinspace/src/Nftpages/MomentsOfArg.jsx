import React from 'react'
import backButton from "../assets/backButton.svg"

function MomentsOfArg({MomentsOfArgFunc}) {
  return (
    <>
     <section>
    <div className='backDiv' onClick={MomentsOfArgFunc}>
    <img src={backButton} alt="" className='backButton'  />
    </div>
       

       </section>
    </>
  )
}

export default MomentsOfArg
