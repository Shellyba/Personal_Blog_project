import {createContext, useState} from "react";

/*
This global component allows access to the user information and relevant functions (signIn, signOut)
from each blog page, using the functions "createContext" and "UserProvider".
 */
export const UserContext = createContext(null);

export function UserProvider({children}) {
    // In order to render the UI with the updated state of the user, I'm using the useState hook function.
    const [user, setUser] = useState(null);

    const signIn = ({userName, password}) => {
        setUser({userName: "Shelly", password: 1234});
    }

    const signOut = () => {
        setUser(null);
    }

    // The signIn/signOut functions and user information will be accessible to the
    // blog pages (UserProvider children)
    const userValues = {user, signIn, signOut};

    return (
        <UserContext.Provider value={userValues}>
            {children}
        </UserContext.Provider>

    );
}