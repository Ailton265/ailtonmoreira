import React from 'react'
import Background from "../background/background";
import {  Link } from "react-router-dom";

function Navbar(props){
    console.log(props)
/*    return(
        <div className="flex flex-row w-full justify-between align-middle top-0 h-60 from-cyan-100 to-green-100">
            <Background />
            Ailton
        </div>
    )*/
    return(
        <nav className="flex flex-col md:flex-row  p-5">
            <div className="flex flex-wrap justify-between items-center">
                <div>
                    <svg id="logo" className="logo" data-name="logo" xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 100 100" width="50" height="50">
                        <defs className="cls-1" style={{fill: '#1d1d1b'}}>
                           {/* <style>.cls-1{fill:#1d1d1b;}</style>*/}
                        </defs>
                        <path className="cls-1"
                              d="M191.73,125.07A33.34,33.34,0,0,0,158.4,91.73H91.73v100H158.4a33.34,33.34,0,0,0,28.87-50A33.11,33.11,0,0,0,191.73,125.07Zm-20,26.66a20,20,0,0,1-20,20v-30l-10,15-10-15v30h-20v-60h20l10,15,10-15a20,20,0,0,1,17.32,30A19.93,19.93,0,0,1,171.73,151.73Z"
                              transform="translate(-91.73 -91.73)"/>
                    </svg>
                </div>
                <div className="burger md:hidden">
                    <div className="bar1 h-1 w-7 my-1.5 bg-gray-800 duration-300"></div>
                    <div className="bar2 h-1 w-7 my-1.5 bg-gray-800"></div>
                    <div className="bar3 h-1 w-7 my-1.5 bg-gray-800 duration-300"></div>
                </div>
            </div>
            <ul className="links md:flex flex-col md:flex-row text-center w-full md:justify-around hidden">
                <li>
                    <Link to="/" className="block p-5">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/carrer" className="block p-5">
                        Carrer
                    </Link>
                </li>
                <li>
                    <Link to="/projects" className="block p-5">
                        Projects
                    </Link>
                </li>
                <li>
                    <a to="/about" className="block p-5">
                        About
                    </a>
                </li>
                <li>
                    <Link to="/contact" className="block p-5">
                        Contact
                    </Link>
                </li>
                <li>
                    <Link to="/blog" className="block p-5">
                        Blog
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar