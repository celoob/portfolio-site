import React from "react"
import { Link } from "gatsby"
import Navbar from "../components/Navbar"

export default function NotFound() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-center text-white text-center m-16">
        <h1 className="text-[20vh] font-bold">404</h1>
        <h2 className="text-5xl mb-6">Page Not Found</h2>
        <p className="mb-12">
          Oh no! The page you're looking for doesn't exist.
        </p>
        <Link to="/" className="text-blue-400">
          Go back to the homepage
        </Link>
      </div>
    </div>
  )
}
