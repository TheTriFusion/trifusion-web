import React, { useLayoutEffect, useRef } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import gsap from "gsap";
import NavbarPage from './Navbar';
import FooterPage from "./Footer";

const HomePage = () => {
  const loadSection = useRef(null);
  useLayoutEffect(() => {
     let ctx = gsap.context(() => {
       const transOne = gsap.timeline();
       transOne
         .from("#loadBox", {
           xPercent: "-100",
           duration: 1.3,
           delay: 0.5,
         })
         .from(["#heading-one", "#heading-two", "#heading-three"], {
           opacity: 0,
           y: "+=30",
           stagger: 0.5,
         })
         .to(["#heading-one", "#heading-two", "#heading-three"], {
           opacity: 0,
           y: "-=30",
           delay: 0.5,
           stagger: 0.5,
         })
         .to("#loadBox", {
           xPercent: "-100",
           duration: 1.3,
           delay: 0.5,
         })
         .from('#contentBox',{
          opacity: 0,
          duration: 1.5,
          delay: 0.8
         })
     }, loadSection);
    
     return () => ctx.revert();
  }, []);
  const services = [
    "Web Development",
    "App Development",
    "UI/UX",
    "Sales & Marketing",
    "Digital Marketing",
    "Branding",
  ];
  return (
    <>
      <section className="w-screen h-max flex flex-col gap-8 relative" ref={loadSection}>
      <section id="loadBox" className="absolute w-screen h-screen inset-0 z-10 text-3xl flex flex-col gap-8 justify-center items-start lg:text-8xl font-libre font-semibold bg-[#FEFDED] px-8">
          <h1 id="heading-one">Sales</h1>
          <h1 id="heading-two">Marketing</h1>
          <h1 id="heading-three">Development</h1>
      </section>
        <section id="contentBox">
        <div>
          <NavbarPage/>
        </div>
          <div className="flex flex-col gap-6 justify-center items-center h-screen w-screen">
            <div className="text-3xl font-bold w-full font-libre px-8 xm:text-4xl lg:text-8xl ">
              <div className="flex flex-col gap-4 xm:flex-row">
                <h1>CRAFTING</h1>
                <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#103ce7] to-[#64e9ff]">
                  VISION
                </h1>
              </div>
              <div className="flex flex-col gap-4 xm:flex-row">
                <h1>INTO</h1>
                <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#103ce7] to-[#64e9ff]">
                  VICTORY
                </h1>
              </div>
            </div>
            <div className="w-full font-libre px-8">
              <div className="flex flex-col gap-6 justify-evenly items-center xm:flex-row">
                <p className="w-full text-2xl xm:w-1/2 xm:text-4xl">
                  WE HELP OUR CLIENTS TELL THEIR STORIES AND MAKE THEM
                  UNFORGETTABLE
                </p>
                <button className="text-xl font-bold text-white w-64 h-16 px-4 rounded-3xl  bg-gradient-to-r from-[#103ce7] to-[#64e9ff] xm:text-2xl">
                <Link to='../Contact'>
                  {" "}
                  CREATE ONE
                  </Link>
                </button>
              </div>
            </div>
          </div>
          {/* --- */}
          <div>
            <div className="font-raleway text-5xl text-center font-semibold p-4 xm:text-9xl mb-8 border border-black">
              <h1>THE TRIFUSION</h1>
            </div>
          </div>
          {/* --- */}
          <div>
            <div className="flex flex-col gap-4 border-b border-black mb-8">
              <div className="text-2xl font-semibold px-8 py-4 font-libre justify-center items-center flex flex-col gap-4 xm:justify-start xm:items-start xm:text-5xl">
                <h1> WHY TO CHOOSE</h1>
                <h1>THE TRIFUSION</h1>
              </div>
              <div className="flex flex-col gap-4 m:flex-row justify-center items-center font-raleway">
                <p className="w-full text-xl xm:text-2xl text-center xm:text-left m:w-1/2 p-8">
                  Tri Fusion offers comprehensive digital services, including
                  digital marketing, app development, and sales tactics. With
                  years of experience, they prioritize oneon-one client meetings
                  and engagements, ensuring accurate project execution. They are
                  a reliable partner for start-ups and established companies in
                  the digital sphere.
                </p>
                <img src="../Images/growth.png" alt="" className="h-80" />
              </div>
            </div>
          </div>
          {/* --- */}
          <div>
            <div className="flex flex-col gap-4 border-b border-black mb-8">
              <div className="text-center font-libre text-5xl tracking-widest text-gray-200 [text-shadow:_0_4px_0_rgb(0_0_0_/_40%)] xm:text-7xl lg:text-9xl">
                <h1>WE DO</h1>
              </div>
              <div>
                <ul className="text-center list-inside text-3xl font-raleway font-medium py-8 flex flex-col gap-8 lg:text-start px-8 xm:text-5xl lg:text-6xl">
                  {services.map((items, index) => {
                    return (
                      <>
                        <div>
                          <li
                            key={index}
                            className="p-2 underline underline-offset-[15px] hover:no-underline transition-all ease-in-out duration-100"
                          >
                            {items}
                          </li>
                        </div>
                      </>
                    );
                  })}
                </ul>
              </div>
              <div className="flex flex-col gap-6 lg:flex-row justify-center items-center mb-4">
                <p className="w-full text-xl xm:text-2xl text-center xm:text-left m:w-1/2 p-8 font-raleway">
                  We build engaging websites, brands & innovative e-commerce
                  solutions.
                </p>
                <button className="text-xl font-bold text-white w-64 h-16 px-4 rounded-3xl  bg-gradient-to-r from-[#103ce7] to-[#64e9ff] xm:text-2xl">
                <Link to='../Service'>
                  CHECKOUT
                  </Link>
                </button>
              </div>
            </div>
          </div>
          {/* --- */}
          <div>
            <div className="flex flex-col gap-4 border-b border-black mb-8 pb-8">
              <div className="text-2xl font-semibold px-8 py-4 font-libre justify-center items-center flex flex-col gap-4 xm:justify-end xm:items-end xm:text-5xl">
                <h1>WHAT YOU GET WITH </h1>
                <h1>THE TRIFUSION</h1>
              </div>
              <div className="flex flex-col gap-4 lg:flex-row justify-center items-center font-raleway">
                <div className="border-[5px] rounded-3xl border-red-300 h-96 w-72 flex flex-col gap-4 justify-center items-center xm:w-80 lg:w-96">
                  <h1 className="text-xl font-bold text-center xm:text-3xl px-2">
                    GROUND LEVEL MARKETING
                  </h1>
                  <p className="text-lg text-center font-medium xm:text-xl px-4">
                    Forge authentic connections with grassroots strategies.
                    Immerse in local communities for lasting impact and
                    meaningful relationships.
                  </p>
                </div>
                <div className="border-[5px] rounded-3xl border-blue-300 h-96 w-72 flex flex-col gap-4 justify-center items-center xm:w-80 lg:w-96">
                  <h1 className="text-xl font-bold text-center xm:text-3xl px-2">
                    IT SOLUTIONS
                  </h1>
                  <p className="text-lg text-center font-medium xm:text-xl px-4">
                    Forge authentic connections with grassroots strategies.
                    Immerse in local communities for lasting impact and
                    meaningful relationships.
                  </p>
                </div>
                <div className="border-[5px] rounded-3xl border-green-300 h-96 w-72 flex flex-col gap-4 justify-center items-center xm:w-80 lg:w-96">
                  <h1 className="text-xl font-bold text-center xm:text-3xl px-2">
                    TRAINING PROGRAMS
                  </h1>
                  <p className="text-lg text-center font-medium xm:text-xl px-4">
                    Empower teams with dynamic training. From sales to digital
                    marketing, cultivate expertise for success in today's
                    business landscape.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* --- */}
          <div>
            <div className="border-b border-black flex flex-col gap-4 mb-8 pb-8">
              <div className="text-2xl font-semibold px-8 py-4 font-libre xm:text-5xl text-center">
                <h1>OUR TRUST'S</h1>
                <p className="w-full text-xl xm:text-2xl text-center xm:text-left m:w-1/2 p-8 font-raleway">
                  We partner with companies of all sizes to solve complex
                  business challenges and define their digital strategies and
                  objectives that deliver results.
                </p>
              </div>
              <div className="flex flex-col gap-4 lg:flex-row lg:justify-evenly justify-center items-center">
                <img
                  className=" w-48 h-28  lg:h-32 lg:w-64"
                  src="../Images/work-a2d.png"
                  alt=""
                />
                <img
                  className=" w-48 h-28  lg:h-32 lg:w-64"
                  src="../Images/work-rukmanee.jpg"
                  alt=""
                />
                <img
                  className=" w-48 h-28  lg:h-32 lg:w-64"
                  src="../Images/work-eats.png"
                  alt=""
                />
                <img
                  className=" w-48 h-28  lg:h-32 lg:w-64"
                  src="../Images/work-skits.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          {/* --- */}
          <div>
            <div className="bg-gradient-to-r from-[#103ce7] to-[#64e9ff] text-white font-black font-libre py-8">
              <div className="text-3xl text-center xm:text-5xl mb-8 flex flex-col gap-4 lg:text-7xl justify-center items-center">
                <h1> CREATING DIGITAL</h1>
                <div className="flex flex-col gap-4 text-center justify-center m:flex-row">
                  <h1 id="exp-char">EXPERIENCE</h1>
                  <h1>SINCE 2024</h1>
                </div>
              </div>
            </div>
          </div>
          <div>
            <FooterPage/>
          </div>
        </section>
      </section>
    </>
  );
};

export default HomePage;
