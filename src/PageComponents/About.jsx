import React, { useLayoutEffect, useRef } from 'react'
import NavbarPage from './Navbar'
import FooterPage from './Footer'
import gsap from 'gsap'

const AboutPage = () => {
    const about = useRef(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const slider = gsap.timeline();
      slider.from('#aboutBox',{
        yPercent: '-100',
        duration: 1
      })
      .from('#aboutHead',{
        opacity: 0,
        duration: 1,
        delay: 0.5
      })
    },about)
    return () => ctx.revert();
  },[])
  return (
    <>
        <section ref={about}>
            <section id='aboutBox'>
            <div>
                <NavbarPage/>
            </div>
                 <div className='my-8 flex flex-col justify-center items-center'>
                <div className='w-full font-libre' id='aboutHead'>
                    <h1 className=' font-libre text-[5vw] font-bold text-center'>ABOUT</h1>
                    <h1 className=' font-libre text-[8vw] font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#103ce7] to-[#64e9ff]'>THE TRIFUSION</h1>
                </div>
                <div className='w-full flex flex-col gap-4 xm:gap-0 justify-center items-center m:flex-row'>
                    <div className='w-[80vw] xm:w-[70vw]'>
                        <article className='text-wrap text-xl p-8 text-justify xm:text-2xl font-raleway'>
                        The TriFusion is a dynamic company at the forefront of innovation in
            web development, app development, sales, and digital marketing.
            Founded with a vision to revolutionize these industries, we combine
            cutting-edge technology with creative strategies to empower
            businesses of all sizes. Our team of skilled professionals is
            dedicated to delivering tailored solutions that drive growth and
            success. With a focus on quality, efficiency, and customer
            satisfaction, Tri Fusion strives to exceed expectations and make a
            lasting impact in the digital world.
                        </article>
                    </div>
                    <div className='w-[80vw] xm:w-[30vw] content-center justify-items-center'>
                        <img src="../Images/footer-logo.png" alt="" />
                    </div>
                </div>
            </div>
            <div>
                <FooterPage/>
            </div>
            </section>
        </section>
    </>
  )
}

export default AboutPage