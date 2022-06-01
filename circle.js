const { Style } = require('./style');

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
exports.Circle = Circle;
