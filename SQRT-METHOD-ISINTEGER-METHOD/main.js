function findNextSquare(sq) {
  let x=Math.sqrt(sq)
   if((x*x===sq) && (Number.isInteger(x))){
     let nextPerfectSquare = (x+1)**2 
  // Return the next square if sq is a perfect square, -1 otherwise
      return nextPerfectSquare
}
 
else{
     return -1
}
}
findNextSquare(sq)
// check if the number is perfect square 
// if its return the next perfect square
// if not return -1

// perfect square = Math.sqrt(x)
// 1, 4, 9, 16, 25, 36, 49, 64, 81, and 100
