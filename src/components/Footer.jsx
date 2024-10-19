import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div style={{height:'250px',marginTop:'100px'}} className='mt-5 w-full  bg-pink-500 text-white p-4'>
      
      <div className="flex justify-between m-5">
        <div style={{width:'400px'}} className="intro">
          <h5 className="text-xl font-bold"> <i className="fa-solid fa-truck-fast me-2"></i>E Cart </h5>
          <p>Designed and built with all the love in the world by the Luminar team with the help of our contributers. </p>
          <p>Code licenced Luminar, docs CC BY 3.0.</p>
          <p>Currently v5.3.2.</p>
        </div>

        <div className="flex flex-col">
        <h5 className="text-xl font-bold">Links</h5>
        <Link to={'/'}>Landing page</Link>
        <Link to={'/landing'}>Home page</Link>
        <Link to={'/cart'}>Cart page</Link>

        </div>
        <div className="flex flex-col">
        <h5 className="text-xl font-bold">Guides</h5>
        <Link to={'/'}>React</Link>
        <Link to={'/home'}>React Bootstrap</Link>
        <Link to={'/cart'}>React Router</Link>
        </div>
        <div className="flex flex-col">
        <h5 className="text-xl font-bold">Contact us</h5>
        
       <div className='flex flex-row'>
          <input style={{height:'35px'}} className='border rounded inline-block ' type="text" placeholder='Enter your email here' />
            <i style={{width:'40px', height:'40px', paddingTop:'10px', paddingLeft:'10px',  borderRadius:'10px'}} className="fa-solid fa-arrow-right "></i>
       </div>
          <div style={{color:'white', marginTop:'20px', marginLeft:'-20px'}} className="flex justify-evenly ">
         
          <a href="" target='_blank' style={{textDecoration:'none', color:'white'}}><i className="fa-brands fa-twitter"></i></a>
          <a href="" target='_blank' style={{textDecoration:'none', color:'white'}}><i className="fa-brands fa-instagram"></i></a>
          <a href="" target='_blank' style={{textDecoration:'none', color:'white'}}><i className="fa-brands fa-facebook"></i></a>
          <a href="" target='_blank' style={{textDecoration:'none', color:'white'}}><i className="fa-brands fa-linkedin"></i></a>
          <a href="" target='_blank' style={{textDecoration:'none', color:'white'}}><i className="fa-brands fa-github"></i></a>
          <a href="" target='_blank' style={{textDecoration:'none', color:'white'}}><i className="fa-brands fa-phone"></i></a>

          </div>
 
        
        </div>
      </div>

     <div className='text-center text-white'> <span >Copyright June 2024 Batch, Media Player.Built with React Redux</span></div>
    </div>
  )
}

export default Footer