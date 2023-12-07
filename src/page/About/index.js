import React from 'react'
import Topic from '../About/Topic'
import Footer from '../Footer'
import HeaderBgBlue from './HeaderBgBlue'
import '../../css/About.css'
import Content1 from './Content1'

const index = () => {
  return (
    <>
    <HeaderBgBlue />
    <div className="p-absolute">
      <Topic />
      <Content1 />
      <Footer />
    </div>
    </>
  )
}

export default index
