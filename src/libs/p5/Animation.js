import React, { useEffect } from 'react';
import p5js from 'p5';

function Animation(props) {
  const p5ref = React.createRef();
  let p5inst;
  useEffect(() => {
    p5inst = new p5js(props.sketch, p5ref.current);
    return () => (p5inst = undefined);
  }, []);
  return (<div ref={p5ref} />);
}
export default Animation;
