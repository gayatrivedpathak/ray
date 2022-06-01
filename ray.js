const { Circle } = require('./Circle');
const { Color } = require('./color');

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
    return Array(this.length).fill(1).map((_, index) => {
      let x = origin.x + (index + 1) * 3;
      let y = origin.y + (index + 1) * 2;
      const radius = initialRadius * (index + 1) + 10;
      const circle = new Circle({ x, y }, radius, blueColor(radius));
      return circle.toHtml();
    }).join('');
  }
}

const blueColor = (radius) => {
  const alpha = Math.round(100 / radius * 20);
  return new Color(0, 0, 255).rgba(alpha);
};

exports.Ray = Ray;
