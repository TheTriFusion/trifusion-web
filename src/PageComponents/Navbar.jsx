import React from "react";
import { Link } from "react-router-dom";

const NavbarPage = () => {
  return (
    <>
      <section>
        <div className="bg-gradient-to-r from-[#103ce7] to-[#64e9ff] w-full h-auto p-5 flex flex-col  xl:flex-row gap-4 items-center justify-center relative  xl:justify-between">
          <h1 className="text-3xl font-libre font-bold text-white w-full  xl:w-1/2 text-center">The TriFusion</h1>
          
          <ul className="s:text-lg text-base xm:text-2xl font-raleway font-bold text-white flex flex-row gap-4 px-4">
            <li className=" cursor-pointer lg:mx-4 lg:w-32 text-center s:w-24">
             <Link to='../Home'>
              HOME
              </Link>
            </li>
            <li className="  cursor-pointer lg:mx-4 lg:w-32 text-center s:w-24">
              <Link to="../Service">
              SERVICES
                </Link>
            </li>
            <li className="  cursor-pointer lg:mx-4 lg:w-32 text-center s:w-24">
              <Link to="../About">
              ABOUT
            </Link>
            </li>
            <li className="  cursor-pointer lg:mx-4 lg:w-32 text-center s:w-24">
              <Link to="../Contact">
              CONTACT
            </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default NavbarPage;
