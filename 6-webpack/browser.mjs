// browser es module entrypoint compiled to dist/browser.js

import ow from 'ow'
import loadImage from './lib/browser-load-image'

/**
 * Computes the dimensions of an input image.
 *
 * @name getImageDimensions
 * @function
 *
 * @param {string|Image} input - URL or Image instance to process
 * @return {Promise}
 */
export default async (input) => {
  ow(input, ow.any(
    ow.string.nonEmpty.label('input'),
    ow.object.instanceOf(global.Image).label('input')
  ))

  const image = await loadImage(input)

  return {
    width: image.width,
    height: image.height
  }
}
