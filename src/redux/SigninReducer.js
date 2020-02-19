const initialState = {
    username: ['Shiv','Raj'],
    password: [123,147],
    isActive: false,
    current:''
}
const SigninReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SignIn':
            return {
                ...state,
                current:action.Current,
                isActive: true
            }
            case 'SignOut' :
            return {
                ...state,
                isActive: false
            }
            case 'Register':
                return{
                    ...state,
                username:[...state.username,action.Username],
                password:[...state.password,action.Password],
                isActive:false
            }
        default:
            return state
    }
}
export default SigninReducer;