function flattenAndSort(array) {
  return [].concat.apply([], array).sort((a, b) => a - b);
}
