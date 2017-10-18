import test from 'ava'
const index = require('../index.js')

test('Index exports Uploader', t => {
  t.true(index.hasOwnProperty('Uploader'))
})
