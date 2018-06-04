const loadImage = async (input) => {
  if (typeof input === 'string') {
    const img = new global.Image()
    img.crossOrigin = 'anonymous'

    await new Promise((resolve, reject) => {
      img.onload = resolve
      img.onerror = img.onabort = () => reject(new Error('image failed to load'))
      img.src = input
    })

    return loadImage(img)
  } else if (input instanceof global.Image) {
    return {
      width: input.naturalWidth,
      height: input.naturalHeight
    }
  } else {
    throw new Error('invalid input image')
  }
}

export default loadImage
