import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Navbar from "../components/Navbar"

export default function About({ data }) {
  const { title, description, image } = data.contentfulAbout

  return (
    <div className="">
      <Navbar />
      <div className="flex flex-row px-[5vw] 2xl:px-[20vw] pt-8 gap-8 mb-24">
        <div className=" w-full border-gray-400 p-4 rounded-xl">
          <h1 className="text-4xl font-bold mb-4 text-gray-100">{title}</h1>
          <div className="mb-6 pt-4 text-gray-300">
            {documentToReactComponents(JSON.parse(description.raw))}
          </div>
          <div className="pt-6 pl-1">
            <Link
              to="/contact"
              className="px-5 bg-blue-500 hover:bg-blue-600  font-bold p-3 rounded-full bg-gradient-to-r from-orange-400 to-purple-600 hover:opacity-80 transition-opacity focus:text-[#000000A0] text-sm text-[#000000A0]"
            >
              Contact Me
            </Link>
          </div>
        </div>
        <div className="flex p-2 justify-center">
          <div className="relative text-white px-0 z-10">
            <GatsbyImage
              image={getImage(image)}
              alt={title}
              className="rounded-full w-[320px] h-[320px] shadow-xl border-2 border-[#FFFFFF06]"
            />
          </div>
        </div>
      </div>
      {/* ADD STUFF HERE IF TIME (software proficiency, coding languages etc.) */}
    </div>
  )
}

export const query = graphql`
  query {
    contentfulAbout {
      title
      description {
        raw
      }
      image {
        gatsbyImageData(layout: CONSTRAINED, width: 600)
      }
    }
  }
`
