const arr= [1, [2], [[3]], [[[4]]]]; 
const ires=require('../flatten.js');
// function cb(arry){
//     return arry;

// }
let res=flatten(arr);
console.log(res);