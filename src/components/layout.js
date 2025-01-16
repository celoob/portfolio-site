import * as React from "react"
import Footer from "./Footer"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* main content */}
      <main className="flex-grow">{children}</main>

      {/* footer */}
      <Footer />
    </div>
  )
}

export default Layout
