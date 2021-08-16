module.exports=find=(elements,cb)=>{
    const arr=[]
    for(let i=0;i<elements.length;i++){
        
        if(cb(elements[i]))
        {
        arr.push(elements[i]);
        
    }
   }
if(arr.length==0){ 
  return 'undefined';
}
else
 return arr[0];
    
}
//module.exports={find};