function reduce(elements,cb,startingValue){
    let acc=0;
    let arr=[];
    if(typeof startingValue=='undefined'){
        startingValue=0;
     }
    for(let i=startingValue;i<elements.length;i++){ 
     acc=cb(startingValue,elements[i]);
        
    }

    
   return acc;

}
module.exports={reduce};