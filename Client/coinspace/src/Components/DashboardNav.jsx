import React, { useRef, useState } from 'react'
import vipImage from "../assets/verify.png"
import wallet from "../assets/wallet.svg"
import profileImage from "../assets/profileIcon.svg"
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom'
import Timer from '../Components/Timer'
import CountDown from '../Components/CountDown.jsx'
import processing from "../assets/processing.svg"
import cancelImg from "../assets/cancel.svg"

function DashboardNav() {
    const [username, setUserName]=useState("David")
    const[balance, setBalance]= useState(100)
    const[verify,setVerify] = useState(false)
    const [vipStatus, setVipStatus]= useState("")
    const[profileInfo, setProfileInfo] = useState(false)
    const [unlockVip, setUnlockVip] = useState(true)
    const [WalletAddress, setWalletAddress] = useState(null)
    const [hideUnlockBtn, setHideUnlockBtn] = useState(true)
    const[unlockTransSec, setUnlockTransSec] = useState(false)
    const [transactionStats, setTransactionStats] = useState("")
    const[transStatsTimeOut, setTransStatsTimeOut] = useState(true)
    const[fundWalletSec, setFundWalletSec] = useState(false)
    const[depositSec, setDepositSec]= useState(false)
    const [triggerTime, setTriggerTime] = useState(false)
    const[depositAmount, setDepositAmount] = useState(null)
    const[confirm,setConfirm] = useState(false)
    const[cancel,setCancel] = useState(false)
  
  
    // wallet connect to eth
  
  
    const connectWallet = async ()=>{
      if(window.ethereum){
        setWalletAddress(await window.ethereum.enable())
      }
  if(WalletAddress !== null){
    setHideUnlockBtn(false)
  }
  
  if(WalletAddress === null){
    setHideUnlockBtn(true)
  }
  
  
  // profile info sec
  
    }
  
    // open vip transaction sec
  
  const openVipTrans = ()=>{

    
    setUnlockTransSec(true)
  
    if(unlockTransSec === true){
      setProfileInfo(false)
    }
    
  }
  
    const openProfileInfo = async()=>{

      if(cancel === false){
        setCancel(true)
      }

      if(cancel === true){
        setCancel(false)
      }

  
      if(unlockTransSec === true){
        setUnlockTransSec(false)
      }
  
      // open profile stats
  
      setFundWalletSec(false)
  
     if(profileInfo === false){
      setProfileInfo(true)
     }
  
     else if(profileInfo === true){
      setProfileInfo(false)
     }
  
     //profile stats ends
  
     //vip status
  
     if(verify === false){
      setVipStatus("not verified")
    }
  
    if(verify === true){
      setVipStatus("verified")
    }
  
    //vip status ends
  
    //verify Button
  
    
  
    //unlock vip 
  
    if(verify === true){
      setUnlockVip(false)
    }
  
    if(verify === false){
      setUnlockVip(true)
    }
  
    if(depositSec === true){
      setDepositSec(false)
    }
  
    }
  
     //buy vip
     const buyVip = async ()=>{
      if(balance < 50){
        setTransactionStats("Insufficient Balance")
      }
  
      if(balance >= 50){
        let minus = balance - 50
  
        if(minus){
          setBalance(minus)
          setTransactionStats("VIP Unlocked")
          setVerify(true)
        }
  
  
      }
  
      setTimeout(() => {   
        setTransStatsTimeOut(false)
  
      }, 3000); 
  
     setTimeout(()=>{
      setUnlockTransSec(false)
      setProfileInfo(false)
     },3000)

     
  
    }
  
    //fund wallet section
  
    const fundWalletsecOpen = ()=>{

      if(cancel === false){
        setCancel(true)
      }

      if(cancel === true){
        setCancel(false)
      }

      setProfileInfo(false)
  
      if(fundWalletSec === false){
        setFundWalletSec(true)
      }
      if(fundWalletSec === true){
        setFundWalletSec(false)
      }
  
      if(depositSec === true){
        setDepositSec(false)
      }

      if(confirm === true){
        setConfirm(false)
      }
      
    }
  
    const valueCheck = useRef(null)
  
    const openDepositSec =()=>{
  
      if(triggerTime === false){
      setTriggerTime(true)}
  
      if(fundWalletSec === true){
        setFundWalletSec(false)}    
  
        if(valueCheck.current.value === ""){
          setDepositSec(false)
          setFundWalletSec(true)
        }
        
        if(valueCheck.current.value < 10){
          setDepositSec(false)
          setFundWalletSec(true)
          alert("Minimum deposit amount: 10 usd")
        }
        
        else {
          setDepositSec(true)
        }  
  
    }
  
    const confirmation = ()=>{
  
      if(depositSec === true){
      setDepositSec(false)}
  
      if(confirm === false){
      setConfirm(true)}
  
      if(confirm === true){
        setConfirm(false)
      }
     
    }
  

    const cancleFunc =()=>{
     
     setProfileInfo(false)
     setDepositSec(false)
     setUnlockTransSec(false)
     setFundWalletSec(false)
     setCancel(false)
    }

    return (
      <>
       <section className='dashboardHeader'>
  
        <section className='headerBorder'>
       
       <div className='homeLogoDiv'>
        <div className='homeLogoImgDiv'><img src={logo} alt="" className='homeLogoImg' /></div>
        <p>Coinex</p>
        </div>
  
        <div className='username'>
          <div className='name'>
  
            <div className='profileIconImgDiv' onClick={openProfileInfo}>
           <img src={profileImage} alt="" className='profileIcon'/> 
           </div>
  
           <p className='nameP'>{username}
          {verify && <img src={vipImage} alt="" className='vipImage' />}
           </p>
           </div>
  
           <div className='balance'>
           <div className='walletIconDiv'>
            <img src={wallet} alt="" className='walletLogo' onClick={fundWalletsecOpen} />
            </div>
           <p>{balance} usdt</p>
           </div>
  
           </div>
  
       </section>
  
       </section>

       
       

      {profileInfo && <section className='accountStats highZIndex'>

      {cancel && <div className='cancel' onClick={cancleFunc}><img src={cancelImg} alt="" /></div>}
        
        <p></p>
  
        <h1>Profile Info</h1>
  
        <p>Username: <span className='accStatsName'>{username}</span></p>
  
        <p className='walletAddress'><span className='walletText'>Wallet Address:</span> <span className='walletText2' >{WalletAddress}</span> 
        
        {hideUnlockBtn && <span className='loginButton text-xs' onClick={connectWallet}>connect </span>}
  
        </p>
  
        <p className='vipStatusP'>VIP: <span className='vipstatusStats'>{vipStatus}</span>
  
         { unlockVip &&<span className='loginButton text-xs' onClick={openVipTrans}>Unlock VIP</span>}
  
         </p>
  
        <p>
          
        </p>
  
       </section>}
  
       {unlockTransSec && <section className='vipTransSec highZIndex'>
       {cancel && <div className='cancel' onClick={cancleFunc}><img src={cancelImg} alt="" /></div>}

        <p></p>
        <h1>Unlock VIP features: </h1>
  
        <p>1. Input custom amount</p>
        
        <p>2. NFT premuim discount</p>
  
        <button className='loginButton text-xs' onClick={buyVip}>Unlock</button>
  
        <p className='text-xs oneTimeDisclaimer'>A One Time fee of 50 usdt will be charged</p>
  
        {transStatsTimeOut && <p className='insufAndVerified '>{transactionStats}</p>}
  
        <p></p>
        </section>}
  
        {fundWalletSec && <section className='fundWalletSec highZIndex'>
        {cancel && <div className='cancel' onClick={cancleFunc}><img src={cancelImg} alt="" /></div>}
          <p></p>
  
          <p>Your total balance: {balance} </p>
  
          <div className='hoverAfter'>Coupons: <span className='gray'>( 1 )</span></div>
  
          <p>Deposit to wallet</p>
  
          <div className='inputAmountDiv'>
            <p className='amountP'>Amount in USDT:</p>
  
            <input type="number" className='inputAmount text-sm' placeholder='100' ref={valueCheck} onChange={((e)=>{setDepositAmount(e.target.value)})}/>
  
            </div>
  
            <button className='loginButton text-xs' onClick={openDepositSec}>Deposit</button>
            <p></p>
  
            <p className='gray text-xs'>Note: Minimum deposit amount: 10 usdt</p>
  
            <p></p>
  
  
          </section>  
        }
  
        {depositSec && <section className='Count-Down highZIndex'>
        {cancel && <div className='cancel' onClick={cancleFunc}><img src={cancelImg} alt="" /></div>}
  
          <p></p>
          {/* <Timer></Timer> */}
          {triggerTime && <CountDown></CountDown>}
  
          <p>{depositAmount} <span className='gray text-sm'> USDT-TRC20</span></p>
  
          <p className='text-xs'>TCRD6Exa3W4Gs7zG8aHVpajGoYbKo8R7D9</p>
  
          <p className='text-center pl-5 gray text-xs'>- Send Strictly the amount you specified while depositing.</p>
  
          <p className='text-center pl-5 gray text-xs'>- We do AML checks for all payments to proctect website the from hackers</p>
  
          <p className='loginButton' onClick={confirmation}>Done</p>
  
          <p></p>
          <p></p>
  
        </section> }
  
        {confirm && <section className='confirmSec highZIndex'>
          <p></p>
          <p>Proccessing Payment  . . .</p>
          <div>
            <img src={processing} alt="" />
          </div>
  
          <p className='gray text-xs text-center'>Balance would be updated shortly once payment is confirmed</p>
  
          <p className='loginButton' onClick={confirmation}>Close</p>
          <p></p>
         
  
          </section>}
  
        
  
  
      </>
    )
}

export default DashboardNav
