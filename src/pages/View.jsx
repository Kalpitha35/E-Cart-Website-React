import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToWishlist } from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'

const View = () => {
  const {id} = useParams()
  // console.log(id);
  const [product,setProduct] = useState({})

  const userCart = useSelector(state=>state.cartReducer)
  const userWishlist = useSelector(state=>state.wishlistReducer)
  const dispatch = useDispatch()


  useEffect(()=>{
    if(sessionStorage.getItem("allProducts")){
      const allProducts = JSON.parse(sessionStorage.getItem("allProducts"))
      setProduct(allProducts?.find(item=>item.id==id))
    }
  },[])

  // console.log(product);

  const handleWishlist = (product)=>{
    const existingProduct = userWishlist?.find(item=>item.id==product.id)
    if(existingProduct){
      alert("Product already in your Wishlist!!!")
    }else{
      dispatch(addToWishlist(product))
    }
  }

  const handleCart = (product)=>{
    dispatch(addToCart(product))
    const existingProduct = userCart?.find(item=>item.id==product.id)
    if(existingProduct){
      alert("Product Quantity is Incrementing!!!")
    }
  }




  return (
    <>
      <Header/>
      <div style={{paddingTop:'100px'}} className='flex content-center items-center mx-5'>
        <div className="grid grid-cols-2 items-center">
            <img width={'80%'} height={'250px'} src={product?.thumbnail} alt="" />
            <div>
              <h3>PID : 6</h3>
              <h1 className='text-5xl font-bold'>{product?.title}</h1>
              <h4 className='text-2xl text-red-600 font-bold '>$ {product?.price}</h4>
              <h3 className="font-bold my-2 text-pink-700">Brand : {product?.brand} </h3>
              <h3 className="font-bold my-2 text-pink-700">Category : {product?.category} </h3>
              <p>
                <span className='font-bold'>Description</span>: {product?.description} 
              </p>
              <div className="flex justify-between mt-5">
                <button onClick={()=>handleWishlist(product)} className="text-white bg-blue-500 rounded p-2">Add To Wishlist</button>
                <button onClick={()=>handleCart(product)} className="text-white bg-green-500 rounded p-2">Add To Cart</button>
              </div>
              <h3 className="font-bold my-5">Client Reviews</h3>
              {
                product?.reviews?.length>0 ?
                product?.reviews?.map(item=>(
                  <div key={item?.date} className="shadow rounded p-2 my-2">
                    <h5>
                      <span className='font-bold'>{item?.reviewerName} : </span> {item?.comment}
                    </h5>
                    <p>Rating : {item?.rating} </p>
                  </div>
                ))
                :
                <p className='font-bold text-red-600'>No Reviews Yet!!!</p>
              }
            
            </div>
        </div>
      </div>
    </>
  )
}

export default View