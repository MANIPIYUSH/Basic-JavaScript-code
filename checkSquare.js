


function squareCheck(array1,array2){


    for(let i=0;i < array1.length;i++)
    {         let isSquare = false;
        for(let j=0; j < array2.length; j++)
        {    
               if(array1[i] * array1[i] === array2[j])
               {
                        isSquare = true;
               }
               if( j === array2.length-1)
               {
       
                   if(!isSquare)
                   {
                       return false;
                   }
               }

        }
       
    }
         return true;
}

const result =  squareCheck([1,2,3,4],[1,4,9,36]);
console.log(result);