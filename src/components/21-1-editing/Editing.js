import React,{useState,useEffect,useRef} from "react";


const Editing = () => {
    const [isEdit,setIsEdit] = useState(true)
    const inputRef= useRef()

    const handleEditButton=()=>{


        setIsEdit(edit=>!edit)
        if(!isEdit) inputRef.current.focus()
        // if(isEdit) inputRef.current.focus()
        // inputRef.current.focus()
        console.log('isnot',inputRef.current)

    }

    let visibilityVar = isEdit?'visible':'hidden'
    return(
        <div>
            {!isEdit &&<input style={{visibility:{visibilityVar}}} ref={inputRef} type="text"/>}

            <button onClick={handleEditButton}>{isEdit? 'Edit':'Save'}</button>
        </div>

    )
}
export default Editing