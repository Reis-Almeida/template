import { createContext, useContext, useState } from 'react'
import Property from './Property'

const listProperty = createContext({})


export default function ListProvider({ children }:any) {
    const [ property, setProperty ] = useState()

    const init = async () => {
        const P = await Property()
    
        setProperty(P)
    }
    
      init()

    return (
        <listProperty.Provider value={{ property, setProperty }}>
            {children}
        </listProperty.Provider>
    )

}


export function useProperty() {
    const context:any = useContext(listProperty)
    const { property, setProperty } = context
    return { property, setProperty }
}
