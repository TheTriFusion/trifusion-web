import React, { useLayoutEffect, useRef } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import gsap from "gsap";
import NavbarPage from "./Navbar";
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
        .from("#contentBox", {
          opacity: 0,
          duration: 1.5,
          delay: 0.8,
        })
        .from(
          "#float-one",
          {
            xPercent: '-100',
            duration: 1,
            delay: 1.5,
          })
    }, loadSection);

    return () => ctx.revert();
  }, []);
  const services = [
    "Web Development",
    "App Development",
    "Robotic Process Automation",
    "Digital Marketing",
    "Sales & Marketing",
    "Branding",
    "UI/UX",
  ];
  return (
    <>
      <section
        className="w-screen h-max flex flex-col gap-5 relative"
        ref={loadSection}
      >
        <section
          id="loadBox"
          className="absolute w-screen h-screen inset-0 z-10 text-3xl xm:text-5xl lg:text-6xl 2xl:text-8xl flex flex-col gap-8 justify-center items-start font-libre font-semibold bg-[#FEFDED] px-8 overflow-y-hidden"
        >
          <h1 id="heading-one">Development</h1>
          <h1 id="heading-two">Automation</h1>
          <h1 id="heading-three">Marketing</h1>
        </section>
        <section
          id="contentBox"
          className="flex flex-col gap-2"
        >
          <div>
            <NavbarPage />
          </div>
            <div
              className="flex flex-col gap-6 justify-center items-center h-screen w-screen relative "
              id="homeBox"
            >
              <div className="text-3xl font-bold w-full flex flex-col gap-4 font-libre px-8 xm:text-5xl lg:text-6xl 2xl:text-8xl">
                <div className="flex flex-col gap-4 xl:flex-row">
                  <h1>TRANSFORM</h1>
                  <h1 className="text-transparent brightness-150 bg-clip-text bg-gradient-to-r from-[#103ce7] to-[#64e9ff]">
                    VISION
                  </h1>
                </div>
                <div className="flex flex-col gap-4 xl:flex-row">
                  <h1>INTO</h1>
                  <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#103ce7] to-[#64e9ff]">
                    VICTORY
                  </h1>
                </div>
              </div>
              <div className="w-full font-libre px-8 z-10">
                <div className="flex flex-col gap-6 justify-evenly items-center xm:flex-row">
                  <p className="w-full text-2xl xm:w-1/2 xm:text-4xl">
                    WE HELP OUR CLIENTS TELL THEIR STORIES AND MAKE THEM
                    UNFORGETTABLE
                  </p>
                  <button className="text-xl font-bold text-white w-64 h-16 px-4 rounded-3xl  bg-gradient-to-r from-[#103ce7] to-[#64e9ff] xm:text-2xl">
                    <Link to="../Contact"> CREATE ONE</Link>
                  </button>
                </div>
              </div>
            </div>
          {/* --- */}
          <div>
            <div className="font-raleway text-5xl font-semibold p-4 xm:text-9xl mb-8 border border-black text-center">
              <h1 id="float-one">THE TRIFUSION </h1>
            </div>
          </div>
          {/* --- */}
          <div>
            <div className="flex flex-col gap-4 border-b border-black mb-8">
              <div className="text-2xl font-semibold px-8 py-4 font-libre justify-center items-center flex flex-col gap-4 xm:justify-start xm:items-start xm:text-5xl">
                <h1> WHY TO CHOOSE</h1>
                <h1 className="text-transparent brightness-150 bg-clip-text bg-gradient-to-r from-[#103ce7] to-[#64e9ff]">THE TRIFUSION</h1>
              </div>
              <div className="flex flex-col gap-4 m:flex-row justify-center items-center font-raleway">
                <p className="w-full text-xl xm:text-2xl text-center xm:text-left m:w-1/2 p-8">
                  The TriFusion offers comprehensive digital services, including
                  web development, app development, digital marketing, and sales tactics,
                  with years of experience. We prioritize one-on-one client meetings
                  and engagements to ensure precise project execution. We stand as
                  a reliable partner for start-ups and established companies within
                  the digital sphere.
                </p>
                <img src="../Images/growth.png" alt="" className="h-80" />
              </div>
            </div>
          </div>
          {/* --- */}
          <div>
            <div className="flex flex-col gap-4 border-b border-black mb-8">
              <div className="text-center font-libre text-5xl tracking-widest font-black xm:text-7xl lg:text-9xl">
                <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#103ce7] to-[#64e9ff]" id="wedo">
                  WE DO
                </h1>
              </div>
              <div>
                <ul className="text-center list-inside text-2xl font-raleway font-medium py-8 flex flex-col gap-8 lg:text-start px-8 xm:text-4xl lg:text-5xl">
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
                  <Link to="../Service">CHECKOUT</Link>
                </button>
              </div>
            </div>
          </div>
          {/* --- */}
          <div>
            <div className="flex flex-col gap-4 border-b border-black mb-8 pb-8 px-4">
              <div className="text-2xl font-semibold px-8 py-4 font-libre justify-center items-center flex flex-col gap-4 xm:justify-end xm:items-end xm:text-5xl">
                <h1>WHAT YOU GET WITH </h1>
                <h1 className="text-transparent brightness-150 bg-clip-text bg-gradient-to-r from-[#103ce7] to-[#64e9ff]">THE TRIFUSION</h1>
              </div>
              <div className="flex flex-col gap-4 lg:flex-row justify-center items-center font-raleway">
                <div className="border-[5px] rounded-3xl border-red-300 h-96 w-72 flex flex-col gap-4 justify-center items-center xm:w-80 lg:w-96">
                  <h1 className="text-xl font-bold text-center xm:text-3xl px-2">
                    IT SOLUTIONS
                  </h1>
                  <p className="text-lg text-center font-medium xm:text-xl px-4">
                    Our IT solutions offer innovative strategies and
                    cutting-edge technologies to streamline operations, enhance
                    security, and drive digital transformation.
                  </p>
                </div>
                <div className="border-[5px] rounded-3xl border-blue-300 h-96 w-72 flex flex-col gap-4 justify-center items-center xm:w-80 lg:w-96">
                  <h1 className="text-xl font-bold text-center xm:text-3xl px-2">
                    GROUND LEVEL MARKETING
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
            <div className="border-b border-black flex flex-col gap-4 mb-8 pb-8 justify-center items-center">
              <div className="text-2xl font-semibold px-8 py-4 font-libre xm:text-5xl text-center">
                <h1>OUR TRUST'S</h1>
                <p className="w-full text-xl xm:text-2xl text-center xm:text-left m:w-1/2 p-8 font-raleway">
                  We partner with companies of all sizes to solve complex
                  business challenges and define their digital strategies and
                  objectives that deliver results.
                </p>
              </div>
              <div className="flex flex-col gap-6 2xl:flex-row 2xl:justify-evenly justify-center items-center lg:grid lg:grid-cols-2 lg:gap-8 w-full lg:justify-items-center">
                <img
                  className=" w-48 h-28  xl:h-32 xl:w-64"
                  src="../Images/work-a2d.png"
                  alt=""
                />
                <img
                  className=" w-48 h-28  xl:h-32 xl:w-64"
                  src="../Images/work-rukmanee.jpg"
                  alt=""
                />
                <img
                  className=" w-48 h-28  xl:h-32 xl:w-64"
                  src="../Images/work-eats.png"
                  alt=""
                />
                <img
                  className=" w-48 h-28  xl:h-32 xl:w-64"
                  src="../Images/work-skits.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          {/* --- */}
          <div>
            <FooterPage />
          </div>
        </section>
      </section>
    </>
  );
};

export default HomePage;
