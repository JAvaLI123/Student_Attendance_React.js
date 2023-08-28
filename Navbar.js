import React from 'react';
import logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

    return (
        <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>
            <Link to="/"> 
                <img src={logo} alt="Logo" width={160} height={32} loading="lazy"/>
            </Link>

            <nav className='flex'>
                <ul className='text-black flex gap-x-6'>
                    <li className="bg-yellow-300 border border-black rounded px-3 py-1">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="bg-yellow-300 border border-black rounded px-3 py-1">
                        <a href="https://www.srmist.edu.in/about-us/#:~:text=SRM%20Institute%20of%20Science%20and,%26%20Sonepat%20(in%20Haryana)%20%E2%80%93">About</a>
                    </li>
                    <li className="bg-yellow-300 border border-black rounded px-3 py-1">
                        <a href="https://www.srmist.edu.in/contact-us/">Contact</a>
                    </li>
                </ul>
            </nav>

            <div className='flex items-center gap-x-4'>
                {!isLoggedIn && 
                    <Link to="/login" className="bg-yellow-300 border border-black rounded px-3 py-1">
                        Login
                    </Link>
                }

                {isLoggedIn &&
                    <Link to="/" className="bg-yellow-300 border border-black rounded px-3 py-1" onClick={() => {
                        setIsLoggedIn(false);
                        toast.success("Logged Out");
                    }}>
                        Log Out
                    </Link>
                }
            </div>
        </div>
    )
}

export default Navbar;
