import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import {Outlet} from 'react-router-dom'
import AnimatedCursor from "react-animated-cursor"
import Preloader from './components/Preloader/Preloader'

function Layout() {
  return (
    <>
        <AnimatedCursor 
        innerSize={9}
        outerSize={40}
        color="193, 11, 111"
        outerAlpha={.2}
        innerScale={0.7}
        outerScale={3}
        clickables={[
          
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link'
        ]} />
        <Preloader />
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}

export default Layout