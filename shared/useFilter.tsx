import { useRouter } from "next/router";
import { useState } from "react";
import { useProperty } from "shared/useProperty";

const initial = {
    cod: '',
    business: 0,
    city: 0,
    district: 0,
    minValue: 0,
    maxValue: 0,
    bedroom: 0,
    bathroom: 0,
    vacancy: 0,
    furnished: false,
    pool: false,
    suite: false
}

export default function userFilter() {

    const { property, filter, setFilter } = useProperty()
    const router = useRouter()
    const [values, setValues] = useState(initial)
    const [order, setOrder] = useState({class: 0, sec: 0})


    const toUpdate = (name:any, value:any) => {
        setValues(Object.assign(values, { [name] : typeof(value)== 'boolean' || isNaN(value) ? value : parseInt(value) }))
        console.log(values, name,value)
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

    const orderUpdate = (content:any, name:any, value:any) => {
        setOrder(Object.assign(order, { [name] : parseInt(value) }))
        console.log(name, value, order)
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


    const handleForm = (e : React.FormEvent) => {
        e.preventDefault();
        
        // router.push('/listagem')
        const content = property

        const search = content.filter((a:any) => {
            if(a.city == 'Aguas Claras') {
                return a
            }
        })

         setFilter(search)

    }

    return { toUpdate, price, city, district, orderUpdate, convertPage, handleForm }

}