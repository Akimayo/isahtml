import React from 'react'
import Animation from "../../libs/p5/Animation";
import sketch from "../../showcaseSketch";
import webgl from "../../showcaseWebGL";

const P5JPage = () => {
    return (
        <div className="container">
            <Animation sketch={sketch} />
            <Animation sketch={webgl} />
        </div>
    )
}

export default P5JPage;
