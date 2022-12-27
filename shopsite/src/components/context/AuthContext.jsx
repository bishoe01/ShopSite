import { createContext, useContext,useState,useEffect } from "react";
import { login, logout, onUserStateChanged } from "../../api/firebase";

const AuthContext = createContext();
export function AuthContextProvider({ children }) {
    const [user, setUser] = useState();
    useEffect(() => {
        onUserStateChanged((user) => {
            console.log(user);
            setUser(user);
        })

    }, []);
    return <AuthContext.Provider value={{user,login:login,logout:logout}}>
        {children}
    </AuthContext.Provider>
}

export function useAuthContext() {
    return useContext(AuthContext);
}
