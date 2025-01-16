import React from "react"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center bg-black bg-opacity-40 text-white mt-12 pb-24 text-center h-full">
      <div className="w-full h-1 mb-8 bg-gradient-to-r from-orange-400 to-purple-600"></div>
      <p className="text-sm">Emil Loob, ITHS. All rights reserved.</p>

      <ul className="list-none flex gap-12 m-0 h-full self-center mt-8 uppercase text-sm">
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
    </footer>
  )
}

export default Footer
