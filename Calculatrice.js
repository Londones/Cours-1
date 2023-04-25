function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

function div(a, b) {
  if (b === 0) return new Error("Impossible de diviser par 0");
  return a / b;
}

function avg(tab) {
  let sum = 0;
  if (tab.length === 0) return 0;
  for (let i = 0; i < tab.length; i++) {
    sum += tab[i];
  }
  return sum / tab.length;
}

module.exports = { add: add, sub: sub, sub, mul: mul, div: div, avg: avg };
