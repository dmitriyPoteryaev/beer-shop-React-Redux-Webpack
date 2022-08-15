

const defaultState ={

    dataBeer :[],
    error:'',
    isLoading:true


}

export const GET_DATA_BEER = 'GET_DATA_BEER'
export const GET_ERROR_BEER = 'GET_ERROR_BEER'
export const GET_isLoading_BEER = 'GET_isLoading_BEER'


export default function BeerReducer(state=defaultState,action){

    switch(action.type){


        case GET_DATA_BEER:
   
    return    {...state , dataBeer : [...state.dataBeer,  ...action.payload]  }
    case GET_ERROR_BEER:
   
        return    {...state , error : `${action.payload}`  }
        case GET_isLoading_BEER:
   
            return    {...state , isLoading : action.payload  }

    default:
        return state
    }
    }
    






export const setDataBeer = (payload) =>({type:GET_DATA_BEER, payload})
export const setErrorBeer = (payload) =>({type:GET_ERROR_BEER, payload})
export const setisLoadingBeer = (payload) =>({type:GET_isLoading_BEER, payload})