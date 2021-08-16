 module.exports=map=(elements,cb)=>{
    const arr=[];
 for(let i=0;i<elements.length;i++){
     cb(elements[i],i,elements)
     if(cb){
     arr.push(cb(elements[i]));
     }
 }
 return arr;
}
//module.exports=map;