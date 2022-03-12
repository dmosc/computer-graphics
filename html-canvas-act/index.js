const coordinateWithDelta = (coordinate = [0, 0], delta = 0) => {
  return coordinate.map((val) => val + delta);
};

const deltasWithDistance = (delta = 0, n = 0) => {
  const paddings = [];
  for (let i = 0; i < n; ++i) {
    paddings.push(delta * i + delta);
  }
  return paddings;
};

const loadCanvas = () => {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  ctx.lineWidth = 10;
  ctx.lineJoin = "round";
  const leftAnchor = [10, 10];
  const dominoHeight = 300;
  const dominoWidth = 150;
  const middle = dominoHeight / 2 + 5;

  ctx.strokeRect(...leftAnchor, dominoWidth, dominoHeight);
  ctx.fillRect(leftAnchor[0] + 15, middle, dominoWidth - 30, 10);

  ctx.lineWidth = 8;
  ctx.fillStyle = "#c82124";
  const deltas = deltasWithDistance(37, 3);
  for (const delta of deltas) {
    ctx.beginPath();
    ctx.arc(...coordinateWithDelta(leftAnchor, delta), 15, 0, 2 * Math.PI);
    ctx.fill();
  }

  ctx.beginPath();
  ctx.arc(
    leftAnchor[0] + deltas[1],
    leftAnchor[1] + deltas[1] + middle,
    15,
    0,
    2 * Math.PI
  );
  ctx.fill();
};
