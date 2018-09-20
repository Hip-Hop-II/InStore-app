
const calcTotalPrice = (arr = []) => {
  debugger
  const total = arr.map(el => el.num * el.unityPrice).reduce((a, b) => a + b, 0)
  return total
}

export const productInfo = (state = {products: [], addProducts: [], totalPrice: 0}, action) => {
  switch (action.type) {
    case 'RECEIVE_PRODUCTS':
      return {
        ...state,
        products: action.products
      }
    case 'ADD_PRODUCT':
      let arr = []
      const existIndex = state.addProducts.findIndex(prod => prod.id === action.id)
      if (existIndex === -1) {
        const newProduct = state.products.find(item => item.id === action.id)
        return {
          ...state,
          addProducts: state.addProducts.concat({...newProduct, num: action.num}),
          totalPrice: calcTotalPrice(state.addProducts.concat({ ...newProduct, num: action.num }))
        }
      } else {
        news = state.addProducts.map(produ => {
          if (produ.id === action.id) {
            return { ...produ, num: action.num }
          }
          return produ
        })
        return {
          ...state,
          addProducts: news,
          totalPrice: calcTotalPrice(news)
        }
      }
      return arr
      case 'REMOVE_PRODUCT':
        const exisIndex = state.addProducts.findIndex(prod => prod.id === action.id)
        if (action.num === 0) {
          return {
            ...state,
            addProducts: [...state.addProducts.slice(0, exisIndex), ...state.addProducts.slice(exisIndex + 1)],
            totalPrice: calcTotalPrice([...state.addProducts.slice(0, exisIndex), ...state.addProducts.slice(exisIndex + 1)])
          }
        } else {
          newP = state.addProducts.map(produ => {
            if (produ.id === action.id) {
              return { ...produ, num: action.num }
            }
            return produ
          })
          return {
            ...state,
            addProducts: newP,
            totalPrice: calcTotalPrice(newP)
          }
        }
      default:
        return state
  }
}
