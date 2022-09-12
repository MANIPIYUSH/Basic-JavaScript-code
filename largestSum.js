


function largestSumof(array,num){
      if(num > array){
        throw new error('num is greater than array');
      }else{
        let max =0;
        for(let i=0;i<array.length-num + 1;i++)
        {
            
            let sum =0;
            for(let j=0;j < num;j++)
            {
    
                sum = sum + array[i + j];
            }
    
            if (sum > max)
            {
                max = sum;
            }
    
        }
        
        return max;
      }
   
}

let result =largestSumof([1,2,3,4,3,5,4,6,7,8],4);
console.log(result);