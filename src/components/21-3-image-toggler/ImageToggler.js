import React,{useState,useRef,useEffect} from "react";



const ImageToggler = () => {
    const[isImg1Color,setIsColor1]=useState(true);
    const[isImg2Color,setIsColor2]=useState(true);
    const image1 = useRef()
    const image2 = useRef()

    const image1Toggle=()=>{
        setIsColor1(color=>!color)
    }
    const image2Toggle=()=>{
        setIsColor2(color=>!color)
    }
    const images=['/assets/images/man1.png','/assets/images/man2.png']
    const images2= ['/assets/images/axe1.png','/assets/images/axe2.png']

    // const imageSourceRender=(e)=>{
    //     console.log(e)
    //    return isColor1? images[0]:images[1];
    //
    // }

    useEffect(()=>{
        isImg1Color?image1.current.src = images[0]:image1.current.src = images[1]
        isImg2Color?image2.current.src = images2[0]:image2.current.src = images2[1]
    })

    return (
        <div>
            hi
            <img ref={image1} onMouseEnter={ image1Toggle } onMouseLeave={image1Toggle} src='' alt="dsd"/>
            <img  ref={image2} onMouseEnter={image2Toggle} onMouseLeave={image2Toggle} src='' alt="dsd"/>

        </div>
    )
}
export default ImageToggler