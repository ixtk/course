const historyMap = () => {
  // TODO
}

const numbers = [1, 2, 3, 4]

// const newNumbersCustom = historyMap(numbers, (num) => {
//   return num * 2
// })

// console.log(newNumbersCustom)

/*
უნდა დაიპრინტოს:

[
  { original: 1, transformed: 2 },
  { original: 2, transformed: 4 },
  { original: 3, transformed: 6 },
  { original: 4, transformed: 8 }
]
*/

const users = [
  "Chelsey Dietrich",
  "Kurtis Weissnat",
  "Glenna Reichert",
  "Ervin Howell"
]

// const modifiedUsers = historyMap(users, (user) => {
//   const [name, surname] = user.toUpperCase().split(" ")
//   return `${name[0]}. ${surname[0]}`
// })

// console.log(modifiedUsers)

/*
უნდა დაიპრინტოს:

[
  { original: 'Chelsey Dietrich', transformed: 'C. I' },
  { original: 'Kurtis Weissnat', transformed: 'K. E' },
  { original: 'Glenna Reichert', transformed: 'G. E' },
  { original: 'Ervin Howell', transformed: 'E. O' }
]
*/
