function cleanAndSort(arr) {
  const result = arr.filter(Boolean).sort((a, b) => b - a);
  return result;
}

const array = [0, 5, "", 12, null, 7, false, undefined, 3, NaN];
console.log(cleanAndSort(array));