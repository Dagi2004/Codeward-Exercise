var number = function(busStops){
  let firstNumber = []
  let secondNumber = []
  const initalValue = 0
  for(let i=0;i<busStops.length;i++){
    firstNumber.push(busStops[i][0])
    secondNumber.push(busStops[i][1])
    }
  const sumOfPeopleInTheBus=firstNumber.reduce((accumulator,currentValue)=>accumulator+currentValue,initalValue)
   const sumOfPeopleGetoffTheBus=secondNumber.reduce((accumulator,currentValue)=>accumulator+currentValue,initalValue)
   const numberOfPeopleStilthe = sumOfPeopleInTheBus - sumOfPeopleGetoffTheBus
    return numberOfPeopleStilthe
}

number([[10,0],[3,5],[5,8]])