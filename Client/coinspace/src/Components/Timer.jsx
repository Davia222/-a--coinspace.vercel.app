import React, { useEffect, useRef, useState } from 'react'

function Timer() {

    const[day, setDay] = useState("00")
    const[hour,setHour] = useState("00")
    const[min, setMin] = useState("00")
    const[secs,setSecs]= useState("00")

    let interval = useRef()

  const countDownFunc =()=>{

    const countDownDate = new Date("Dec 30, 2024 00:00:00").getTime()

    let interval = setInterval(() => {

        const now = new Date().getTime()
        const distance = countDownDate - now

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if(distance < 0){
                clearInterval(interval.current)
            }
            else{
                setDay(days)
                setHour(hours)
                setMin(minutes)
                setSecs(seconds)
            }

    }, 1000);
}

    useEffect(()=>{
        countDownFunc()
        return()=>{
            clearInterval(interval.current)
        }
    })


  return (
    <>
    <p>{day}</p>
    <p>{hour}</p>
    <p>{min}</p>
    <p>{secs}</p>
    </>
  )
}

export default Timer
