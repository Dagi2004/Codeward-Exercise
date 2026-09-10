function highAndLow(numbers){
  let numarray = numbers.split(" ")
  for(let i=0;i<numarray.length;i++){
    let min = Number(Math.min(...numarray))
    let max = Number(Math.max(...numarray))
   return `${max} ${min}` 
  }
}

highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")