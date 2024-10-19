import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllProducts } from '../redux/slices/productSlice'
import { all } from 'axios'

const Home = () => {
  const dispatch = useDispatch()
  const {allProducts,loading,error} = useSelector(state=>state.productReducer)
  // console.log(allProducts,loading,error);
  const [currentPage,setcurrentPage] = useState(1)
  const productPerPage = 8
  const totalPage = Math.ceil(allProducts?.length/productPerPage)
  const currentPageLastProductIndex =  currentPage + productPerPage
  const currentPageFirstProductIndex = currentPageLastProductIndex - productPerPage
  const visibleProductCards = allProducts?.slice(currentPageFirstProductIndex,currentPageLastProductIndex)
  
  useEffect(()=>{
    dispatch(fetchAllProducts())
  },[])

  const navigateToNextPage = ()=>{
    if(currentPage!=totalPage){
      setcurrentPage(currentPage+1)
    }
  }

  const navigateToPreviousPage = ()=>{
    if(currentPage!=1){
      setcurrentPage(currentPage-1)
    }
  }
  return (
    <>
    <Header insideHome={true}/>
    
      <div style={{paddingTop:'100px'}} className='container px-4 mx-auto'>
       { 
        loading ?
        <div className="flex justify-center items-center my-5">
          <img width={'70px'} height={'70px'} src="https://www.purplerosetheatre.org/wp-content/themes/dt-the7-child-2020/images/loader.gif" alt="" className="me-2" /> Loading...
        </div>
        :
        <>
        <div className="grid grid-cols-4 gap-4 ">
        {
          allProducts?.length>0 ?
          visibleProductCards?.map(product=>(
            <div key={product?.id} className="rounded border p-2 shadow">
            <img width={'100%'} height={'200px'} src={product?.thumbnail} alt="" />
            <div className="text-center ">
              <h3 className='text-xl font-bold'>{product?.title}</h3>
              <Link className=' bg-pink-500 text-white p-1 mt-3 rounded inline-block'  to={`${product?.id}/view`}>View More</Link>
            </div>
          </div>
          ))
          :
          <div className="flex font-bold justify-center items-center text-red-600 my-5 text-lg">Product Not Found!!!</div>
        }
        </div>

        <div className="text-center my-5 font-bold text-xl mt-20 ">
          <span onClick={navigateToPreviousPage} className='cursor-pointer'> <i className="fa-solid fa-backward me-5"></i> </span>
          <span className='me-5'> {currentPage} of {totalPage}  </span>
          <span onClick={navigateToNextPage} className='cursor-pointer'> <i className="fa-solid fa-forward me-5"></i> </span>

        </div>

        </>
        }

      </div>
    
    </>
  )
}

export default Home