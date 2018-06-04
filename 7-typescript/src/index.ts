import ow from 'ow'
import loadImage from './load-image'

export interface Dimensions {
  width: number;
  height: number;
}

/**
 * Computes the dimensions of an input image.
 *
 * @name getImageDimensions
 * @function
 *
 * @param input - Input image to process (can be a local path, http url, or data url)
 */
export default async (input: string): Promise<Dimensions> => {
  ow(input, ow.string.nonEmpty.label('input'))

  const image = await loadImage(input)

  return {
    width: image.shape[0],
    height: image.shape[1]
  }
}
