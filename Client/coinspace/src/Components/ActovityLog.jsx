import React, { useState, useEffect } from 'react';

const ActovityLog = () => {
  const [textIndex, setTextIndex] = useState(0);
  const texts = ["Withdrew from View-Only" , "Connected wallet", "Purchased an NFT", "Deposited to wallet"];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex(prevIndex => (prevIndex + 1) % texts.length);
    }, 5000); // Change 2000 to adjust how frequently the text changes (in milliseconds)

    return () => clearInterval(interval);
  }, []);

  const [number, setNumber] = useState(7645)

  useEffect(()=>{
    const min = 1000
    const max = 9000

    const numberInterval = setInterval(() => {
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min

      setNumber(randomNumber)
    }, 5000);

    return () => clearInterval(numberInterval)
  },[])

  //active users 

  const [randomNumber, setRandomNumber] = useState(1380);

  useEffect(() => {
    const interval = setInterval(() => {
      const min = 1200;
      const max = 1500;
      const newRandomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      setRandomNumber(newRandomNumber);
    }, 5000); // Change 1000 to adjust how frequently the number changes (in milliseconds)
    
    return () => clearInterval(interval);
  }, []);

  const [randomNumber2, setRandomNumber2] = useState(1380);

  useEffect(() => {
    const interval = setInterval(() => {
      const min = 1;
      const max = 60;
      const newRandomNumber2 = Math.floor(Math.random() * (max - min + 1)) + min;
      setRandomNumber2(newRandomNumber2);
    }, 5000); // Change 1000 to adjust how frequently the number changes (in milliseconds)
    
    return () => clearInterval(interval);
  }, []);


  return (
    <>
  <div className='activity-feed'>
      <p className='activity-item text-xs'><p className='activitySpace'></p>0x******{number} {texts[textIndex]}</p>

      <p className='randomNumber text-xs'>{randomNumber} active <span className='onlineIndicator'></span></p>      
    </div>
    </>
    
  );
};

export default ActovityLog;
