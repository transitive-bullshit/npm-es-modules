import getPixels from 'get-pixels'

interface Shape {
  width: number;
  height: number;
}

interface Image {
  shape: Shape;
}

export default async (input: string) => {
  const image = await new Promise<Image>((resolve, reject) => {
    getPixels(input, (err, image) => {
      if (err) reject(err)
      else resolve(image)
    })
  })

  return image
}
