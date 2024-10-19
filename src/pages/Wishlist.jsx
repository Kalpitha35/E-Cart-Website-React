import React from 'react'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { removeWishlistItem } from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'


const Wishlist = () => {

  const dispatch = useDispatch()

  const userCart = useSelector(state => state.cartReducer)
  const userWishlist = useSelector(state => state.wishlistReducer)

  const handleCart = (product) => {
    dispatch(addToCart(product))
    const existingProduct = userCart?.find(item => item.id == product.id)
    dispatch(removeWishlistItem(product?.id))
    if (existingProduct) {
      alert("Product Quantity is Incrementing!!!")
    } 
  }

  return (
    <>
      <Header />

      <div style={{ paddingTop: '100px' }} className='container px-4 ms-auto'>
        {
          userWishlist?.length > 0 ?
            <>
              <h1 className="text-5xl font-bold text-pink-500">My Wishlist</h1>
              <div className="grid grid-cols-4 gap-4 mt-5">
                {
                  userWishlist?.map(product => (
                    <div key={product?.id} className="rounded border p-2 shadow">
                      <img width={'100%'} height={'200px'} src={product?.thumbnail} alt="" />
                      <div className="text-center">
                        <h1 className='text-xl font-bold'>{product?.title}</h1>
                        <div className="flex justify-evenly mt-3">

                          <button onClick={() => dispatch(removeWishlistItem(product?.id))} className="text-xl ">
                            <i className="fa-solid fa-heart-circle-xmark text-red-600"></i>
                          </button>
                          <button onClick={() => handleCart(product)} className="text-xl">
                            <i className="fa-solid fa-cart-plus text-green-600"></i>
                          </button>

                        </div>


                      </div>
                    </div>
                  ))
                }
              </div>
            </>
            :
            <div className='flex flex-col justify-center items-center'>
              <img src="https://www.adanione.com/~/media/Foundation/Adani/emptyImages/empty_cart.gif" alt="" />
              <h1 style={{ marginTop: '20px' }} className="text-pink-600 font-bold text-3xl my-5">Your Wishlist is Empty!!!</h1>
            </div>
        }

      </div>

    </>
  )
}

export default Wishlist