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

    const { property } = useProperty()
    const [values, setValues] = useState(initial)
    const [order, setOrder] = useState({class: 0, sec: 0})
    const [content, setContent] = useState(property)


    const toUpdate = (name:any, value:any) => {
        setValues({ ...values, [name] : value })
        console.log(values)
    } 

    const price = (value:number) => {

        const setPrice:any = new Set()

        property.map((e:any) => {
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

        property.map((e:any) => {
            setCity.add(e.city)
        })
        
        return [...setCity]

    }

    const district = () => {
        const setDistrict:any = new Set()

        property.map((e:any) => {
            if(e.city == values.city) {
                setDistrict.add(e.district)
            }
        })
        
        return [...setDistrict]

    }

    const orderUpdate = (name:any, value:any) => {
        setOrder({ ...order, [name] : parseInt(value) })
        
        switch(order.class) {
            case 0:
                content.sort((a:any, b:any) => {
                    if(order.sec == 0) {
                        return a.name - b.name
                    }else {
                        return b.name - a.name
                    }
                })


            case 1:
                content.sort((a:any, b:any) => {
                    if(order.sec == 0) {
                        return a.price - b.price
                    }else {
                        return b.price - a.price
                    }
                })

            case 2:
                content.sort((a:any, b:any) => {
                    if(order.sec == 0) {
                        return a.c_date - b.c_date
                    }else {
                        return b.c_date - a.c_date
                    }
                })

        }

        setContent(content)
    }

    const convertPage = ( limit:number) => {
        
        const convert:any = []
        
        for (let i = 0; i < content.length; i+= limit) {
            
            convert.push(content.slice(i, i + limit))
            
        }
        
        return convert
    }


    const handleForm = (e : React.FormEvent) => {
        e.preventDefault();

        const filter = content.filter((a:any) => {
            if(a.city == 'Aguas Claras') {
                return a
            }
        })

        setContent(filter)

        console.log(filter)
    }

    return { toUpdate, price, city, district, orderUpdate, convertPage, handleForm }

}