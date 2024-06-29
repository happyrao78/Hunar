import React, { useEffect } from 'react'
import './Preloader.css'
import { preLoaderAnim } from '../../Animations/index'
function Preloader() {
    useEffect(()=>{
        preLoaderAnim()
    },[]);
  return (
    <div className='preloader'>
        <div className='texts-container'>
            <span>Welcome</span>
            <span>to</span>
            <span>NewsMania</span>
        </div>
    </div>
  )
}

export default Preloader