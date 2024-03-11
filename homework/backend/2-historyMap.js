const historyMap = (array, callback) => {
  const result = []

  for (const element of array) {
    result.push({
      original: element,
      transformed: callback(element)
    })
  }

  return result
}

const numbers = [11, 23, 41, 9]

const newNumbersWithHistory = historyMap(numbers, (num) => num * 5)

console.log(newNumbersWithHistory)
