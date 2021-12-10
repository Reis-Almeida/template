import { createContext, useContext, useState } from 'react'
import Property from './Property'

const listProperty = createContext({})


export default function ListProvider({ children }:any) {
    const [ property, setProperty ] = useState()
    const [ filter, setFilter ] = useState()

    const init = async () => {
        const P = await Property()
    
        setProperty(P)
        setFilter(P)
    }
    
      init()

    return (
        <listProperty.Provider value={{ property, setProperty, filter, setFilter }}>
            {children}
        </listProperty.Provider>
    )

}


export function useProperty() {
    const context:any = useContext(listProperty)
    const { property, setProperty, filter, setFilter } = context
    return { property, setProperty, filter, setFilter }
}
