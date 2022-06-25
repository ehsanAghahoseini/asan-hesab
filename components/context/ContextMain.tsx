import React, { useEffect, useState } from 'react'

export const ContextState = React.createContext<any>({})


export default function ContextMain(props: any) {

    const [headTitle, setHeadTitle] = useState<any>('')

    return (
        <ContextState.Provider value={{
            headTitle ,
            setHeadTitle ,
        }}>
            {props.children}
        </ContextState.Provider>
    )
}