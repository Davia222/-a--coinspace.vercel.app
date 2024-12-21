import React from 'react'
import backButton from "../assets/backButton.svg"

function EnsEth({EnsEthFunc}) {
  return (
    <>
    <section>
   <div className='backDiv' onClick={EnsEthFunc}>
   <img src={backButton} alt="" className='backButton'  />
   </div>
      

      </section>
   </>
  )
}

export default EnsEth
