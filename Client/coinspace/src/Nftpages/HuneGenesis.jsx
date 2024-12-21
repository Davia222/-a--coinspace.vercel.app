import React from 'react'
import backButton from "../assets/backButton.svg"

function HuneGenesis({HuneGenesisFunc}) {
  return (
    <>
     <section>
    <div className='backDiv' onClick={HuneGenesisFunc}>
    <img src={backButton} alt="" className='backButton'  />
    </div>
       

       </section>
    </>
  )
}

export default HuneGenesis
