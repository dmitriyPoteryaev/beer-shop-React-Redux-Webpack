
const defaultState={

    visModal:false
}



export default function visibModalReducer(state=defaultState,action) {

    switch(action.type){

case 'SHOW_MOD':

    return {...state, visModal:action.payload  }

    case 'HIDE_MOD':
        return {...state, visModal: action.payload }

        default:
            return state
    }



}