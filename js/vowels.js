function countVowels(word) {
  const matches = word.match(/["aeiou"]/gi);
  return matches ? matches.length : 0;
}
const city = "Mumbai";
console.log(countVowels(city));
// // countVowels();

// let stringData = "this is my data";
// // const stringsSplitData = stringData.split("");

// console.table(stringData.length(""));

const array = [1, 1, 2, 3, 3, 4, 4, 6, 3, 1];
// const newArray = [...new Set(array)];
console.log(new Set(array));
