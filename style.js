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
exports.Style = Style;
