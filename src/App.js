import React from 'react';

import './App.scss';

import Showcase from './Showcase';
import Animation from './libs/p5/Animation';

import sketch from './showcaseSketch';

function App() {
    return (
        <>
            <Animation sketch={sketch} />
            <Showcase />
        </>
    );
}

export default App;
