import React from 'react'
import backButton from "../assets/backButton.svg"

function CloneX({cloneXFunc}) {
  return (
    <>
    <section>
   <div className='backDiv' onClick={cloneXFunc}>
   <img src={backButton} alt="" className='backButton'  />
   </div>
      
cloud
      </section>
   </>
  )
}

export default CloneX
