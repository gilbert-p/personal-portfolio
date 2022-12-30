import React, {useEffect, useState} from "react";

function useResizeObserver(refContainer) {

    const [getWidth, setWidth] = useState(0);
    const [getHeight, setHeight] = useState(0);
    const [getAspectRatio, setAspectRatio] = useState(0);

    useEffect(()=> {

        if(refContainer == null) {
            return {getWidth: 0, getHeight: 0 ,getAspectRatio: 0};
        }

        let width = refContainer.current.offsetWidth;
        let height = refContainer.current.offsetHeight;

        const observeContainerSize = () => {
            setWidth(width);
            setHeight(height);
            setAspectRatio(width/height);
        }


                observeContainerSize();

        window.addEventListener("resize", observeContainerSize);


        return () => {
            window.removeEventListener("resize", observeContainerSize);
        }



    }, [refContainer, setHeight, setWidth]);

    console.log(getWidth, getHeight, getAspectRatio);
    return {getWidth, getHeight, getAspectRatio};
}

export {
    useResizeObserver
};