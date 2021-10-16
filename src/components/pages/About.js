import React from 'react';
import profilePic from './images/pictureofme.jpg';

export default function About() {
  return (
    <div>
      <h1>About Page</h1>
      <img src={profilePic} height="200px" />
      <p>
        Hello I am Cedar Halvorson. I am  junior level Programmer who is familiar with the following technologies. HTML5, css, JavaScript, Bootstrap, jquery, express, Netlify, sql, mongoDb and React!
        I'm based in Oregon and have been coding since April 26 2021. I attended a Full stack web development course through University Of Oregon where I learned my skills. I'm looking for a first job and am incredibly excited to learn more about computer science and growing my career.   
      </p>
    </div>
  );
}
