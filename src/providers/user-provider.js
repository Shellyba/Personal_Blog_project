import {createContext, useState} from "react";

export const UserContext = createContext(null);

export function UserProvider({children}){
    const [user, setUser] = useState(null)

    const signIn = ({ userName, password }) =>{
        setUser({userName:"Shelly", password: 1234})
    }

    const signOut = () => {
        setUser(null);
    }

    const userValues = {user, signIn, signOut}

    return(
        <UserContext.Provider value={userValues}>
            {children}
        </UserContext.Provider>

    )
}