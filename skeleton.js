'use strict'

// put dependencies here
// SYNC init (like read conf file)

function skeleton () {
  var internal = 42
  const privateStuff = () => {
    var stuff
    return stuff
  }
  const answer = () => {
    privateStuff()
    return internal
  }
  return {
    answer: answer
  }
}

module.exports = skeleton
