import React from 'react';
import resume from './images/ResumePlaceholder.PNG';

export default function Home() {
  return (
    <div>
      <h1>Resume</h1>
      <p>
       I have not worked with my career manager to cerate a new resume therefore I dont have one yet I'm going to use this as a placeholder for the time being. Thank you for understanding. Once I have made one it be put in this ones place. i would also make a clickable link to view the Resume. 
      </p>
      <img src={resume} height="200px" />
    </div>
  );
}
