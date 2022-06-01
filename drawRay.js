const fs = require('fs');
const { Ray } = require('./ray');

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

const ray = new Ray({ x: 0, y: 0 }, 10, 1);
// console.log(ray.draw());
fs.writeFileSync('ray.html', ray.draw(), 'utf8');

// drawRay(25);
