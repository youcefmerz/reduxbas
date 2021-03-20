 const login = (userObj) => {
    return{
        type:"LOGIN",
        payload: userObj
    }
}
 const logout = () => {
    return{
        type:"LOGOUT"    
    }
}

export default {
    login,
    logout
}

