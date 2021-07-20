const { isAnagram } = require('./helper');

const words = ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua'];
const result = [];
const obj = {};

for (const word of words) {
  const keys = Object.keys(obj);
  let found = false;
  let keySelected = null;

  for (const key of keys) {
    if (isAnagram(key, word)) {
      found = true;
      keySelected = key;
    }
  }

  if (found) {
    obj[keySelected].push(word);
  } else {
    obj[word] = [word];
  }
}

for (const key in obj) {
  result.push(obj[key]);
}

console.log(result);
