import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import mainLogo from "../assets/logo.png"
import openEye from "../assets/openEye.svg"
import closeEye from "../assets/closeEye.svg"


function SignUp() {

  const [eye, setEye] = useState(openEye)
  const[inputType, setInputType] = useState("password")

  const eyeChanger = ()=>{
    if(eye === openEye ){
     setEye(closeEye)
     setInputType("text")
  }

  if (eye === closeEye){
    setEye(openEye)
    setInputType("password")
  }
}

const [formProperty, setFormProperty] = useState({
  username:"",
  email: "",
  phone:"",
  password:""
})



const handleForm = (e)=>{
  const{name, value} = e.target
   e.preventDefault()

  setFormProperty((prev)=>{
    return {...prev, [name]: value}
  })

}

const data = [formProperty]

  return (
   <>
   <section className='login'>

    
    <div className='SignUpDiv'>

      <div className='createAccountFlexer'> <h1 className='welcomeBack'>Create An Account</h1>
      <img src={mainLogo} alt=""  style={{height:"70px"}}/>
      </div>

      <form action="" className='signUpForm' onSubmit={handleForm}>

      <h1 className='loginH1'>Sign Up</h1>

      <div className='signUpEmailDiv'><input type="text" name="username" id="email" placeholder='Username' onChange={handleForm}/></div>

      <div className='signUpEmailDiv'><input type="email" name="email" id="email" placeholder='Email' onChange={handleForm}/></div>

      <div className='signUpEmailDiv'><input type="" name="phone" id="email" placeholder='Phone No.' onChange={handleForm}/></div>

      <div className='signUpPasswordDiv'>
        <input type={inputType} name="password" id="password"  placeholder='Password' onChange={handleForm}/> 
        <div className='passwordEye' onClick={eyeChanger}><img src={eye} alt="" className='eyeImage' /></div>
      </div>

      <div className='signUpPasswordDiv'>
        <input type={inputType} name="password" id="password"  placeholder='Confirm Password' onChange={handleForm}/> 
        <div className='passwordEye' onClick={eyeChanger}><img src={eye} alt="" className='eyeImage' /></div>
      </div>

      <button className='getStarted'>Sign Up</button>

      </form>

      <Link to="/login" className='signUpLink'>Already Have An account? <span className="signUpInLogin">Login</span></Link>

     
    </div>
   </section>

   {/* <div>{data.map((item,id) => <p key={id}>
    <p>{item.username}</p>
    <p>{item.phone}</p>
    <p>{item.email}</p>
    <p>{item.password}</p>
    </p>)}</div>  */}
   </>
  )
}

export default SignUp