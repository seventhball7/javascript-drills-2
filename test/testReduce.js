const items=[1,2,3,4,5,5];
const ires=require('../reduce.js');
let svalue;
function cb(svalue,acc){
    return (svalue,acc);

}
let res=reduce(items,cb);
console.log(res);