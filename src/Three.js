import * as THREE from 'three';

import { useEffect, useRef } from "react";

function MyThree() {
  const refContainer = useRef(null);
  useEffect(() => {
    var scene = new THREE.Scene(); //Creating a scene
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000); //Creating a basic camera(perspective camera) and giving it three parameters (angle of vison in degree, aspect ratio, closest range of vison, furthest range of vision)
    var renderer = new THREE.WebGLRenderer(); //Rendering initial WebGL renderer
    renderer.setSize(window.innerWidth, window.innerHeight); //Setting size of renderer
    // document.body.appendChild( renderer.domElement );
    // use ref as a mount point of the Three.js scene instead of the document.body
    refContainer.current && refContainer.current.appendChild( renderer.domElement );
    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    var cube = new THREE.Mesh(geometry, material);
    //Defining 3D object and connecting object details
    scene.add(cube); //Adding the cube object in scene
    camera.position.z = 5; //Defining position of camera (It should be between closest range and furthest range of vision)
    var animate = function () {
      requestAnimationFrame(animate); //It is a complementary function of SetTimeOut to call animate function according to system specs
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera); //Combining the scene and camera to render the screen
    };
    animate(); //Calling the animate function initially to perform requestAnimationFrame
    // renderer.render(scene, camera);
  }, []);
  return (
    <div ref={refContainer}></div>

  );
}

export default MyThree