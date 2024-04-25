import React, { useState } from "react";
import { RiMenu5Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

const NavbarPage = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    <>
      <section>
        <div className="bg-gradient-to-r from-[#103ce7] to-[#64e9ff] w-full h-auto p-5 flex flex-row gap-4 lg:flex-row lg:gap-0 items-center justify-between relative">
          <h1 className="text-3xl font-libre font-bold">The TriFusion</h1>

          <ul className="gap-8 lg:flex-row lg:gap-4 mx-8 text-xl font-raleway font-bold hidden lg:flex ">
            <li className="px-8 cursor-pointer hover:text-white transition-all duration-300">
              <a href="../Home">
              HOME
              </a>
            </li>
            <li className="px-8 cursor-pointer hover:text-white transition-all duration-300">
              <a href="../Service">
              SERVICES
                </a>
            </li>
            <li className="px-8 cursor-pointer hover:text-white transition-all duration-300">
              <a href="../About">
              ABOUT
            </a>
            </li>
            <li className="px-8 cursor-pointer hover:text-white transition-all duration-300">
              <a href="../Contact">
              CONTACT
            </a>
            </li>
          </ul>
          <div onClick={handleNavbar} className="mx-8">
            {showNavbar ? (
              <IoClose className="text-2xl font-bold cursor-pointer lg:hidden transition-all duration-300" />
            ) : (
              <RiMenu5Fill className="text-2xl font-bold cursor-pointer lg:hidden transition-all duration-300 " />
            )}
          </div>
          <ul
            className={`items-center gap-8 absolute left-0 flex flex-col w-screen py-8 text-xl font-raleway font-bold bg-gradient-to-r from-[#103ce7] to-[#64e9ff] contrast-100 ${
              showNavbar ? "top-16 " : "top-[-450px]"
            } z-50 transition-all ease-in-out duration-300 lg:hidden`}
          >
            <li className="px-8 cursor-pointer hover:text-white transition-all duration-300">
            <a href="../Home">
               HOME
               </a>
            </li>
            <li className="px-8 cursor-pointer hover:text-white transition-all duration-300">
            <a href="../Service">
               SERVICES
               </a>
            </li>
            <li className="px-8 cursor-pointer hover:text-white transition-all duration-300">
            <a href="../About">
               ABOUT
               </a>
            </li>
            <li className="px-8 cursor-pointer hover:text-white transition-all duration-300">
            <a href="../Contact">
               CONTACT
               </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default NavbarPage;
