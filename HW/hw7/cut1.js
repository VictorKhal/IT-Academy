function cutNumberInt(number, cutNum) {
  if (cutNum < 1) return [];

  const cuts = [];
  for (let i = 0; i < cutNum - 1; i++) {
    cuts.push(Math.floor(Math.random() * number));
  }

  cuts.sort((a, b) => a - b);
  cuts.unshift(0);
  cuts.push(number);

  const parts = [];
  for (let i = 1; i < cuts.length; i++) {
    parts.push(cuts[i] - cuts[i - 1]);
  }

  return parts;
}