'use strict'

const test = require('tape-catch')
const build = require('./')
let skeleton

test('simple test', (t) => {
  skeleton = build()
  t.equal(42, skeleton.answer())
  t.end()
})
