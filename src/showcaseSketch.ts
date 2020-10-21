import p5 from "p5";

const sketch = (p: p5) => {
  const textSize = 48;
  const wobble = 4;
  let framecount = 0;
  const text = 'Hello!';
  p.setup = () => {
    p.createCanvas(400, 200);
    p.frameRate(2);
    p.textSize(textSize);
    p.textFont('monospace');
    p.textStyle(p.BOLD);
  }
  p.draw = () => {
    p.background(31, 121, 150);
    console.log((p.height - textSize))
    for (let i = 1; i <= text.length; i++)
      p.text(text.substring(i - 1, i), i * textSize, (p.height / 2) + wobble * (i % 2 ^ framecount));
    framecount = (framecount + 1) % 2;
  }
}
export default sketch;
