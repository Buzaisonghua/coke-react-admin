const ADD_COUNT = 'add_count'
interface StateProps {
    token: string | undefined
}

const defaultState:StateProps = {
    token: undefined,
}
const reducer = (state = defaultState, action:any):any => {
    switch(action.type) {
        case ADD_COUNT:
            return {
                state
            }
        default:
            return state
    }
}

export const addCount = () => {
    return (dispatch:any) =>{
        dispatch({
            type: ADD_COUNT
        })
    }
}
export default reducer
