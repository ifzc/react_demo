const initState = {
    loading:false,
    token:false,
    open:false,
    children:false
}

export default (state = initState, action) => {
    switch (action.type) {
        case 'loading':
          return { ...state, loading: action.value };
          case 'token':
          return { ...state, token: action.value };
          case 'open':
          return { ...state, open: action.value };
          case 'children':
          return { ...state, children: action.value };
        default:
          return state
      }
}