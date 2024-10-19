import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

const Pnf = () => {
  return (
    <>
    <Header/>
    <div style={{paddingTop:'100px',height:'80vh'}} className='flex justify-center items-center flex-col'>
      <h1 className="font-bold text-8xl mb-2">404</h1>
      <img width={'200px'} height={'500px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlM2_DuSn-uPncTe2ghvsme_xi6_6677vdDA&s" alt="" />
      <h1 className='font-bold text-4xl mb-2'>Looks like You're Lost.</h1>
      <p className="mb-2">The page you are looking for is not available!!!</p>
      <Link to={'/'} className=' bg-pink-500 p-2 text-white rounded'>Home</Link>
    </div>
    </>
  )
}

export default Pnf