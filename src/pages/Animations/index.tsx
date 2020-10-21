import React from 'react'
import Animation from "../../libs/p5/Animation";
import sketch from "../../showcaseSketch";
import webgl from "../../showcaseWebGL";

const AnimationsPage = () => {
  return (
    <div className="container">
      <Animation sketch={sketch} />
      <Animation sketch={webgl} />
    </div>
  )
}

export default AnimationsPage;
