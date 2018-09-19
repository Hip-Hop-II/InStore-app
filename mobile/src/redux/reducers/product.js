export const productInfo = (state = {products: [], addProducts: []}, action) => {
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
          addProducts: state.addProducts.concat({...newProduct, num: action.num})
        }
      } else {
        debugger
        return {
          ...state,
          addProducts: state.addProducts.map(produ => {
            if (produ.id === action.id) {
              return {...produ, num: action.num}
            }
            return produ
          })
        }
      }
      console.log(arr)
      return arr
      case 'REMOVE_PRODUCT':
        const exisIndex = state.addProducts.findIndex(prod => prod.id === action.id)
        if (action.num === 0) {
          return {
            ...state,
            addProducts: [...state.addProducts.slice(0, exisIndex), ...state.addProducts.slice(exisIndex + 1)]
          }
        } else {
          return {
            ...state,
            addProducts: state.addProducts.map(produ => {
              if (produ.id === action.id) {
                return {...produ, num: action.num}
              }
              return produ
            })
          }
        }
      default:
        return state
  }
}
