

const defaultState={

    OrderPosition:[]
}



export default function orderReducer(state=defaultState,action) {

    switch(action.type){

case 'ADD_ORDER':

    return {...state, OrderPosition:[...state.OrderPosition , action.payload]   }

    case 'DELETE_ORDER':
        return {...state, OrderPosition: state.OrderPosition.filter((position) => position.id !== action.payload) }
        default:
            return state
    }



}


