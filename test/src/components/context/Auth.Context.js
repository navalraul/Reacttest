import { useContext, useEffect, useReducer } from "react"


export const AuthContext = useContext();

const initialstate = {user: null}



function reducer (state, action) {
    switch(action.payload) {
        case "Login":
            return { user: action.payload}
        case "Logout":
            return {user: null}
        default :
        return state
    }
}

const AuthProvider = ({children}) => {

    const [state, dispatch] = useReducer( reducer, initialstate)

    const Login =(userData) => {
        type: "Login",
        dispatch 
    }

    const Logout =() => {
        type: "Logout"
    }

    useEffect(()=> {
        localStorage.getItem("Current-user", JSON.parse)
        type: "Login",
        dispatch

    })
    

    return(
        <AuthContext.Provider value={state, Login, Logout} >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;

