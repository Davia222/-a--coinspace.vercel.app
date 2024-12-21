import React from 'react'
import backButton from "../assets/backButton.svg"

function CharlesPeters({charlesFunc}) {

  return (
    <>
     <section>
    <div className='backDiv' onClick={charlesFunc}>
    <img src={backButton} alt="" className='backButton'  />
    the
    </div>
       

       </section>
    </>
  )
}

export default CharlesPeters
