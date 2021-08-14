const items=[1,2,3,4,5,5];
const re=require('../find.js');
function cb(arr2){
   if(arr2){ 
       return true; 
    } 

}


let newar=re.find(items,cb);
console.log(newar);