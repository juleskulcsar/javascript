//We have lots of deployment dashboards where we have drop-down UI to select an application version to deploy.
//We want to ensure that software version numbers delivered to our UI from the back-end API
//are always ordered with the newest (highest) available version at the top.

//Eg:
//const input = [0.1.0, 3.2.1, 2.2.3, 0.1.1];
//sortVersions(input) should return [3.2.1, 2.2.3, 0.1.1, 0.1.0];

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
