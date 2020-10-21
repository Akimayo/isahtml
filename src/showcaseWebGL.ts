import p5 from "p5";

const webgl = (p: p5) => {
  p.setup = () => p.createCanvas(800, 200, p.WEBGL);
  p.draw = () => {
    p.background(0);
    p.ambientLight(255, 98);
    p.pointLight(255, 224, 192, p.mouseX, p.mouseY, 120);
    p.noStroke();
    p.push();
    p.translate(80, -40, 30);
    p.ambientMaterial(36);
    p.box(60);
    p.pop();
    p.push();
    p.translate(-80, 0, 60);
    p.specularMaterial(192, 64, 192);
    p.sphere(20);
    p.pop();
  }
}
export default webgl;
