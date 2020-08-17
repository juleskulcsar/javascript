function sortVersions(v) {
  let arr = [];
  v.forEach(elem => {
    arr.push(elem.split("."));
  });
  arr = arr
    .map(x => x.map(y => parseInt(y)))
    .sort((arr1, arr2) => arr1[0] - arr2[0] || arr1[1] - arr2[1])
    .reverse()
    .map(x => x.join("."));
  return arr;
}

// const versions = ['1.3.0.9', '0.2.0', '3.1.2', '0.1.6', '5.0.0', '3.3.3.3', '3.3.3.3.3', '3.10', '0.2.0']
// sortVersions(versions)
//output:
//["5.0.0", "3.10", "3.3.3.3.10", "3.3.3.3.3", "3.3.3.3", "3.1.2", "1.3.0.9", "0.2.0", "0.2.0", "0.1.6"]

module.exports = sortVersions;
