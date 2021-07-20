// Function to check whether two strings are anagram of each other or not
function isAnagram(string1, string2) {
  if (string1.length !== string2.length) {
    return false;
  }

  const object1 = {};
  const object2 = {};

  for (const letter of string1) {
    object1[letter] = (object1[letter] || 0) + 1;
  }
  for (const letter of string2) {
    object2[letter] = (object2[letter] || 0) + 1;
  }

  for (const key in object1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;
}

module.exports = {
  isAnagram
};
