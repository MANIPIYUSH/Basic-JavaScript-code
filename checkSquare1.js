


 function checkSquare(array1,array2){

    let map1 ={};
    let map2 ={};

    for(let item of array1)
    {
        map1[item] = (map1[item] || 0) + 1;
    }
   
    for(let item1 of array2)
    {
        map2[item1] = (map2[item1] || 0) + 1;
    }

    for(let key in map1)
    {
     if(!map2[key*key]){
        return false;
     }

     if(map1[key] !== map2[key * key]){
              return false;
     }

    }
    return true;

 }
 const result =checkSquare([1,2,3,4],[1,4,9,26]);
 console.log(result);
 