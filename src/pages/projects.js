import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Navbar from "../components/Navbar"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Projects({ data }) {
  const projects = data.allContentfulProject.nodes

  return (
    <div>
      <Navbar />
      <div className="flex flex-col px-[5vw] 2xl:px-[20vw] py-8">
        <div className="w-full border-gray-400 p-4">
          <h1 className="text-4xl font-bold mb-10">Projects Overview</h1>
        </div>
        <ul className="flex flex-row gap-4 m-0">
          {projects.map(project => (
            <li
              key={project.title}
              className="bg-[#0e0e0e] text-gray-100 p-4 flex-grow w-24 flex flex-col justify-between rounded-lg shadow-xl"
            >
              <div className="mb-4">
                {/* Thumbnail Image */}
                {project.image ? (
                  <GatsbyImage
                    image={getImage(project.image)}
                    alt={project.title}
                    className="w-full h-36"
                  />
                ) : (
                  <div className="w-full h-36 bg-[#ffffff0f] flex items-center justify-center text-white">
                    <span>No Image :(</span>
                  </div>
                )}

                {/* Project Title */}
                <h2 className="font-bold mt-2 mb-1">{project.title}</h2>

                {/* Project Description */}
                {documentToReactComponents(JSON.parse(project.description.raw))}
              </div>
              <div className="self-center">
                {/* View Details Link */}
                <Link
                  className="no-underline text-blue-400 "
                  to={`/projects/${project.title
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                >
                  View
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export const query = graphql`
  query {
    allContentfulProject {
      nodes {
        title
        description {
          raw
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, width: 200, height: 200)
        }
      }
    }
  }
`
