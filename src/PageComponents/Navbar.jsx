import { Link } from "react-router-dom";
import { React } from 'react';

function NavbarPage() {
	return (
		<>
		<header className="bg-gradient-to-r from-[#103ce7] to-[#64e9ff] xl:h-16 h-max py-4 w-full font-libre font-bold text-white flex flex-col gap-4 justify-center items-center xl:flex-row xl:gap-0">
			<h3 className="xl:w-1/2 w-full h-full text-2xl xl:text-4xl content-center px-8 text-center xl:text-left">The TriFusion</h3>
			<nav className="xl:w-1/2 w-full flex flex-row gap-8 list-none list-inside justify-center items-center text-center h-full text-lg xl:text-xl">
				<li className="border border-white h-max w-max px-2 py-1 xl:w-24 hover:bg-white hover:text-[#64e9ff] transition-all ease-in-out duration-500"><Link to='../Home'>Home</Link></li>
				<li className="border border-white h-max w-max px-2 py-1 xl:w-24 hover:bg-white hover:text-[#64e9ff] transition-all ease-in-out duration-500"><Link to='../Service'>Service</Link></li>
				<li className="border border-white h-max w-max px-2 py-1 xl:w-24 hover:bg-white hover:text-[#64e9ff] transition-all ease-in-out duration-500"><Link to='../Contact'>Contact</Link></li>
				<li className="border border-white h-max w-max px-2 py-1 xl:w-24 hover:bg-white hover:text-[#64e9ff] transition-all ease-in-out duration-500"><Link to='../About'>About</Link></li>
			</nav>
		</header>
		</>
	);
}

export default NavbarPage;