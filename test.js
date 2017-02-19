'use strict'

var test = require('tape-catch')
var build = require('./')
var skeleton

test('simple test', function (t) {
  skeleton = build()
  t.equal(42, skeleton.answer())
  t.end()
})

