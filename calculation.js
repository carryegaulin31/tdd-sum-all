// 1.) what are our parameters?
// an array of numbers

//2.) what are we returning?
// a single number

const sumAll = numsArray => {
  var total = 0
  for (let i = 0; i < numsArray.length; i++) {
    total += numsArray[i]
  }
  return total
}

module.exports = sumAll