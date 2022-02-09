import Head from 'next/head'
import { useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useProperty } from '../../context/useProperty';
import useJson from '../../hook/useJson';
// import Footer from '../Footer';
import Header from '../Header';
import { StyledMain } from './style';


export default function Layout({children}:any) {
    const { property, setProperty, filter, setFilter } = useProperty()

    const init = async (json:any) => {
        const P = await json()
    
        setProperty(P)
        setFilter(P)
    }

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
                <Footer/>
            </>
        )
    }

    function renderLoading() {
        return (
            <StyledMain>
                <LazyLoadImage src="/loading.gif" alt="gif loading" width="200" height="200" />
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