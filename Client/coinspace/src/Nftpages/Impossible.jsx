import React from 'react'
import backButton from "../assets/backButton.svg"

function Impossible({impossibleFunc}) {
  return (
    <>
     <section>
    <div className='backDiv' onClick={impossibleFunc}>
    <img src={backButton} alt="" className='backButton'  />
    </div>
       

       </section>
    </>
  )
}

export default Impossible
