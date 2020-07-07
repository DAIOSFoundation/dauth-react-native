//함수
export const cartList = (state = 1, action) => {
  switch (action.type) {
    case 'HANDLE_COLOR':
      return [...state, action.payload];
    case 'HANDLE_DISPLAY':
      return [...state, action.payload];
    default:
      return state;
  }
};
