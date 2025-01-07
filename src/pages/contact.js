import React from 'react';
import { graphql } from 'gatsby';
import Navbar from '../components/Navbar';

export default function Contact({ data }) {
  const { email, links } = data.contentfulContact;

  return (
    <div>
        <Navbar />
      <h1>Contact Me</h1>
      <p>Email: {email}</p>
      
      <p>Links:</p>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link}>{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const query = graphql`
  query {
    contentfulContact {
      email
      links
    }
  }
`;
