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
    const point = { x: this.x, y: this.y };
    let radius = this.initialRadius;
    return Array(this.length).fill(1).map(() => {
      point.x += 3;
      point.y += 2;
      radius += 10;
      const circle = new Circle(point, radius, blueColor(radius));
      return circle.toHtml();
    }).join('');
  }
}

const blueColor = (radius) => {
  const alpha = Math.round(100 / radius * 20);
  return new Color(0, 0, 255).rgba(alpha);
};

exports.Ray = Ray;
