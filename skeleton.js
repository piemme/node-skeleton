'use strict'

// require deps

// SYNC init (like read conf file)

function skeleton () {
  var internal = 42

  return {
    answer: answer
  }

  function privateStuff () {
    var stuff
    return stuff
  }

  function answer () {
    privateStuff()
    return internal
  }
}

module.exports = skeleton
