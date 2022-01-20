import React from 'react';
import notetaker from './images/notetaker.PNG';
import workoutpic from './images/workoutpic.PNG';
import dogpic from './images/dogpic.png';

export default function Blog() {
  return (
    <div style={{textAlign: 'center'}}>
      <h1>Past work</h1>
      <p>
       Here is some of my past work! 
      </p>

      <p>Here is my workout Tracker application.</p>
      <p><a href="https://github.com/CedarHalvorson/workout-tracker">Workout tracker github.</a></p>
      <p><a href="https://limitless-dawn-11698.herokuapp.com/?id=61732cec0567e600160fda5a">Workout tracker deployed site.</a></p>
      <img src={workoutpic} height="200px" />

      <p>Here is my dog locator project, this was a group project that I was a part of.</p>
      <p><a href="https://github.com/danielletran89/dog-locator-project">Dog locater project github.</a></p>
      <p><a href="https://danielletran89.github.io/dog-locator-project/">Dog locator project deployed site.</a></p>
      <img src={dogpic} height="200px" />

      <p>Here is my note taker app.</p>
      <p><a href="https://github.com/CedarHalvosrson/note-Taker">Note taker github</a></p>
      <p><a href="https://note-taker-11week.herokuapp.com/">Note taker deployed site</a></p>
      <img src={notetaker} height="200px" />
    </div>
  );
}
