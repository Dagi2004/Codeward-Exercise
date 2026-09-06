function multiples(a, b, limit) {
      let newArray=[]
  for(let i=1;i<=limit;i++){

    if(i%a==0 && i%b==0){
      newArray.push(i)
  }
   
}
   return newArray
  }
