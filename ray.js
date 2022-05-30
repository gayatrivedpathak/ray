const fs = require('fs');

class Color {
  constructor(red, green, blue) {
    this.red = red;
    this.green = green;
    this.blue = blue;
  }

  rgba(alpha) {
    return `rgba(${this.red},${this.green},${this.blue},${alpha}%)`;
  }
}

class Style {
  constructor() {
    this.style = [];
  }

  addAttribute(property, value) {
    this.style.push(`${property}:${value}`);
  }

  toString() {
    return this.style.join(';');
  }
}

class Circle {
  constructor(point, radius, color) {
    this.x = point.x;
    this.y = point.y;
    this.radius = radius;
    this.color = color;
  }

  toHtml() {
    const style = new Style();
    style.addAttribute('height', `${this.radius * 2}px`);
    style.addAttribute('width', `${this.radius * 2}px`);
    style.addAttribute('background-color', this.color);
    style.addAttribute('border-radius', '50%');
    style.addAttribute('position', 'relative');
    style.addAttribute('top', `${this.y}px`);
    style.addAttribute('left', `${this.x}px`);

    return `<div style = "${style.toString()}"/> `;
  }
}

class Ray {
  constructor(startPoint, initialRadius, length) {
    this.x = startPoint.x;
    this.y = startPoint.y;
    this.initialRadius = initialRadius;
    this.length = length;
  }

  alpha() {
    return Math.round(100 / this.initialRadius * 20);
  }

  blueColor() {
    return new Color(0, 0, 255).rgba(this.alpha());
  }

  draw() {
    return Array(this.length).fill(1).map(() => {
      const point = { x: this.x += 3, y: this.y += 2 };
      this.initialRadius += 10;
      const circle = new Circle(point, this.initialRadius, this.blueColor());
      return circle.toHtml();
    }).join('');
  }
}

const drawRay = (length) => {
  const meta = '<head><meta http-equiv="refresh" content="0.5"/></head>';
  let rayLength = 1;
  const intervalId = setInterval(() => {
    if (rayLength > length) {
      clearInterval(intervalId);
    }
    const ray = new Ray({ x: 0, y: 0 }, 10, rayLength);
    fs.writeFileSync('ray.html', meta + ray.draw(), 'utf8');
    rayLength++;
  }, 500);
};

drawRay(25);
