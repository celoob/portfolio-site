import React from "react"
import Navbar from "../components/Navbar"
import ProjectsList from "../components/ProjectsList"

export default function Projects() {
  return (
    <div className="flex flex-col mb-10">
      <Navbar />
      <div className="flex flex-col px-[5vw] 2xl:px-[20vw] py-8 text-white">
        <div className="w-full border-gray-400 p-4">
          <h1 className="text-4xl font-bold mb-10 m-0">Projects Overview</h1>
        </div>
        <ProjectsList />
      </div>
    </div>
  )
}
