import React, { useLayoutEffect, useRef } from "react";
import '../App.css';
import NavbarPage from './Navbar';
import FooterPage from "./Footer";
import gsap from "gsap";
import serviceRpaImage from "../Images/service-rpa.png";

const ServicePage = () => {
  const service = useRef(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const trnasOne = gsap.timeline();
      trnasOne.from('#navbarBox',{
        yPercent: '-100',
        duration: 1,
        delay: 0.5
      })
      .from('#serviceBox',{
        yPercent: '100',
        duration: 1,
        delay: 0.5,
      })
      .from('#mainBox',{
        opacity: 0,
        duration: 1,
      })
      .from('#footerBox',{
        yPercent: '-100',
        duration: 1,
        delay: 0.5
      })
    }, service)
    return () => ctx.revert();
  },[])
  return (
    <>
      <section ref={service}>
       <div id="navbarBox">
          <NavbarPage/>
        </div>
        <section id="serviceBox">
            <div className="flex flex-col gap-4 m:flex-row m:gap-2 justify-center items-center border-b border-black pb-8" id="mainBox">
              <div className="flex flex-col gap-6 mb-8 ">
                <h1 className="text-2xl font-semibold px-8 py-4 font-libre justify-center items-center flex flex-col gap-4 xm:justify-start xm:items-start xm:text-5xl">
                  WE ARE GOOD AT
                </h1>
                <p className="w-full text-xl xm:text-2xl text-center xm:text-left m:w-1/2 px-8 font-raleway">
                  Designing digital products with an emphasis on user experience and 
                  visual design.
                </p>
              </div>
              <div className="lg:h-96 lg:w-96 flex justify-center items-center bg-opacity-50 w-72 h-72">
                <img src="../Images/service-banner.png" alt="" />
              </div>
            </div>
          {/* --- */}
          <div>
            <div className="text-2xl font-semibold px-8 py-4 font-libre justify-center items-center flex flex-col gap-4 s:justify-start s:items-start s:text-3xl xm:text-5xl">
              <div className="flex flex-col gap-4 s:flex-row justify-center items-center">
                <h1>SERVICES</h1>
                <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#103ce7] to-[#64e9ff]">THE </h1>
              </div>
              <div className="flex flex-col gap-4 s:ml-8 s:flex-row justify-center items-center">
                <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#103ce7] to-[#64e9ff]">
                  TRIFUSION
                </h1>
                <h1>OFFERS</h1>
              </div>
            </div>
          </div>
          {/* --- */}
          <div>
            <div className="flex flex-col gap-8">
             <section className="bg-gray-100 h-max py-8 px-4 flex flex-col gap-4 m:flex-row m:gap-2 justify-center items-center">
                <div className="w-full lg:w-4/5 p-4">
                  <h1 className="text-xl font-libre font-semibold text-center lg:text-3xl lg:text-left">
                    WEB DEVELOPMENT
                  </h1>
                  <p className="text-lg p-8 font-raleway lg:text-xl">
                    Specialized in crafting exceptional web experiences tailored
                    to meet your unique business objectives. Our team of
                    experienced developers utilizes the latest technologies and
                    best practices to deliver high quality, responsive websites
                    that drive results.
                  </p>
                  <ul className="text-lg p-2 list-disc list-inside lg:text-xl font-raleway">
                    <li>Custom Website Development</li>
                    <li>e-Commerce Store Development</li>
                    <li>Full-Stack Development</li>
                    <li>Responsive Web Apps</li>
                  </ul>
                </div>
                <div className="lg:w-2/5 w-full xm:w-1/2 shadow-lg shadow-gray-700 rounded-3xl flex justify-center">
                  <img
                    src="../Images/service-web-development.png"
                    alt=""
                    className="rounded-3xl xl:w-96 xl:h-96 w-64 h-64 content-center"
                  />
                </div>
              </section>
              {/* |||  */}
               <section className="bg-gray-100 h-max py-8 px-4 flex flex-col gap-4 m:flex-row m:gap-2 justify-center items-center">
                <div className="w-full lg:w-4/5 p-4">
                  <h1 className="text-xl font-libre font-semibold text-center lg:text-3xl lg:text-left">
                    APP DEVELOPMENT
                  </h1>
                  <p className="text-lg p-8 font-raleway lg:text-xl">
                    Cutting-edge app development solutions tailored to your
                    unique business needs are our specialty. With our expertise in mobile
                    technology and user-centric design, we help businesses of
                    all sizes create innovative and engaging mobile applications
                    that drive success in today's digital landscape.
                  </p>
                  <ul className="text-lg p-2 list-disc list-inside lg:text-xl font-raleway">
                    <li>Android App Development</li>
                    <li>IOS App Development</li>
                  </ul>
                </div>
                <div className="lg:w-2/5 w-full xm:w-1/2 shadow-lg shadow-gray-700 rounded-3xl flex justify-center">
                  <img
                    src="../Images/service-app-development.png"
                    alt=""
                    className="rounded-3xl xl:w-96 xl:h-96 w-64 h-64 content-center"
                  />
                </div>
              </section>
              {/* |||  */}

              <section className="bg-gray-100 h-max py-8 px-4 flex flex-col gap-4 m:flex-row m:gap-2 justify-center items-center">
                <div className="w-full lg:w-4/5 p-4">
                  <h1 className="text-xl font-libre font-semibold text-center lg:text-3xl lg:text-left">
                    Robotic Process Automation
                  </h1>
                  <p className="text-lg p-8 font-raleway lg:text-xl">
                    We deliver seamless automation solutions tailored to your needs, ensuring accuracy, efficiency, and cost savings. 
                    Trust us to simplify your processes, enhance productivity, and give your team the freedom to innovate. 
                    Experience excellence in automation with us today!
                  </p>
                  <ul className="text-lg p-2 list-disc list-inside lg:text-xl font-raleway">
                    <li>Automation Anywhere</li>
                    <li>Power Automate</li>
                    <li>UiPath</li>
                    <li>Selenium</li>
                  </ul>
                </div>
                <div className="lg:w-2/5 w-full xm:w-1/2 shadow-lg shadow-gray-700 rounded-3xl flex justify-center">
                   <img
                    src={serviceRpaImage}
                    alt=""
                    className="rounded-3xl xl:w-96 xl:h-96 w-64 h-64 content-center"
                  />
                </div>
              </section>
              {/* |||  */}
              
              <section className="bg-gray-100 h-max py-8 px-4 flex flex-col gap-4 m:flex-row m:gap-2 justify-center items-center">
                <div className="w-full lg:w-4/5 p-4">
                  <h1 className="text-xl font-libre font-semibold text-center lg:text-3xl lg:text-left">
                   DIGITAL MARKETING
                  </h1>
                  <p className="text-lg p-8 font-raleway lg:text-xl">
                    Specialized in elevating your online presence through
                    strategic digital marketing. Our tailored solutions
                    from SEO to social media,  are designed to boost your brand
                    visibility and drive results.
                  </p>
                  <ul className="text-lg p-2 list-disc list-inside lg:text-xl font-raleway">
                    <li>Social Media Marketing</li>
                    <li>Influencer Marketing</li>
                    <li>Ad Campaigns</li>
                    <li>Content Creation</li>
                    <li>Corporate Videos</li>
                  </ul>
                </div>
                <div className="lg:w-2/5 w-full xm:w-1/2 shadow-lg shadow-gray-700 rounded-3xl flex justify-center">
                  <img
                    src="../Images/service-digital-marketing.png"
                    alt=""
                    className="rounded-3xl xl:w-96 xl:h-96 w-64 h-64 content-center"
                  />
                </div>
              </section>
              {/* |||  */}
              <section className="bg-gray-100 h-max py-8 px-4 flex flex-col gap-4 m:flex-row m:gap-2 justify-center items-center">
                <div className="w-full lg:w-4/5 p-4">
                  <h1 className="text-xl font-libre font-semibold text-center lg:text-3xl lg:text-left">
                    SALES & MARKETING
                  </h1>
                  <p className="text-lg p-8 font-raleway lg:text-xl">
                    From lead generation to conversion optimization, we offer a
                    full suite of services tailored to meet your unique sales
                    and marketing needs.
                  </p>
                  <ul className="text-lg p-2 list-disc list-inside lg:text-xl font-raleway">
                    <li>Field Marketing</li>
                    <li>Offline Campaigns</li>
                    <li>Market Strategy</li>
                  </ul>
                </div>
                <div className="lg:w-2/5 w-full xm:w-1/2 shadow-lg shadow-gray-700 rounded-3xl  flex justify-center">
                  <img
                    src="../Images/service-marketing-sales.png"
                    alt=""
                    className="rounded-3xl xl:w-96 xl:h-96 w-64 h-64 content-center"
                  />
                </div>
              </section>
              {/* |||  */}
              <section className="bg-gray-100 h-max py-8 px-4 flex flex-col gap-4 m:flex-row m:gap-2 justify-center items-center">
                <div className="w-full lg:w-4/5 p-4">
                  <h1 className="text-xl font-libre font-semibold text-center lg:text-3xl lg:text-left">
                  BRANDING
                  </h1>
                  <p className="text-lg p-8 font-raleway lg:text-xl">
                    Branding services specialize in creating, managing, and enhancing a company's identity through visual elements, messaging, and strategic marketing, thereby helping businesses establish a strong and consistent presence in their industry.
                  
                  </p>
                  <ul className="text-lg p-2 list-disc list-inside lg:text-xl font-raleway">
                    <li>Logo Design</li>
                    <li>Brand Identity</li>
                    <li>Product Shoots</li>
                    <li>Brand Strategy</li>
                    <li>Content Creation</li>
                    <li>Public Reaction</li>
                  </ul>
                </div>
                <div className="lg:w-2/5 w-full xm:w-1/2 shadow-lg shadow-gray-700 rounded-3xl flex justify-center">
                  <img
                    src="../Images/service-branding.png"
                    alt=""
                    className="rounded-3xl xl:w-96 xl:h-96 w-64 h-64 content-center"
                  />
                </div>
              </section>
              {/* |||  */}
              <section className="bg-gray-100 h-max py-8 px-4 flex flex-col gap-4 m:flex-row m:gap-2 justify-center items-center">
                <div className="w-full lg:w-4/5 p-4">
                  <h1 className="text-xl font-libre font-semibold text-center lg:text-3xl lg:text-left">
                    UI / UX
                  </h1>
                  <p className="text-lg p-8 font-raleway lg:text-xl">
                    UI/UX design serves as the catalyst behind the success of 
                    any web or mobile app. With a knack for turning great ideas
                    into meaningful interactions, we offer a full range of design
                    services, from the initial concept to information architecture,
                    visual identity, and UX design.
                  </p>
                  <ul className="text-lg p-2 list-disc list-inside lg:text-xl font-raleway">
                    <li>Responsive Web Design</li>
                    <li>UI/UX Design</li>
                    <li>Mobile App Design</li>
                  </ul>
                </div>
                <div className="lg:w-2/5 w-full xm:w-1/2 shadow-lg shadow-gray-700 rounded-3xl flex justify-center">
                  <img
                    src="../Images/service-ui-ux.png"
                    alt=""
                    className="rounded-3xl xl:w-96 xl:h-96 w-64 h-64 content-center"
                  />
                </div>
              </section>
            </div>
          </div>
          <div id="footerBox">
            <FooterPage/>
          </div>
        </section>
      </section>
    </>
  );
};

export default ServicePage;
