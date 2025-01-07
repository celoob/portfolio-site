import React from 'react';
import { graphql } from 'gatsby';
import { Link } from 'gatsby';
import Navbar from '../components/Navbar';

export default function Projects({ data }) {
  const projects = data.allContentfulProject.nodes;

  return (
    <div>
      <Navbar />
      <h1>Projects Overview</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.title}>
            <h2>{project.title}</h2>
            <p>{project.description.raw}</p>
            <Link to={`/projects/${project.title.toLowerCase().replace(/\s+/g, '-')}`}>View Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const query = graphql`
  query {
    allContentfulProject {
      nodes {
        title
        description {
          raw
        }
      }
    }
  }
`;
