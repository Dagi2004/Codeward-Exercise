// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F


// My approach is first use plit method to that i can get substrings into array 

// once they are array use the index of what we need like the first and the letter next to space

// join those using . 

// must be in capital letter

function abbrevName(name){

let convertedName = name.split(" ")
let firsLetter = convertedName[0].toUpperCase().charAt(0)
let secondLetter = convertedName[1].toUpperCase().charAt(0)

return firsLetter +"."+secondLetter
}

abbrevName("Dagmawi Tesfay")
