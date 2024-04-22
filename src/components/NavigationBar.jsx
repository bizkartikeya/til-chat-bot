import React from 'react'
import navBg from '../assets/nav.jpg'
import bmLogo from "../assets/bizmetriclogo.png"
import msLogo from "../assets/microsoftlogo.png"
import tatalogo from "../assets/tatalogo.png"

const NavigationBar = () => {
  return (
    <div className='flex justify-between items-center px-2 h-12 w-[100%]' style={{ backgroundImage: `url(${navBg})`, backgroundRepeat:"no-repeat", backgroundSize:"cover" }}>
      <div className="flex flex-start items-center">
        <img src={tatalogo} className='h-10 w-10 m-2' alt="" />
        <div className="h-8 m-1 w-[1px] bg-white"></div>
        <p className='text-white text-xl font-extrabold ml-2'>TATA International Limited</p>
      </div>
      <div className="flex flex-end items-center">
        <p className='text-white text-sm font-semibold'>Powered By:</p>
        <img src={bmLogo} className='h-10 w-10 m-1' alt="" />
        <div className="h-8 w-[1px] bg-white m-1"></div>
        <img src={msLogo} className='h-6 m-2' alt="" />
      </div>
    </div>
  )
}

export default NavigationBar
