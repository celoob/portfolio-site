import React from 'react';
import { graphql } from 'gatsby';
import Navbar from '../components/Navbar';

export default function Project({ data }) {
  const { title, description } = data.contentfulProject;

  return (
    <div>
      <Navbar />
      <h1>{title}</h1>
      <p>{description.raw}</p>
    </div>
  );
}

export const query = graphql`
  query($title: String!) {
    contentfulProject(title: { eq: $title }) {
      title
      description {
        raw
      }
    }
  }
`;
