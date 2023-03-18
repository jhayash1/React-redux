import React from 'react'
import { useDispatch } from 'react-redux'
import { actionCreators } from '../state/index'
import { bindActionCreators } from 'redux'

const Shopping = () => {
    const dispatch = useDispatch();
    const {removeToCart ,addToCart} = bindActionCreators(actionCreators, dispatch)
  return (
    <div>
      <button className='btn btn-primary btn-sm mx-3 rounded' onClick={()=>{removeToCart(100)}}>-</button>
      <span>Add to cart</span>
      <button className='btn btn-primary btn-sm mx-3 rounded' onClick={()=>{addToCart(100)}}>+</button>
      {/* <button className='btn btn-primary btn-sm mx-3 rounded' onClick={()=>{dispatch(actionCreators.removeToCart(100))}}>-</button>
      <span>Add to cart</span>
      <button className='btn btn-primary btn-sm mx-3 rounded' onClick={()=>{dispatch(actionCreators.addToCart(100))}}>+</button> */}
    </div>
  )
}

export default Shopping
