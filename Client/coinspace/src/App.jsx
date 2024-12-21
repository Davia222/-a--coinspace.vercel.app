import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LandingPage from './Pages/LandingPage'
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import SignUp from "./Pages/SignUp"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './Components/Nav'
import Loading from './Components/Loading'
import Terms from './Pages/Terms'
import PrivacyPolicy from './Pages/PrivacyPolicy'
import Disclaimer from './Pages/Disclaimer'
import "./Second.css"
import "./Home.css"
import "./NftAndViewOnly.css"
import "./nftPages.css"



function App() {
 
  return (
    <>
    <BrowserRouter>
    <Loading/>
    <Routes>
      <Route path='/dashboard' element={<Home/>}/>
      <Route path='/' element={<LandingPage/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/disclaimer' element={<Disclaimer/>}/>
      <Route path="/terms" element={<Terms/>}/>
      <Route path='/privacy' element={<PrivacyPolicy/>}/>
    </Routes>

    </BrowserRouter>
    </>
  )
}

export default App
