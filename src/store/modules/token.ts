const ADD_COUNT = 'add_count'
interface State {
    count: number
    [index: string]: any
}

const defaultState:State = {
    token: undefined,
    count: 10
}
const reducer = (state = defaultState, action:any):any => {
    switch(action.type) {
        case ADD_COUNT:
            return {
                count: state.count + 1
            }
        default:
            return state
    }
}

export const addCount = () => {
    console.log('??????????????');
    
    return (dispatch:any) =>{
        dispatch({
            type: ADD_COUNT
        })
    }
}
export default reducer
