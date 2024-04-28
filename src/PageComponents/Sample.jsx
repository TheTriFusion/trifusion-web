import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import '../PageComponents/Main.css';
import { Link } from "react-router-dom";

function NavbarPage() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<h3>The TriFusion</h3>
			<nav ref={navRef}>
				<li><Link to='../Home'>Home</Link></li>
				<li><Link to='../Service'>Service</Link></li>
				<li><Link to='../Contact'>Contact</Link></li>
				<li><Link to='../About'>About</Link></li>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default NavbarPage;