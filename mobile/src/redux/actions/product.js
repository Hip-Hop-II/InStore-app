export function getProducts () {
  return {
    type: 'RECEIVE_PRODUCTS',
    products: [
      {
        id: '1',
        name: 'Red Apple',
        imageUrl: require('../../../assets/img/products/apple.png'),
        kgPrice: 10.12,
        unityPrice: 1.9,
      },
      {
        id: '2',
        name: 'Tomato',
        imageUrl: require('../../../assets/img/products/tomato.png'),
        kgPrice: 9.51,
        unityPrice: 1.25,
      }
    ]
  }
}

export function addProduct (id, num) {
  return {
    type: 'ADD_PRODUCT',
    id,
    num
  }
}

export function removeProduct (id, num) {
  return {
    type: 'REMOVE_PRODUCT',
    id,
    num
  }
}
