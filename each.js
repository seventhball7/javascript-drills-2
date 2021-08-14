
function each(elements,cback){
      const arr=[];
    for(var i=0;i<elements.length;i++){
      cback(elements[i],i);
    
    }
  
   
}
 module.exports={each};


