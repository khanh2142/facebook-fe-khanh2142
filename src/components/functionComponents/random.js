function random(data) {
  return data[Math.floor(Math.random() * (data.length - 1 - 0 + 1)) + 0];
}

export default random;
