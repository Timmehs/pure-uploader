import test from 'ava'
const index = require('../index.js')

test('Index exports S3Uploader', t => {
  t.true(index.hasOwnProperty('S3Uploader'))
})
