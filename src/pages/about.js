import React from "react"
import { graphql } from "gatsby"
import Navbar from "../components/Navbar"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export default function About({ data }) {
  const { title, description, image } = data.contentfulAbout

  return (
    <div>
      <Navbar />
      <div className="flex flex-row px-[5vw] 2xl:px-[20vw] py-8 gap-8">
        <div className=" w-full border-gray-400 p-4 rounded-xl">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <div className="mb-6">
            {documentToReactComponents(JSON.parse(description.raw))}
          </div>
        </div>
        <div className="">
          {/* Render the image */}
          <GatsbyImage
            image={getImage(image)}
            alt={title}
            className="rounded-full w-[400px] h-[400px] border border-black border-[18px] shadow-xl"
          />
        </div>
      </div>
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
