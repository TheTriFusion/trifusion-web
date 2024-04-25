import React, { useLayoutEffect, useRef } from 'react'
import NavbarPage from './Navbar'
import FooterPage from './Footer'
import gsap from 'gsap'

const ContactPage = () => {
  const contact = useRef(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const slider = gsap.timeline();
      slider.from('#contactBox',{
        yPercent: '-100',
        duration: 1
      })
      .from('#contactHead',{
        opacity: 0,
        duration: 1,
        delay: 0.5
      })
    },contact)
    return () => ctx.revert();
  },[])
  return (
    <>
        <section ref={contact}>
            <section id='contactBox'>
            <div>
              <NavbarPage/>
            </div>
                        <div className='my-8 flex flex-col justify-center items-center'> 
                <div className='w-full font-libre' id='contactHead'>
                    <h1 className=' text-[5vw] font-bold text-center'>CONTACT</h1>
                    <h1 className=' text-[8vw] font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#103ce7] to-[#64e9ff]'>THE TRIFUSION</h1>
                </div>
                <div className='bg-gradient-to-r from-[#103ce7] to-[#64e9ff] h-[10vh] w-full'>
                </div>
                 <div className="flex flex-col m-4 h-max justify-evenly items-center rounded-3xl m:max-3xl:flex-row m:max-3xl:m-32 shadow-lg shadow-black w-max px-2">
        <img src="../Images/contact-form.png" alt="" className="w-64 h-full m-4 m:max-3xl:w-96"/>
            <form
                  action="https://public.herotofu.com/v1/b0d809f0-e083-11ee-8c4a-ef8963b6ff8b"
                  method="post"
                  accept-charset="UTF-8"
                  className="m-4 flex flex-col gap-3 justify-center items-center"
                >
                  <div className="w-60 m-2 m:max-3xl:w-96">
                    <label for="name" className="text-xl font-raleway font-semibold">
                      First Name
                    </label>
                    <br />
                    <input
                      name="Name"
                      id="first_name"
                      type="text"
                      required
                      className="w-56 h-8 rounded-lg border border-[#3C3633] m:max-3xl:w-72"
                    />
                  </div>
                  <div className="w-60 m-2 m:max-3xl:w-96">
                    <label for="name" className="text-xl font-raleway font-semibold">
                      Last Name
                    </label>
                    <br />
                    <input
                      name="Name"
                      id="last_name"
                      type="text"
                      required
                      className="w-56 h-8 rounded-lg border border-[#3C3633] m:max-3xl:w-72"
                    />
                  </div>
                  <div className="w-60 m-2 m:max-3xl:w-96">
                    <label for="name" className="text-xl font-raleway font-semibold">
                      Phone Number
                    </label>
                    <br />
                    <input
                      name="Name"
                      id="number"
                      type="text"
                      required
                      className="w-56 h-8 rounded-lg border border-[#3C3633] m:max-3xl:w-72"
                    />
                  </div>
                  <div className="w-60 m-2 m:max-3xl:w-96">
                    <label for="email" className="text-xl font-raleway font-semibold">
                      Your Email
                    </label>
                    <br />
                    <input
                      name="Email"
                      id="email"
                      type="email"
                      required
                      className="w-56 h-8 rounded-lg border border-[#3C3633] m:max-3xl:w-72"
                    />
                  </div>
                  <div className="w-60 m-2 m:max-3xl:w-96">
                    <label for="name" className="text-xl font-raleway font-semibold">
                      Your Message
                    </label>
                    <br />
                    <textarea
                      name="message"
                      id="message"
                      cols="50"
                      rows="5"
                      className="w-56 rounded-lg border border-[#3C3633] m:max-3xl:w-72"
                    ></textarea>
                  </div>
                  <div className="w-60 m-2 m:max-3xl:w-96">
                    <input
                      type="submit"
                      value="Send"
                      className="border bg-gradient-to-r from-[#103ce7] to-[#64e9ff] w-32 h-10 rounded-2xl font-space text-white font-bold font-serif"
                    />
                    <div
                      style={{
                        "white-space": "nowrap",
                        overflow: "hidden",
                        position: "absolute",
                      }}
                      aria-hidden="true"
                    >
                      <input
                        type="text"
                        name="_gotcha"
                        tabindex="-1"
                        autocomplete="off"
                        hidden
                      />
                    </div>
                  </div>
                </form>
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

export default ContactPage