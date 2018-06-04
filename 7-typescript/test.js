'use strict'

const { test } = require('ava')
const path = require('path')

const getImageDimensions = require('./dist/cjs').default

const fixturesPath = path.join(__dirname, '..', 'media')

test('flower.jpg', async (t) => {
  const input = path.join(fixturesPath, 'flower.jpg')
  const dimensions = await getImageDimensions(input)
  t.deepEqual(dimensions, { width: 922, height: 691 })
})
