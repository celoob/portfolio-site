import React from "react"
import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Navbar from "../components/Navbar"

export default function StartPage({ data }) {
  const { title, text, image } = data.allContentfulStartPage.nodes[0]

  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div
        className="relative h-[50vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${getImage(image).images.fallback.src})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <div className="text-lg">
            {documentToReactComponents(JSON.parse(text.raw))}
          </div>
        </div>
      </div>
      <div className="bg-gray-100 flex-grow ">
        <div className="flex flex-row justify-center gap-16 p-10 bg-red-400">
          <p className="bg-green-400">add box here</p>
          <p className="bg-green-400">add box here</p>
          <p className="bg-green-400">add box here</p>
          <p className="bg-green-400">add box here</p>
          <p className="bg-green-400">add box here</p>
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
