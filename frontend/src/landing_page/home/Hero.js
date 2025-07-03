import React from 'react'
import 'remixicon/fonts/remixicon.css'
function Hero() {
  return (
    <div className='container p-5 mb-5'>
      <div className='row text-center'>
    <img src='images/homeHero.png' className='mb-5'>
    </img>
    <h1 className='mt-5 '>
      Invest in Everything
    </h1>
    <p>
      Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more. 
    </p>
    <button className='p-3 fs-5 btn btn-primary mt-3' style={{width:"20%",margin:"0 auto"}}>
      SignUp for free
    </button>
      </div>
      
    </div>
  )
}

export default Hero