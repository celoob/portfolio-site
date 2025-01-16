import * as React from "react"
import Footer from "./Footer"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Layout
