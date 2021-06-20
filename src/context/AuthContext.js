import { createContext, useReducer, useEffect } from "react";
import AuthReducer from "./AuthReducer";
const INITIAL_STATE = {
    // user: {
    //   // id: "60bf7a234e5fd0849c910b16",
    //   // username: "musmaro",
    //   // email: "musamusk22@gmail.com",
    //   // profilePicture: "7.jpg",
    //   // coverPicture: "tesla.jpg",
    //   // followers: [],
    //   // followings: [],
    // },
    
    user: null, //JSON.parse(localStorage.getItem("user")) || null,
    isFetching: false,
    error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
    
    // useEffect(()=>{
    //   localStorage.setItem("user", JSON.stringify(state.user))
    // },[state.user])

    return (
        <AuthContext.Provider 
          value={{
            user: state.user,
            isFetching: state.isFetching,
            error:state.error,
            dispatch,
          }}
        >
            {children}
        </AuthContext.Provider>
    );
}