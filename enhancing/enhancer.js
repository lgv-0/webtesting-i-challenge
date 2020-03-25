module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  return { ...item,
          enhancement: ++item.enhancement > 20 ? 20 : item.enhancement };
}

function fail(item) {
  if (item.enhancement < 15)
    item.durability -= 5;
  else
    item.durability -= 10;

  if (item.enhancement > 16)
    item.enhancement--;

  return item;
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
