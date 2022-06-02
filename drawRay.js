const fs = require('fs');
const { Ray } = require('./ray');

const meta = () => '<head><meta http-equiv="refresh" content="0.5"/></head>';
const createRay = () => new Ray({ x: 0, y: 0 }, 10, 1);

const drawRay = (length) => {
  const ray = createRay();

  const intervalId = setInterval(() => {
    if (ray.isLongerThan(length)) {
      clearInterval(intervalId);
      return;
    }

    fs.writeFileSync('ray.html', meta() + ray.draw(), 'utf8');

    ray.grow();
  }, 500);
};

drawRay(25);
