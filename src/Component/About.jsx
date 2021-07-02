import React from 'react';
import web from '../Image/img2.svg';
import { NavLink } from 'react-router-dom';
import Common from './Common';

const About = () => {
  return (
    <>
      <Common
        name="Welcome to About Page"
        imgsrc={web}
        visit="/contact"
        btnName="Contact Now"
      />
    </>
  );
};

export default About;
