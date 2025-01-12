import React from "react"
import { graphql } from "gatsby"
import Navbar from "../components/Navbar"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export default function Project({ data }) {
  const { title, description, image } = data.contentfulProject

  return (
    <div>
      <Navbar />
      <div className="flex flex-col px-[5vw] 2xl:px-[20vw] py-8">
        <div className="w-full border-gray-400 p-4">
          <h1 className="text-4xl font-bold mb-10">{title}</h1>
        </div>
        <div className="self-center flex gap-12">
          {/* Render the image if it exists, otherwise show a placeholder */}
          {image ? (
            <GatsbyImage
              image={getImage(image)}
              alt={title}
              className="w-2xl max-w-2xl rounded-lg shadow-lg mb-6"
            />
          ) : (
            <div className="w-full max-w-2xl h-48 bg-gray-500 flex items-center justify-center rounded-lg shadow-lg mb-6">
              <span className="text-white">No Image Available</span>
            </div>
          )}

          <div className="text-lg">
            {documentToReactComponents(JSON.parse(description.raw))}
          </div>
        </div>
      </div>
    </div>
  )
}

export const query = graphql`
  query ($title: String!) {
    contentfulProject(title: { eq: $title }) {
      title
      description {
        raw
      }
      image {
        gatsbyImageData(layout: CONSTRAINED, width: 800)
      }
    }
  }
`
