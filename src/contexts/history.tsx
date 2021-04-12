import React, { createContext, ReactNode, useContext, useState } from "react";

import {saveHistory, getHistory} from '../services/database'

export interface UserProps{
    id: number;
    name?: string;
    login?: string;
    public_repos?: number;
    followers?: number;
    avatar_url?: string;
    following?: number;
}

interface HistoryProviderProps{
    children: ReactNode
}

interface HistoryContextData{
    setHistory:(name: string) => void;
    user: UserProps[]
    handleHistory: () => void
}

const HistoryContext = createContext<HistoryContextData>({} as HistoryContextData)

export const HistoryProvider: React.FC<HistoryProviderProps> = ({children}: HistoryProviderProps) =>{
    const [user, setUser] = useState([{} as UserProps])
    
    async function setHistory(user: UserProps){
        await saveHistory(user)
        
        await handleHistory()
    }

    async function handleHistory(){
        const list = await getHistory()
        
        setUser(list.sort().reverse())
    }

    return(
        <HistoryContext.Provider value={{setHistory, user, handleHistory}}>
            {children}
        </HistoryContext.Provider>
    )
}

export function useHistoric(){
    const context = useContext(HistoryContext)
    return context
}