import React from 'react';
import '../App.css'

const HtmlRenderer = ({ html }) => {
  return <div className='dangerouslySetInnerHTML' dangerouslySetInnerHTML={{ __html: html }} />;
};

export default HtmlRenderer;
