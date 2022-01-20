import React from 'react';
import resume from './images/resumecapture.PNG';

export default function Home() {
  return (
    <div style={{textAlign: 'center'
    }}>
      <h1>Resume</h1>
      <a href="https://docs.google.com/document/d/152qZMr7nfczRbUZr0HSYSUcbS7RHoTeqYJ8s33dyqmE/edit?usp=sharing">
      <img src={resume} height="500px" 
      style={{float:'right',
      paddingRight: '450px',
      paddingTop: '10px'}}/>
      </a>

      <div style={{
        paddingTop: '40px',
        paddingLeft: '160px',
        textAlign: 'left'}}>  

      <h4>
       This is my resume if you click on the photo it will direct you to the document.
      </h4>
      </div>
    </div>
  );
}
