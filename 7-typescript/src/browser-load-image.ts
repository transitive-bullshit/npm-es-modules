declare let Image: any;

interface Shape {
  width: number;
  height: number;
}

const loadImage = async (input: string | any): Promise<Shape> => {
  if (typeof input === 'string') {
    const img = new Image()
    img.crossOrigin = 'anonymous'

    await new Promise((resolve, reject) => {
      img.onload = resolve
      img.onerror = img.onabort = () => reject(new Error('image failed to load'))
      img.src = input
    })

    return loadImage(img)
  } else if (input instanceof Image) {
    return {
      width: input.naturalWidth,
      height: input.naturalHeight
    }
  } else {
    throw new Error('invalid input image')
  }
}

export default loadImage
