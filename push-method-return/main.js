function solve(s,g){
  
  let twoNumbers=[] // to store the two numbers


for(let i=1;i<=s;i++){
if((g+i==s) && (s%g==0)){
  twoNumbers.push(g,i)
  console.log(twoNumbers)
  return twoNumbers
} 

}
  return -1
  }

solve(12,5)