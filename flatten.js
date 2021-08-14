
function flatten(arr2) {
    const finalArray = [];
    
    for (let i = 0; i < arr2.length; i++) {
      if (Array.isArray(arr2[i])) {
        finalArray.push(...flatten(arr2[i]));
      } else {
        finalArray.push(arr2[i]);
      }
    }
    return finalArray;
  }
module.exports={flatten};