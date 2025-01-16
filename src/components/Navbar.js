import React from "react"
import { Link } from "gatsby"
import logo from "../images/logo.png"

const Navbar = () => {
  return (
    <header>
      <nav className="bg-transparent flex items-center h-16 m-0 p-[18px] justify-between">
        <div className="flex mt-2">
          <Link
            to="/"
            className="text-[#ffffffee] no-underline hover:text-purple-400 focus:text-purple-600 active:text-purple-700 m-0"
          >
            <img src={logo} alt="Logo" className="h-10 w-auto rounded-full" />
          </Link>
        </div>
        <ul className="list-none flex gap-12 mt-6 h-full mr-5 uppercase text-sm">
          <li>
            <Link
              to="/"
              className="text-[#ffffffee] no-underline hover:text-purple-400 focus:text-purple-600 active:text-purple-700 m-0"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="text-[#ffffffee] no-underline hover:text-purple-400 focus:text-purple-600 active:text-purple-700"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-[#ffffffee] no-underline hover:text-purple-400 focus:text-purple-600 active:text-purple-700"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-[#ffffffee] no-underline hover:text-purple-400 focus:text-purple-600 active:text-purple-700"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
