import React,{useState,useEffect,useRef} from "react";


const Editing = () => {
    const [isEdit,setIsEdit] = useState(false)
    const inputRef= useRef()

    const handleEditButton=()=>{
        if(isEdit) {
            console.log('is',inputRef.current)
            inputRef.current.focus()
        }
        // inputRef.current.focus()
        setIsEdit(edit=>!edit)

        console.log('isnot',inputRef.current)

    }

    return(
        <div>
            {isEdit && <input ref={inputRef} type="text"/>}

            <button onClick={handleEditButton}>{isEdit? 'Save':'Edit'}</button>
        </div>

    )
}
export default Editing