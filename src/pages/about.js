import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Navbar from "../components/Navbar"
import vscode from "../images/vscode.png"
import htmlicon from "../images/html.png"
import cssicon from "../images/css.png"
import jsicon from "../images/js.png"
import vueicon from "../images/vue.png"
import reacticon from "../images/react.png"
import tailwindicon from "../images/tailwind.png"
import viteicon from "../images/vite.svg"
import figmaicon from "../images/figma.png"
import aiicon from "../images/ai.png"
import psicon from "../images/ps.png"
import pricon from "../images/pr.svg"

export default function About({ data }) {
  const { title, description, image } = data.contentfulAbout

  return (
    <div>
      <Navbar />
      <div className="flex flex-row px-[5vw] 2xl:px-[20vw] pt-8 gap-8 mb-24">
        {/* main section */}
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

      {/* TILL JOEL: nedan sektion hade optimalt gjorts dynamiskt från contentful, men la till denna snabbt innan redovisningen så blev hårdkodning istället */}
      {/* lower section */}
      <div className="flex flex-col justify-center">
        {/* SKILLS */}
        <div className="flex border-b mx-[5vw] 2xl:mx-[20vw] border-1 border-[#00000050] mb-8">
          <h2 className="text-xl font-bold text-[#FFFFFFE0] p-4">Skills</h2>
        </div>
        <div className="flex gap-12 text-white gap-40 mx-[5vw] 2xl:mx-[25vw] mb-16">
          {/* frontend skills */}
          <div className="w-[22vw]">
            <h3 className="text-md uppercase text-orange-400 mb-4">Frontend</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-8 gap-1">
              <li>
                <img
                  src={vscode}
                  alt="vscode"
                  className="w-12 h-12 bg-[#00000000] p-2 rounded-lg transform transition-transform duration-300 hover:scale-110"
                />
              </li>
              <li>
                <img
                  src={htmlicon}
                  alt="htmlicon"
                  className="w-12 h-12 bg-[#00000000] p-2 rounded-lg transform transition-transform duration-300 hover:scale-110"
                />
              </li>
              <li>
                <img
                  src={cssicon}
                  alt="cssicon"
                  className="w-12 h-12 bg-[#00000000] p-2 rounded-lg transform transition-transform duration-300 hover:scale-110"
                />
              </li>
              <li>
                <img
                  src={jsicon}
                  alt="jsicon"
                  className="w-12 h-12 bg-[#00000000] p-2 rounded-lg transform transition-transform duration-300 hover:scale-110"
                />
              </li>
              <li>
                <img
                  src={vueicon}
                  alt="vueicon"
                  className="w-12 h-12 bg-[#00000000] p-2 rounded-lg transform transition-transform duration-300 hover:scale-110"
                />
              </li>
              <li>
                <img
                  src={reacticon}
                  alt="reacticon"
                  className="w-12 h-12 bg-[#00000000] p-2 rounded-lg transform transition-transform duration-300 hover:scale-110"
                />
              </li>
              <li>
                <img
                  src={tailwindicon}
                  alt="tailwindicon"
                  className="w-12 h-12 bg-[#00000000] p-2 rounded-lg transform transition-transform duration-300 hover:scale-110"
                />
              </li>
              <li>
                <img
                  src={viteicon}
                  alt="viteicon"
                  className="w-12 h-12 bg-[#00000000] p-2 rounded-lg transform transition-transform duration-300 hover:scale-110"
                />
              </li>
            </ul>
          </div>
          {/* design skills */}
          <div>
            <h3 className="text-md uppercase text-orange-400 mb-4">Design</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1">
              <li>
                <img
                  src={figmaicon}
                  alt="figmaicon"
                  className="h-12 w-12 bg-[#00000000] object-contain p-2 rounded-lg transform transition-transform duration-300 hover:scale-110"
                />
              </li>
              <li>
                <img
                  src={aiicon}
                  alt="aiicon"
                  className="h-12 w-12 bg-[#00000000] object-contain p-1 rounded-lg transform transition-transform duration-300 hover:scale-110"
                />
              </li>
              <li>
                <img
                  src={psicon}
                  alt="psicon"
                  className="h-12 w-12 bg-[#00000000] object-contain p-1 rounded-lg transform transition-transform duration-300 hover:scale-110"
                />
              </li>
              <li>
                <img
                  src={pricon}
                  alt="pricon"
                  className="h-12 w-12 bg-[#00000000] object-contain p-1 rounded-lg transform transition-transform duration-300 hover:scale-110"
                />
              </li>
            </ul>
          </div>
        </div>

        {/* COURSES */}
        <div className="flex border-b mx-[5vw] 2xl:mx-[20vw] border-1 border-[#00000050] mb-8">
          <h2 className="text-xl font-bold text-[#FFFFFFE0] p-4">Courses</h2>
        </div>
        <div className="flex gap-12 text-white gap-40 mx-[5vw] 2xl:mx-[25vw]">
          {/* frontend courses */}
          <div className="w-[22vw]">
            <h3 className="text-md uppercase text-orange-400 mb-4">
              Frontendutveckling
            </h3>
            <ul className="text-[#FFFFFFEF]">
              <li>CMS</li>
              <li>Kravarbete och kommunikation med kravställare</li>
              <li>LIA 1</li>
              <li>Fullstackutveckling</li>
              <li>Agil utveckling</li>
              <li>JavaScript med ramverk</li>
              <li>UX & UI-design</li>
              <li>Native JavaScript</li>
              <li>HTML och CSS</li>
            </ul>
          </div>
          {/* ux courses */}
          <div>
            <h3 className="text-md uppercase text-orange-400 mb-4">UI/UX</h3>
            <ul className="text-[#FFFFFFEF]">
              <li>Klientbaserad Webutveckling</li>
              <li>Grafiska verktyg</li>
              <li>Webbteknik I</li>
              <li>Metoder för interaktionsdesign I</li>
              <li>Design och konceptvisualisering</li>
              <li>Ämnesintroduktion till interaktionsdesign</li>
              <li>Web management</li>
              <li>Brukarorienterad design</li>
              <li>Design av grafiska gränssnitt</li>
              <li>Grafisk design</li>
              <li>Metoder för interaktionsdesign II</li>
              <li>Tillämpad interaktionsdesign</li>
              <li>Projektarbete med vetenskapsteori</li>
              <li>Vektorgrafik</li>
              <li>Spelutveckling med Actionscript i Flash I</li>
            </ul>
          </div>
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
