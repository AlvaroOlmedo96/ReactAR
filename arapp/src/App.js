import logo from './logo.svg';
import './App.css';

import 'aframe';
//import 'aframe-particle-system-component';
//import {Entity, Scene} from 'aframe-react';
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <a-scene arjs>
        {/* <Entity geometry={{primitive: 'box'}} material={{color: 'red'}} position={{x: 0, y: 0, z: -5}}/>
        <Entity particle-system={{preset: 'snow'}}/>
        <Entity light={{type: 'point'}}/>
        <Entity gltf-model={{src: 'virtualcity.gltf'}}/>
        <Entity text={{value: 'Hello, WebVR!'}}/> */}
         
         <a-marker preset="hiro">
           <a-entity position="0 0 0" scale="0.1 0.1 0.1">
             <a-sphere color="blue" radius="5"></a-sphere>
           </a-entity>
         </a-marker>

        <a-entity camera position="0 0 0"></a-entity>
      </a-scene>

    </div>
  );
}

export default App;
