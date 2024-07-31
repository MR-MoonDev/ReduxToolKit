import React from 'react'
import { addItem } from '../slices/SliceCard';
import { useDispatch } from 'react-redux'
import pic from '../assets/shoes.png';
useDispatch
const ProductItem = (props) => {
    const dispatch = useDispatch();
    
  return (
    <>
        <div className='flex flex-col  gap-5 px-2 rounded-md bg-gray-300 max-w-xs ml-3 items-center'>
        <div className='h-min border-black border-2 w-80  flex items-center  justify-center'>
        <img src={pic} alt="img not found"/>
        </div>
        <div className='flex flex-col gap-3'>
          <div className='text-center p-1 whitespace-normal overflow-hidden'>
          <p className='underline underline-offset-8 '>shoe</p>
          </div>
          
          <div className='border-2 text-center rounded-md border-black p-1'>
           RS. 229/- 
          </div>
          <div>
            <button onClick={e=>dispatch(addItem({name:props.productname,price:props.price}))} className='border-2 bg-blue-500 hover:bg-blue-400 border-blue-300 p-2 m-2 rounded-md text-white'>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductItem