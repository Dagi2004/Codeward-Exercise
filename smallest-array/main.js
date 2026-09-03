function findSmallestInt(arr) {
  

      let smallest=arr[0];
      for(let i=0;i<arr.length;i++){
        if(smallest>=arr[i]){
          smallest=arr[i];
        }
        
      }
   return smallest
}
findSmallestInt([1,45,3,5,10])