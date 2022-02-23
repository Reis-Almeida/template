import Head from 'next/head'
import { useEffect, useState } from 'react';
import { MyImage } from '../Image';
import { useProperty } from '../../context/useProperty';
import useJson from '../../hook/useJson';
import website from '../../shared/json/website';
import Cookies from '../Cookies';
import Footer from '../Footer';
import Header from '../Header';
import { StyledMain } from './style';


export default function Layout({children}:any) {
    const { property, setProperty, filter, setFilter } = useProperty()
    const [cookies, setCookies] = useState<boolean>(false)

    const init = async (json:any) => {
        const P = await json()
    
        setProperty(P)
        setFilter(P)
    }

    useEffect(()=> {
        if(!localStorage.getItem("warning-cookies")) {
            setCookies(true)
        }
    }, [cookies])
    
    useEffect(()=> {
        if(property === null && filter === null) {
            init(useJson)
        }
    }, [property, filter])

    function renderContent() {
        return (
            <>
                <Header />
                    {children}
                {cookies && <Cookies disable={setCookies} />}
                <Footer/>
            </>
        )
    }

    function renderLoading() {
        return (
            <StyledMain>
                <MyImage src={website.loading} alt="gif loading" width="200" height="200" />
            </StyledMain>
        )
    }


    if(property === null && filter === null) {
        init(useJson)
        return renderLoading()
    }else {
        // console.log(property, filter)
        return renderContent()
    }
}