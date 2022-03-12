import { createContext, useEffect, useReducer } from "react";

const INITIAL_STATE = {};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }: any) => {

    return (
        <AuthContext.Provider>
        { children }
        < /AuthContext.Provider>
    );
};