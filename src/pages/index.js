import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Navbar from '../components/Navbar';

export default function StartPage({ data }) {
  const { title, text, image } = data.allContentfulStartPage.nodes[0];

  return (
    <div>
      <Navbar />
      <h1>{title}</h1>
      {documentToReactComponents(JSON.parse(text.raw))}
      <GatsbyImage image={getImage(image)} alt={title} />
    </div>
  );
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
`;
