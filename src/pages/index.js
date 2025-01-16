import React from "react"
import { graphql, Link } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Navbar from "../components/Navbar"
import ProjectsList from "../components/ProjectsList"

export default function StartPage({ data }) {
  const { title, text, image } = data.allContentfulStartPage.nodes[0]

  return (
    <div className="flex flex-col mb-10">
      <div className="relative h-[600px] w-full">
        {/* Hero Image */}
        <GatsbyImage
          image={getImage(image)}
          alt="Hero Background"
          className="h-full w-full object-cover"
        />

        {/* Navbar */}
        <div className="absolute inset-0 z-20">
          <Navbar />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>

        {/* Content */}
        <div className="absolute z-30 text-left text-white mx-[5vw] 2xl:mx-[20vw] w-[30%] top-[50%] translate-y-[-50%]">
          <h1 className="text-[5.4rem] font-bold mb-[-48px]">{title}</h1>
          <h2 className="text-[4.75rem] text-[#00000080] uppercase font-bold mb-[-18px]">
            Portfolio
          </h2>
          <div className="text-xl">
            {documentToReactComponents(JSON.parse(text.raw))}
          </div>
        </div>
      </div>

      <div className="flex-grow">
        <h2 className="text-lg font-bold mt-2 pt-6 text-white px-[5vw] 2xl:px-[20vw]">
          Latest projects
        </h2>
        <div className="flex flex-row justify-center gap-16 p-4 px-[5vw] 2xl:px-[20vw]">
          <ProjectsList limit={4} />
        </div>
        <div className="flex p-6 justify-center">
          <div className="pt-6 pl-1">
            <Link
              to="/contact"
              className="px-5 font-bold p-3 rounded-full bg-gradient-to-r from-orange-400 to-purple-600 hover:opacity-80 transition-opacity focus:text-[#000000A0] text-sm text-[#000000A2]"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export const query = graphql`
  query {
    allContentfulStartPage {
      nodes {
        title
        text {
          raw
        }
        image {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  }
`
