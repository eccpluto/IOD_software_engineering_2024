import React from "react";
import { useContext } from "react";
import { useState } from "react";

// create a context object
const UserContext = React.createContext();

// context provider
export const UserProvider = (props) => {
    const [currentUser, setCurrentUser] = useState({});

    // stub that would handle user updating logic
    const handleUpdateUser = (user) => {
        setCurrentUser(user)
    }

    return (
        // return the provider component, alongside data we want context consumers to access
        <UserContext.Provider value={{ currentUser, handleUpdateUser }}>
            {/* childeren will be able to consume context */}
            {props.children}
        </UserContext.Provider>
    )
}

// hook for consuming context
export const useUserContext = () => {
    // need to pass a context object to the useContext hook
    return useContext(UserContext)
}