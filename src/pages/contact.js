import React from "react"
import { graphql } from "gatsby"
import Navbar from "../components/Navbar"

export default function Contact({ data }) {
  const { email, links } = data.contentfulContact

  return (
    <div>
      <Navbar />
      <div className="flex flex-row px-[5vw] 2xl:px-[20vw] py-8 gap-8">
        <div className=" w-full border-gray-400 p-4 rounded-xl">
          <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
          <p>Email: {email}</p>

          <p>Links:</p>
          <ul>
            {links.map((link, index) => (
              <li key={index}>
                <a href={link}>{link}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export const query = graphql`
  query {
    contentfulContact {
      email
      links
    }
  }
`
