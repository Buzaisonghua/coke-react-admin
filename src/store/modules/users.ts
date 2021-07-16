interface State {
    userUuid: undefined | string
} 

const initiaState: State = {
    userUuid: 'wangbo'
}

const users = (state = initiaState) => {
    return state
}

// export const increment = () => {
//     return (dispatch：any) => {
      
//     }
// }
export default users