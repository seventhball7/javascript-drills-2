function filter(elements,cb){
    const arr=[];
    const err=[];
    for(let i=0;i<elements.length;i++){
     if(cb(elements[i]))
         arr.push(elements[i]);

    
}
 if(arr.length!=0){
  return arr;
}
else{
    return err;
}
}
module.exports={filter};