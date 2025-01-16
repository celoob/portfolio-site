import React, { useState } from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Navbar from "../components/Navbar"
import ProjectsList from "../components/ProjectsList"

export default function Project({ data }) {
  const { title, description, image, images, link } = data.contentfulProject

  const [isOverlayVisible, setOverlayVisible] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(null)

  const handleOverlayToggle = (index = null) => {
    setOverlayVisible(!isOverlayVisible)
    setCurrentIndex(index)
  }

  const handlePrevious = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  const handleNext = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  return (
    <div>
      <Navbar />
      <div className="flex flex-col px-[5vw] 2xl:px-[20vw] py-8">
        <div className="w-full border-gray-400 p-4 text-gray-100">
          <h1 className="text-4xl font-bold mb-1">{title}</h1>
        </div>

        <div className="self-center flex flex-col gap-12 w-full">
          <div className="flex gap-12">
            {/* primary image */}
            {image ? (
              <div
                className="cursor-pointer"
                onClick={() => handleOverlayToggle(-1)} // Primary image index is -1
              >
                <div className="w-2xl max-w-2xl rounded-lg shadow-xl xl:h-[40vh] w-[32vw] rounded-t-xl flex bg-[#00000040] p-2 justify-center">
                  <GatsbyImage
                    image={getImage(image)}
                    alt={title}
                    className="m-16 max-h-[40vh] self-center rounded-t-xl flex m-24"
                  />
                </div>
              </div>
            ) : (
              <div className="w-2xl max-w-2xl rounded-lg shadow-xl xl:h-[40vh] w-[32vw] rounded-t-xl flex bg-[#00000040] p-2 justify-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width="80"
                    height="80"
                    fill="#ffffff0f"
                    className="mt-[15vh] max-h-[40vh] self-center rounded-t-xl flex"
                  >
                    <path d="M448 80c8.8 0 16 7.2 16 16l0 319.8-5-6.5-136-176c-4.5-5.9-11.6-9.3-19-9.3s-14.4 3.4-19 9.3L202 340.7l-30.5-42.7C167 291.7 159.8 288 152 288s-15 3.7-19.5 10.1l-80 112L48 416.3l0-.3L48 96c0-8.8 7.2-16 16-16l384 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm80 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
                  </svg>
                </span>
              </div>
            )}
            <div className="text-lg text-gray-300">
              {/* description */}
              {documentToReactComponents(JSON.parse(description.raw))}

              {/* link if exists */}
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline mt-4 block"
                >
                  Visit Project
                </a>
              )}
            </div>
          </div>
          {/* more images */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((img, index) => (
              <div
                key={index}
                className="cursor-pointer relative group"
                onClick={() => handleOverlayToggle(index)}
              >
                {/* Image */}
                <GatsbyImage
                  image={getImage(img)}
                  alt={`Additional image ${index + 1}`}
                  className="w-full rounded-lg shadow-lg max-h-28 group-hover:opacity-90 transition-opacity"
                />

                {/* Hover Text */}
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                  <span className="text-white text-sm font-semibold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="h-5 fill-white"
                    >
                      <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM184 296c0 13.3 10.7 24 24 24s24-10.7 24-24l0-64 64 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-64 0 0-64c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 64-64 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l64 0 0 64z" />
                    </svg>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* overlay */}
      {isOverlayVisible && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={e => {
            if (e.target === e.currentTarget) {
              handleOverlayToggle()
            }
          }}
        >
          <button
            onClick={handleOverlayToggle}
            className="absolute top-2 right-4 text-[#FFFFFFC0] text-2xl font-bold"
          >
            &times;
          </button>
          <div className="relative flex flex-col items-center">
            <GatsbyImage
              image={
                currentIndex === -1
                  ? getImage(image)
                  : getImage(images[currentIndex])
              }
              alt={title}
              className="max-w-[60vw] max-h-[80vh] rounded-lg shadow-xl"
            />
            <div className="absolute flex gap-[60vw] bottom-[50%]">
              <button
                onClick={handlePrevious}
                className="text-white bg-[#FFFFFF00] bg-opacity-50 px-4 py-2 rounded-lg hover:bg-opacity-70"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  className="w-6 h-6 fill-white"
                >
                  <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="text-white bg-[#FFFFFF00] bg-opacity-50 px-4 py-2 rounded-lg hover:bg-opacity-70"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  className="w-6 h-6 fill-white"
                >
                  <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="">
        <h2 className="text-lg font-bold mt-4 text-white px-[5vw] 2xl:px-[20vw]">
          Other projects
        </h2>
        <div className="flex flex-row justify-center gap-16 p-4 mb-4 px-[5vw] 2xl:px-[20vw]">
          <ProjectsList limit={8} />
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
      link
      image {
        gatsbyImageData(layout: CONSTRAINED, width: 800)
      }
      images {
        gatsbyImageData(layout: CONSTRAINED, width: 1920)
      }
    }
  }
`
