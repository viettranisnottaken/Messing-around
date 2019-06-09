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

// var r = function (num1, num2) { return num1 + num2 }
// window.alert(r(1, 3))

function confirmButtDetonation () {
  // You dont have to nest the if like this, another way to to do this is to leave the action section blank
  // then move to the next if
  var confirmMessage = 'Do you really want to do this?'
  var confirmMessage2 = 'You are fully aware that they can no longer hold feces in their bowels, correct?'
  var confirmMessage3 = 'This can also be fatal for most, if not all human beings. Are you totally positive?'
  var confirmMessage4 = 'Let shit fly up your friend\'s mouth I guess'
  if (window.confirm(confirmMessage)) {
    // window.confirm(confirmMessage2)
    // window.confirm() executes regardless of where it is, so it should not be repeated
    if (window.confirm(confirmMessage2)) {
      if (window.confirm(confirmMessage3)) {
        if (window.confirm(confirmMessage4)) {
          window.confirm('This is what happens when Thanos fails')
        } else {
          window.alert('Okay you can mess with the rest of the page')
        }
      } else {
        window.alert('Okay you can mess with the rest of the page')
      }
    } else {
      window.alert('Okay you can mess with the rest of the page')
    }
  } else {
    window.alert('Okay you can mess with the rest of the page')
  }
}
