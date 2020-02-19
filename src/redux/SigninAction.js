export const SigninAction=(CurrentUsername='')=>{
    return{
       type:'SignIn',
       Current:CurrentUsername
    }
}
export const SignoutAction=()=>{
    return{
        type:'SignOut'
     }
}
export const RigisterAction=(User,Password)=>{
    return{
        type:'Register',
        Username:User,
        Password:Password 
       
     }
}