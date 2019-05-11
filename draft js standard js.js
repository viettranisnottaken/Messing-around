function shuffle (array) {
  let currentIndex = array.length
  let temporaryValue
  let randomIndex

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    // And swap it with the current element.
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }
  return array
}
function scrambleString () {
  let inputString = document.getElementById('one').value
  console.log(inputString)
  inputString = inputString.toString()
  let scrambledInputString = inputString.split(/[\s,]+|'.'+|','+/)
  // console.log(scrambledInputString)
  let arr = shuffle(scrambledInputString)
  console.log(arr)
  let finalScrambledString = arr.join(' ')
  window.alert(finalScrambledString)
}
