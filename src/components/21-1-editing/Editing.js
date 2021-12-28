import React,{useState,useEffect,useRef} from "react";


const Editing = () => {
    const [isEdit,setIsEdit] = useState(true)
    const inputRef= useRef(isEdit)


    const handleEditButton=()=> {
        setIsEdit(edit => !edit)

    }
    useEffect(()=>{
        if (!isEdit) {
            inputRef.current.focus()
            console.log('isnot', inputRef.current)
        }
    },[isEdit])
    let visibilityVar = isEdit?'visible':'hidden'
    return(
        <div>
            {!isEdit && <input style={{visibility:{visibilityVar}}} ref={inputRef} type="text"/>}

            <button onClick={handleEditButton}>{isEdit? 'Edit':'Save'}</button>
        </div>

    )
}
export default Editing