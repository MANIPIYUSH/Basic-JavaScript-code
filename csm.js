// finding the pair of of an array element whose sum is zero;


// Bootforce Method
 function getSumOfArray(array){
    for(let number of array)
    {
       // console.log("outer loop");
        for(let j=1; j<array.length; j++)
        {
            //console.log("inner loop");
                if(number + array[j] == 0)
                {
                    return [number,array[j]];   //this code will take o(n2) Time complexity.
                }
        }      

    }
}

//Optimised Method

function getSumOfArray(arr){
           let i =0;
           let j= arr.length-1;
          while(i < j)
          {
            sum = arr[i] + arr[j];
            if(sum == 0)
            {
                return [arr[i],arr[j]];

            }else if(sum < 0)
            {
                i++;
            }else{
                j--;
            }
          }
          
}









let result = getSumOfArray([-5,-4,-3,-2,0,2,4,6,8]);
console.log(result);