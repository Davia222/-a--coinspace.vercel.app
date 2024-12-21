import React from 'react'
import backButton from "../assets/backButton.svg"

function Emby({embyFunc}) {
  return (
    <>
    <section>
   <div className='backDiv' onClick={embyFunc}>
   <img src={backButton} alt="" className='backButton'  />
   </div>
      

      </section>
   </>
  )
}

export default Emby
