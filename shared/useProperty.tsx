import { createContext, useContext, useState } from 'react'
import Arr from './Property'

const listProperty = createContext({})


export default function ListProvider({ children }:any) {
    const [ property, setProperty ] = useState<any>(Arr)
    const [ filter, setFilter ] = useState<any>(Arr)

    return (
        <listProperty.Provider value={{ property, setProperty, filter, setFilter }}>
            {children}
        </listProperty.Provider>
    )

}


export function useProperty() {
    const context:any = useContext(listProperty)
    const { property, setProperty, filter, setFilter } = context
    return {property, setProperty, filter, setFilter }
}
