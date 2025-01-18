import React from "react"
import { graphql } from "gatsby"
import Navbar from "../components/Navbar"

export default function Contact({ data }) {
  const { email, links } = data.contentfulContact

  return (
    <div>
      <Navbar />
      <div className="flex flex-row px-[5vw] 2xl:px-[20vw] py-8 gap-8">
        <div className="w-full border-gray-400 p-4 rounded-xl">
          {/* title */}
          <h1 className="text-4xl font-bold mb-4 text-gray-100">Contact Me</h1>
          <div className="flex w-full justify-between pt-4">
            <div>
              {/* email */}
              <div className="text-gray-300">
                <h5 className="text-xl font-bold mb-4">Email:</h5>
                <div className="flex ml-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="h-5 w-5 fill-white"
                  >
                    <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                  </svg>
                  <p className="indent-3">{email}</p>
                </div>
              </div>
              {/* links */}
              <div className="text-gray-300">
                <h5 className="text-xl font-bold mb-4 mt-4">Links:</h5>
              </div>
              <ul>
                {links.map((link, index) => (
                  <li key={index} className="flex ml-2 mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                      className="w-5 fill-white"
                    >
                      <path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z" />
                    </svg>
                    <a
                      href={link}
                      className="no-underline text-blue-500 indent-3"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* form (for show, doesnt work) */}
            <form className="space-y-4 w-[30vw] flex flex-col">
              <div>
                <label
                  className="block text-gray-300 text-xs mb-2 uppercase"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-2 rounded-lg bg-[#FFFFFF07] text-white placeholder-[#ffffff1F]"
                  placeholder="Name"
                />
              </div>
              <div>
                <label
                  className="block text-gray-300 text-xs mb-2 uppercase"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-2 rounded-lg bg-[#FFFFFF07] text-white placeholder-[#ffffff1F]"
                  placeholder="Email"
                />
              </div>
              <div>
                <label
                  className="block text-gray-300 text-xs mb-2 uppercase"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full p-2 rounded-lg bg-[#FFFFFF07] text-white placeholder-[#ffffff1F]"
                  placeholder="Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="self-end w-24 bg-blue-500 hover:bg-blue-600 placeholder-[#ffffff0F] font-bold p-3 rounded-full bg-gradient-to-r from-orange-400 to-purple-600 hover:opacity-80 transition-opacity text-[#000000A0] text-sm"
              >
                Send
              </button>
            </form>
          </div>
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
