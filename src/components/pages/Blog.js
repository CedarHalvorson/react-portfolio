import React from 'react';
import notetaker from './images/notetaker.PNG';
import trailsApp from './images/header-screenshot.png';
import weatherApp from './images/weatherapplication.PNG';

export default function Blog() {
  return (
    <div>
      <h1>Past work</h1>
      <p>
       Here is some of my past work! 
      </p>
      <p> Here is my note taker app.</p>
      <p><a href="https://github.com/CedarHalvosrson/note-Taker">Note taker github</a></p>
      <p><a href="https://note-taker-11week.herokuapp.com/">Note taker deployed site</a></p>
      <img src={notetaker} height="200px" />

      <p>Here is a group project I worked  on, my biggest contribution was the map! instructions for viewing the sie are in the readme.</p>
      <p><a href="https://github.com/bleufox/trails-app">Trails app Github.</a></p>
      <img src={trailsApp} height="200px" />

      <p> </p>
      <p><a href="https://github.com/CedarHalvosrson/weather-app">weather application github</a></p>
      <p><a href="https://cedarhalvosrson.github.io/weather-app/">weather application deployed site</a></p>
      <img src={weatherApp} height="200px" />
    
    </div>
  );
}
