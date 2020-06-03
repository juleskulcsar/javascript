function isAnagram(str1, str2) {
  for (let i = 0; i < arguments.length; i++) {
    arguments[i] = arguments[i]
      .replace(/[^\w]/g, "")
      .toLowerCase()
      .split("")
      .reduce((acc, next) => {
        acc.hasOwnProperty(next)
          ? (acc[next] = acc[next] + 1)
          : (acc[next] = 1);
        return acc;
      }, {});
  }

  for (let i = 0; i < arguments.length; i++) {
    if (
      Object.keys(arguments[i]).length !== Object.keys(arguments[i + 1]).length
    ) {
      return false;
    }
    for (let val in arguments[i]) {
      if (arguments[i][val] !== arguments[i + 1][val]) {
        return false;
      }
    }
    return true;
  }
}

//O(n) complexity
function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  for (let i = 0; i < arguments.length; i++) {
    arguments[i] = arguments[i]
      .replace(/[^\w]/g, "")
      .toLowerCase()
      .split("");
  }

  let lookup = {};

  for (let i = 0; i < str1.length; i++) {
    let char = str1[i];
    lookup[char] ? (lookup[char] += 1) : (lookup[char] = 1);
  }

  for (let i = 0; i < str2.length; i++) {
    let char = str2[i];
    if (!lookup[char]) {
      return false;
    } else {
      lookup[char] -= 1;
    }
  }
  return true;
}

module.exports = isAnagram;
