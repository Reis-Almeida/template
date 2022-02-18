import { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import website from "../../shared/json/website";
import { StyledSuspense } from "./style";

const SuspenseImage : React.FC<any> = ({ src, className, ...rest }) => {

    const [imageLoaded, setImageLoaded] = useState(false);
    const [imgSrc, setImgSrc] = useState(website.noImg);

    useEffect(() => {
        const imageToLoad = new Image();

        imageToLoad.onload = () => {
            setImgSrc(src);
            setImageLoaded(true);
        }

        imageToLoad.onerror = () => {
            src = website.noImg;
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

export default SuspenseImage;