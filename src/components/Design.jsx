import React, { useState, useEffect } from 'react';
import { EmblaDesign } from './EmblaDesign'
import { Link } from 'react-router-dom'

const Design = () => {
  return (
    // whole screen-height container
    <div className="bg-black h-screen z-10 flex flex-col justify-start items-center overflow-x-hidden overflow-y-scroll relative mx-0 my-0 px-0 py-0 box-border ">
      <div className="mt-40 z-10">
        <div className='myskills text-white font-poppins'>
          <h2 className='text-2xl text-center'>My UI/UX Design Samples</h2>
          <h3 className='text-md text-center px-10 mt-2 text-[#6F6F6F] font-poppins'>Let me show my works to you.</h3>
        </div>
        <div className='blogscard flex flex-col justify-center items-center'>
          <div className='mt-20 text-white flex flex-row justify-center items-center'>
            <EmblaDesign />
          </div>
        </div>
        <div className='w-screen mx-auto flex flex-row justify-center items-center my-10'><Link to='/' style={{ textDecoration: 'none' }}><button className='bg-black px-5 py-5 mt-5 hover:scale-50 transition-transform  delay-100 ease-linear cursor-pointer text-white font-poppins'><img src='/backarrow.svg' className='w-[60px] h-[60px]' /></button></Link></div>

        <div id="connect" className='bg-[#141414] mt-40 w-screen overflow-x-hidden mx-0 mb-0 font-poppins text-white text-2xl px-4 py-4 flex flex-col justify-center items-center'>
          <p className='my-5'>Let's Connect</p>
          <p className='text-[#6F6F6F] text-xl font-poppins text-center mb-10'>Hey there, ready to team up and make something awesome happen?</p>
          <button className='bg-white text-black font-poppins text-xl font-semibold px-4 py-2 rounded-3xl w-max flex flex-row justify-between items-center hover:bg-pink-500 hover:transition hover:ease-linear hover:text-white hover:translate-y-2'><span className='mr-3'><img src='/email.svg' /></span>Send Email</button>
          <div className='footer'>
            <div className="footer-head text-[#6F6F6F] text-xl mt-10 mb-5 text-center">Follow Me on :</div>
            <div className="footer-icons flex flex-row justify-evenly gap-4 items-center mb-20">
              <img src='/foot-github.svg' className='hover:translate-y-2 hover:transition hover:ease-linear cursor-pointer' />
              <img src='/foot-linkedin.svg' className='hover:translate-y-2 hover:transition hover:ease-linear cursor-pointer' />
              <img src='/foot-dribbble.svg' className='hover:translate-y-2 hover:transition hover:ease-linear cursor-pointer' />
              <img src='/foot-hashnode.svg' className='hover:translate-y-2 hover:transition hover:ease-linear cursor-pointer' />
              <img src='/foot-twitter.svg' className='hover:translate-y-2 hover:transition hover:ease-linear cursor-pointer' />
            </div>
            <div className="label text-[15px] text-[#6F6F6F] font-poppins mb-3 flex flex-row text-center"><span className='flex flex-col justify-center items-center mr-1'><img src='/copyrightlabel.svg' /></span>Designed & Developed by Subhadeep Chell</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Design