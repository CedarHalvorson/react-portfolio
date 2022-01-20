import React from 'react';
import profilePic from './images/pictureofme.jpg';

export default function About() {
  return (
    <div style={{textAlign: 'center'}}>
      <h1>About Page</h1>
      <div>
      <img src={profilePic} height="500px" style={{float: 'right',
       paddingRight:'45px'}} />

      <div style={{
        paddingTop: '40px',
        paddingLeft: '40px',
        paddingRight: '700px',
        textAlign: 'left'}}>
      <h4>
        Hello I am Cedar Halvorson. I'm  a junior level Programmer who is familiar with the following technologies. HTML5, css, JavaScript, Bootstrap, jquery, express, Netlify, sql, MongoDb and React!
        I'm based in Oregon and have been coding since April 26 2021. I attended a Full stack web development course through University Of Oregon where I learned my skills. I'm looking for a first job, and am incredibly excited to learn more about computer science and growing my career.   
      </h4>
      </div>
      </div>
    </div>
  );
}
