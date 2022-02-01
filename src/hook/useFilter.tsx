import { useRouter } from "next/router";
import { useState } from "react";
import { useProperty } from "../context/useProperty";

interface InitialProps {
    cod: string
    business: string
    city: number
    district: number
    minValue: number
    maxValue: number
    bedroom: number
    bath: number
    vacancy: number
    furnished: boolean
    pool: boolean
    suite: boolean
}

type OrderProps = {
    class: number
    sec: number
}

const initial: any = {
    cod: '',
    business: 0,
    city: 0,
    district: 0,
    minValue: 0,
    maxValue: 0,
    bedroom: 0,
    bath: 0,
    vacancy: 0,
    furnished: false,
    pool: false,
    suite: false
}


export default function userFilter() {
    const router = useRouter()
    const { property, setFilter } = useProperty()
    const [values, setValues] = useState<any>({...initial})
    const [order, setOrder] = useState<OrderProps>({class: 0, sec: 0})


    const toUpdate = (name:string, value:any) => {
        const vl = typeof(value) == 'boolean' || isNaN(value) || value == '' ? value : parseInt(value)
        setValues({...Object.assign(values, { [name] : vl })})
        // console.log(values, name,value)
    } 

    const price = (value:number) => {
        const setPrice:any = new Set()

        property?.map((e:any) => {
            setPrice.add(e.price)
        })

        const price = [...setPrice]

        switch(value) {
            case 0 :
                return price.sort()[0]
                
            case 1 :
                return price.sort((a:any, b:any) => b - a)[0]

        }
    }

    const city = () => {
        const setCity:any = new Set()

        property?.map((e:any) => {
            setCity.add(e.city)
        })
        
        return [...setCity]

    }

    const district = () => {
        const setDistrict:any = new Set()

        property?.map((e:any) => {
            if(e.city == values.city) {
                setDistrict.add(e.district)
            }
        })
        
        return [...setDistrict]

    }

    const orderUpdate = (content:any, name:string, value:any) => {
        setOrder(Object.assign(order, { [name] : parseInt(value) }))

        switch(order.class) {
            case 0:
                return content.sort((a:any, b:any) => {
                       if(order.sec == 0) {
                            return a.name.toLowerCase().localeCompare(b.name.toLowerCase())
                       }else {
                            return b.name.toLowerCase().localeCompare(a.name.toLowerCase())
                       }
                })


            case 1:
                return content.sort((a:any, b:any) => {
                       if(order.sec == 0) {
                           return a.price - b.price
                        }else {
                           return b.price - a.price
                        }
                })

            case 2:
                return content.sort((a:any, b:any) => {
                       if(order.sec == 0) {
                           return a.c_date - b.c_date
                       }else {
                           return b.c_date - a.c_date
                       }
                })
            }
    }

    const convertPage = ( limit:number, content: object[]) => {
        const convert:any = []
        
        for (let i = 0; i < content?.length; i+= limit) {
            
            convert.push(content.slice(i, i + limit))
            
        }
        
        return convert
    }

    const pagination = (pages: number, itens: number, current:number) => {
        if(pages > itens) {
          const left = (itens -1) / 2
          return current >= pages - left ? pages - (itens - 1) : Math.max(current -  left, 1)
        } else {
          return 1
        }
    }


    const handleForm = (e : React.FormEvent) => {
        e.preventDefault();
        
        if(router.pathname == "/") {
            router.push('/listagem')
        }

        let search = property

       if(!(values.maxValue == initial.maxValue) || !(values.minValue == initial.minValue)) {
            search = search.filter((a:any) => {
                if((a.price <= values.maxValue) && (a.price >= values.minValue)) {
                    return a
                }
            })
       }

        for(let x in initial) {

            if(!(initial[x] == values[x]) && !(x == 'minValue' || x == 'maxValue')) {
                search = search.filter((a:any) => {

                    if(a[x] == values[x]) {
                        return a
                    }
                })
            }
        }

        
        setFilter(orderUpdate(search, 'class', order.class))

    }

    return { values, toUpdate, price, city, district, orderUpdate, convertPage, pagination, handleForm }

}