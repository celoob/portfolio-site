import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import logo from "../images/logo.png"

const Navbar = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulNavbar {
        links {
          label
          path
        }
      }
    }
  `)

  const links = data.contentfulNavbar.links

  return (
    <header>
      <nav className="bg-transparent flex items-center h-16 m-0 p-[18px] justify-between">
        {/* logo */}
        <div className="flex mt-2">
          <Link
            to="/"
            className="text-[#ffffffee] no-underline hover:text-purple-400 focus:text-purple-600 active:text-purple-700 m-0"
          >
            <img src={logo} alt="Logo" className="h-10 w-auto rounded-full" />
          </Link>
        </div>

        {/* navbar links */}
        <ul className="list-none flex gap-12 mt-6 h-full mr-5 uppercase text-sm">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                to={link.path}
                className="text-[#ffffffee] no-underline hover:text-purple-400 focus:text-purple-600 active:text-purple-700 m-0"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
