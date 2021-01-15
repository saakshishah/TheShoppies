//equivalent to creating global variables

import React, { createContext, useContext, useReducer } from "react";

export const StateCon = createContext();

export const StateProv = ({reducer, initialState, children}) => (
    <StateCon.Provider value= {useReducer(reducer, initialState)}>
        {children}
    </StateCon.Provider>
);

export const useStateVal = () => useContext(StateCon);