import { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import website from "../../shared/json/website";
import { StyledSuspense } from "./style";
const base = process.env.NEXT_PUBLIC_BASE_PATH

export const MyImage : React.FC<any> = ({ src, className, ...rest }) => {
    return <LazyLoadImage src={base + src} className={className} alt="imagem indisponivel" {...rest} />
}

export const SuspenseImage : React.FC<any> = ({ src, className, ...rest }) => {

    const [imageLoaded, setImageLoaded] = useState(false);
    const [imgSrc, setImgSrc] = useState(base + website.noImg);

    useEffect(() => {
        const imageToLoad = new Image();

        imageToLoad.onload = () => {
            setImgSrc(src);
            setImageLoaded(true);
        }

        imageToLoad.onerror = () => {
            src = base + website.noImg;
            imageToLoad.src = src;
        }

        imageToLoad.src = src;
    }, [src]);

    const imageProps = {
        className,
        ...rest,
        alt: "imagem indisponivel"
    }

    if(!imageLoaded) return <StyledSuspense>Carregando...</StyledSuspense>;

    return <LazyLoadImage {...imageProps} src={imgSrc} />
}