import React from 'react'
import backButton from "../assets/backButton.svg"

function LilPudgys({LilPudgysFunc}) {
  return (
    <>
    <section>
   <div className='backDiv' onClick={LilPudgysFunc}>
   <img src={backButton} alt="" className='backButton'  />
   </div>
      lil

      </section>
   </>
  )
}

export default LilPudgys
