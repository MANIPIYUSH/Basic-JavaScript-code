   // count the unique no in given array

   function countUniqueArray(array){
    
       if(array.length > 0)
       {

                let i=0;
                for(let j=1;j<array.length;j++)
                {
                     if(array[i] !== array[j])
                     {
                        i++;
                        array[i] = array[j];
                     }
                }
                return i+1;

       }else{
        throw new error("array is empty");
       }
       
       


   }
     let array=[1,1,2,2,3,3,4,4,4,5,6,7,8,9];
     
  const result = countUniqueArray(array);
  console.log(result);