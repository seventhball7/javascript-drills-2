const items=[1,2,3,4,5,5];
let ires=require('../map.js');
function iteratee(newar){
    return newar;
}
let res=map(items, iteratee);
console.log(res);