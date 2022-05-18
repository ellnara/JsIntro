let word = "saaaaslllllaaaammmmmaaaas   sdfsghdgfg564545";
let count = 0;
let arr = [];
function countSymbol(word) {
  for (let i = 0; i < word.length; i++) {
    count = 1;
    if (arr.indexOf(word[i]) == -1) {
      for (let j = i + 1; j < word.length + 1; j++) {
        if (word[i] == word[j]) {
          count++;
          arr.push(word[j]);
        }
      }
    } else {
      continue;
    }
    console.log(`"${word[i]}" count: ${count}`);
  }
}
countSymbol(word);
