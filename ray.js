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
  constructor(property, value) {
    this.property = property;
    this.value = value;
  }

  toString() {
    return `${this.property}:${this.value};`;
  }
}

class Circle {
  constructor(point, radius) {
    this.x = point.x;
    this.y = point.y;
    this.radius = radius;
  }

  alpha() {
    return Math.round(100 / this.radius * 20);
  }

  blueColor() {
    return new Color(0, 0, 255).rgba(this.alpha());
  }

  toHtml() {
    const height = new Style('height', `${this.radius * 2}px`).toString();
    const width = new Style('width', `${this.radius * 2}px`).toString();
    const bgColor = new Style('background-color', this.blueColor()).toString();
    const borderRadius = new Style('border-radius', '50%').toString();
    const position = new Style('position', 'relative').toString();
    const top = new Style('top', `${this.y}px`).toString();
    const left = new Style('left', `${this.x}px`).toString();
    const style = [
      height, width, bgColor, borderRadius, position, left, top
    ].join('');
    return `<div style = "${style}"/> `;
  }
}

class Ray {
  constructor(startPoint, initialRadius) {
    this.x = startPoint.x;
    this.y = startPoint.y;
    this.initialRadius = initialRadius;
  }

  draw() {
    return Array(20).fill(1).map(() => {
      const point = { x: this.x += 3, y: this.y += 2 };
      this.initialRadius += 10;
      const circle =
        new Circle(point, this.initialRadius);
      return circle.toHtml();
    }).join('');
  }
}

const ray = new Ray({ x: 0, y: 0 }, 10);

fs.writeFileSync('ray.html', ray.draw(), 'utf8');
