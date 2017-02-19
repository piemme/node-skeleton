'use strict'

var test = require('tape-catch')
var build = require('./')
var skeleton

test('simple test', function (t) {
    var alfa = 10
    skeleton = build()
    t.equal(alfa, skeleton.something(alfa))
    t.end()
})

