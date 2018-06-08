export default (items) => {
  for (var j, x, i = items.length; i; j = parseInt(Math.random() * i), x = items[--i], items[i] = items[j], items[j] = x);

  return items
}
