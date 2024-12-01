import React, { useLayoutEffect, useRef } from 'react'
import NavbarPage from './Navbar'
import FooterPage from './Footer'
import gsap from 'gsap'

const AboutPage = () => {
    const about = useRef(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const slider = gsap.timeline();
      slider.from('#navbarBox',{
        yPercent: '-100',
        duration: 1,
        delay: 0.5
      })
      .from('#aboutBox',{
        yPercent: '100',
        duration: 1,
        delay: 0.5,
        zIndex: 0
      })
      .from('#aboutHead',{
        opacity: 0,
        duration: 1,
        delay: 0.5
      })
      .from('#footerBox',{
        yPercent: '100',
        duration: 1,
        delay: 0.5
      })
    },about)
    return () => ctx.revert();
  },[])
  return (
    <>
        <section ref={about}>
            <section>
            <div id='navbarBox'>
                <NavbarPage/>
            </div>
                 <div className='my-8 flex flex-col justify-center items-center' id='aboutBox'>
                <div className='w-full font-libre flex flex-col gap-4 justify-center items-center pb-4' id='aboutHead'>
                    <h1 className=' font-libre text-[5vw] font-bold text-center'>ABOUT</h1>
                    <h1 className=' font-libre text-[5vw] font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#103ce7] to-[#64e9ff]'>THE TRIFUSION</h1>
                </div>
                <div className='bg-gradient-to-r from-[#103ce7] to-[#64e9ff] h-[5vh] w-full'>
                </div>
                <div className='w-full flex flex-col gap-4 xm:gap-0 justify-center items-center m:flex-row'>
                    <div className='w-[80vw] xm:w-[70vw]'>
                        <article className='text-wrap text-xl p-8 text-justify xm:text-2xl font-raleway'>
                        The TriFusion is a dynamic company at the forefront of innovation in
            web development, app development, digital marketing, and sales.
            This company was founded with a vision to revolutionize these industries, Combining
            cutting-edge technology with creative strategies, we empower
            businesses of all sizes. Our team of skilled professionals is
            dedicated to delivering tailored solutions that drive growth and
            success. With a focus on quality, efficiency, and customer
            satisfaction, The TriFusion strives to exceed expectations and make a
            lasting impact in the digital world.
                        </article>
                    </div>
                    <div className='w-[80vw] xm:w-[30vw] content-center justify-items-center'>
                        <img src="../Images/company-logo.jpg" alt="" />
                    </div>
                </div>
            </div>
            <div id='footerBox'>
                <FooterPage/>
            </div>
            </section>
        </section>
    </>
  )
}

export default AboutPage
