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
exports.Color = Color;
