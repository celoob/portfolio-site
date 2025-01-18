import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link, graphql, useStaticQuery } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const ProjectsList = ({ limit }) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProject(sort: { fields: updatedAt, order: DESC }) {
        nodes {
          title
          description {
            raw
          }
          image {
            gatsbyImageData(layout: CONSTRAINED, width: 300)
          }
          updatedAt
          link
        }
      }
    }
  `)

  /* apply limit */
  const projects = data.allContentfulProject.nodes.slice(
    0,
    limit || data.allContentfulProject.nodes.length
  )

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {projects.map(({ title, description, image, link }) => (
        <li
          key={title}
          className="bg-[#00000040] h-60 text-gray-100 flex flex-col justify-between rounded-xl shadow-md"
        >
          <div className="">
            {image ? (
              <Link
                to={`/projects/${title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className="h-36 p-8 w-full rounded-t-xl bg-[#00000040] overflow-hidden flex items-center">
                  <GatsbyImage
                    image={getImage(image)}
                    alt={title}
                    className="h-fit max-h-36"
                  />
                </div>
              </Link>
            ) : (
              <Link
                to={`/projects/${title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className="w-full h-36 bg-[#ffffff11] flex items-center justify-center text-white rounded-t-xl">
                  <span className="text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      width="48"
                      height="48"
                      fill="#ffffff0f"
                    >
                      <path d="M448 80c8.8 0 16 7.2 16 16l0 319.8-5-6.5-136-176c-4.5-5.9-11.6-9.3-19-9.3s-14.4 3.4-19 9.3L202 340.7l-30.5-42.7C167 291.7 159.8 288 152 288s-15 3.7-19.5 10.1l-80 112L48 416.3l0-.3L48 96c0-8.8 7.2-16 16-16l384 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm80 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
                    </svg>
                  </span>
                </div>
              </Link>
            )}
            <Link to={`/projects/${title.toLowerCase().replace(/\s+/g, "-")}`}>
              <h2 className="uppercase text-sm font-bold my-2 px-3 pt-1">
                {title}
              </h2>
            </Link>

            {/* description, limit amount of characters shown */}
            <p className="px-3 text-sm">
              {(() => {
                const parsedDescription = JSON.parse(description.raw)
                const combinedText = parsedDescription.content
                  .flatMap(
                    node => node.content?.map(child => child.value) || []
                  )
                  .join(" ")
                return combinedText.length > 50
                  ? `${combinedText.substring(0, 50)}...`
                  : combinedText
              })()}
            </p>
            {/* link if exists */}
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline relative bottom-9 right-4 flex justify-end"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="#ffffff0f"
                  className="w-4 h-4"
                >
                  <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z" />
                </svg>
              </a>
            )}
          </div>
        </li>
      ))}
    </ul>
  )
}

export default ProjectsList
