import getPixels from 'get-pixels'

export default async (input) => {
  const image = await new Promise((resolve, reject) => {
    getPixels(input, (err, image) => {
      if (err) reject(err)
      else resolve(image)
    })
  })

  return image
}
