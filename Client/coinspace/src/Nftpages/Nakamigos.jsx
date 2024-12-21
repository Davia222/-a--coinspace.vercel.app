import React from 'react'
import backButton from "../assets/backButton.svg"

function Nakamigos({NakamigosFunc}) {
  return (
    <>
    <section>
   <div className='backDiv' onClick={NakamigosFunc}>
   <img src={backButton} alt="" className='backButton'  />
   </div>
      

      </section>
   </>
  )
}

export default Nakamigos
