import React from 'react';
import { graphql } from 'gatsby';
import Navbar from '../components/Navbar';

export default function About({ data }) {
  const { title, description } = data.contentfulAbout;

  return (
    <div>
        <Navbar />
      <h1>{title}</h1>
      <p>{description.raw}</p>
    </div>
  );
}

export const query = graphql`
  query {
    contentfulAbout {
      title
      description {
        raw
      }
    }
  }
`;
