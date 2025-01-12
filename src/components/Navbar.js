import React from "react"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <nav className="bg-[#0e0e0e] flex justify-center items-center h-16 m-0 p-[18px]">
      <ul className="list-none flex gap-16 m-0 h-full">
        <li>
          <Link
            to="/"
            className="text-white no-underline hover:text-blue-400 focus:text-blue-600 active:text-blue-700 m-0"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className="text-white no-underline hover:text-blue-400 focus:text-blue-600 active:text-blue-700"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="text-white no-underline hover:text-blue-400 focus:text-blue-600 active:text-blue-700"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="text-white no-underline hover:text-blue-400 focus:text-blue-600 active:text-blue-700"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
