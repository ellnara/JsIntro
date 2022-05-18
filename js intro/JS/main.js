let word = "salam";
let count = 0;
function countSymbol(word) {
  for (let i = 0; i < word.length; i++) {
    count = 1;
    if (i != exists) {
      for (let j = i + 1; j < word.length + 1; j++) {
        if (word[i] == word[j]) {
          count++;
          var exists = j;
        }
      }
    } else {
      continue;
    }
    console.log(`${word[i]} count: ${count}`);
  }
}
countSymbol(word);

// 2-ci yol

// let word = "salam";
// let letter = "a";
// let count = 0;
// function countSymbol(word, a) {
//   for (const symbol of word) {
//     if (symbol == a) {
//       count++;
//     }
//   }
// }
// countSymbol(word, letter);
// console.log(count);
