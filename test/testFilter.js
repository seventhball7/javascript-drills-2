const items=[1,2,3,4,5,5];
const ires=require('../filter.js');
function cb(secarr){
    if(secarr)
      return true;
}
let res=filter(items,cb);
console.log(res);