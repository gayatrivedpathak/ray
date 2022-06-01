const { Color } = require('./color');
const { Circle } = require('./Circle');

class Ray {
  constructor(origin, initialRadius, length) {
    this.x = origin.x;
    this.y = origin.y;
    this.initialRadius = initialRadius;
    this.length = length;
  }

  draw() {
    const origin = { x: this.x, y: this.y };
    const initialRadius = this.initialRadius;
    const circles = [];
    for (let step = 1; step <= this.length; step++) {
      const circle = drawCircleAtStep(origin, step, initialRadius);
      circles.push(circle.toHtml());
    }
    return circles.join('');
  }
}

const blueColor = (radius) => {
  const alpha = Math.round(100 / radius * 20);
  return new Color(0, 0, 255).rgba(alpha);
};

const drawCircleAtStep = (origin, step, initialRadius) => {
  let x = origin.x + step * 3;
  let y = origin.y + step * 2;
  const radius = initialRadius * step + 10;
  const circle = new Circle({ x, y }, radius, blueColor(radius));
  return circle;
};

exports.Ray = Ray;
