import React from "react"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center bg-black bg-opacity-40 text-white mt-12 pb-24 text-center h-full">
      <div className="w-full h-1 mb-8 bg-gradient-to-r from-orange-400 to-purple-600"></div>

      {/* text */}
      <p className="text-sm">Emil Loob, ITHS. All rights reserved.</p>
    </footer>
  )
}

export default Footer
