import { ReactNode } from "react"

interface InputProps {
    name: string
    label: string
    value?: any
    min?: string
    max?: string
    className?: string
    required?: boolean
    placeholder?: string
    defaultValue?: string
    type?: 'text' | 'email' | 'number' | 'checkbox'
    onChange?: (novoValor: any) => void
}

interface SelectProps {
    name: string
    label: string
    children: ReactNode
    className?: string
    onChange: (novoValor: any) => void
}

export function Input(props:InputProps) {
    return(
        <span className={props.className}>
            <label>{props.label}</label>
            <input 
                name={props.name}
                type={props.type ?? 'text'}
                value={props.value}
                min={props.min}
                max={props.max}
                placeholder={props.placeholder}
                onChange={props.onChange}
                required={props.required}
                defaultValue={props.defaultValue}
            />
        </span>
    )
}

export function Select(props: SelectProps) {
    return(
        <span className={props.className}>
            <label>{props.label}</label>
            <select name={props.name}  onChange={props.onChange} >
                {props.children}
            </select>
        </span>
    )
}