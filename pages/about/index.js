import React from 'react';

import content from '../../content/about.md';

const About = () => {
  const { attributes, html } = content;
  return (
    <React.Fragment>
      <h1>{attributes.title}</h1>
      <h2>some stuff in the page tpl</h2>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <style jsx>{`

      `}</style>
    </React.Fragment>
  );
};
export default About;
