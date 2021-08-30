import {createContext } from 'react'

const initialState = {
    first: "",
    last: ""
};

export type ContextExampleType = typeof initialState;//export the context's type, so that its state can be stored elsewhere

const context = createContext<ContextExampleType>(initialState);

export default context