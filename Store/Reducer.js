import ACTIONS from "./Action";
const Reducers = (state, action) => {
    switch (action.type) {
        case ACTIONS.AUTH:
            return {
                ...state,
                auth: action.payload
            }
        case ACTIONS.NOTIFY:
            return {
                ...state,
                notify: action.payload
            }
        case ACTIONS.ADD_CART:
            return {
                ...state,
                cart: action.payload
            }
        default:
            return state
    }
}
export default Reducers;