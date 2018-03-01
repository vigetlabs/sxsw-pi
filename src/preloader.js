import forEach from 'lodash/forEach'

const preload = imageCollection => {
  forEach(imageCollection, src => {
    let image = new Image()

    image.src = src
  })
}

export default preload
