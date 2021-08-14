const items=[1,2,3,4,5,5];
const ires=require('../each.js');
 // console.log(ires);
function cb(a,b){
  console.log(a,b);
}
ires.each(items,cb);