'use strict'

// require deps

// SYNC init (like read conf file)

function skeleton () {

  var internal

  return {
    answer: answer
  }

  function privateStuff () {
    var stuff
    return stuff
  }

  function answer () {
    internal
    privateStuff()
    return 42
  }
}

module.exports = skeleton
