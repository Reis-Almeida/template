import { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { StyledSuspense } from "./style";

const SuspenseImage : React.FC<any> = ({ src, className, ...rest }) => {

    const [imageLoaded, setImageLoaded] = useState(false);
    const [imgSrc, setImgSrc] = useState("/noImg.jpg");

    useEffect(() => {
        const imageToLoad = new Image();

        imageToLoad.onload = () => {
            setImgSrc(src);
            setImageLoaded(true);
        }

        imageToLoad.onerror = () => {
            src = "/noImg.jpg";
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