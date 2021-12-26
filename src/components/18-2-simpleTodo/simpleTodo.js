import React,{useState} from "react";
import './simplde.css'

export const data3 = [
    {name:"CSS",completed:true},
    {name:"Js",completed:true},
    {name:"Learn React",completed:false},
    {name:"Learn Mongo",completed:false},
    {name:"Learn Node",completed:false},

]


const SimpleTodo=()=>{

    const[activeIndex,setActiveIndex] = useState(null);

    const onTitleClick = (index) => {
        setActiveIndex(index)
      let currentItem = (Data[index])

        console.log(currentItem,index)
        currentItem.completed = !currentItem.completed
    };


    const[isCompleted,setIsCompleted] = useState({})

    const[Data,setData] = useState(data3)
    const injectTodo =()=> {

        return data3.map((item,index)=>{
            let icon =item.completed? <i className="fas fa-check-circle"> </i>: <i className="fas fa-times"></i>
            let classProp = item.completed?'completed':''
            return(
                <div key={item.name}>
                    <div  onClick={()=>onTitleClick(index)}> <h3 className={classProp}>{item.name}{icon} </h3><><div></div></></div>

                </div>
            )
        })

    }

    return(
        <div>
            {injectTodo()}
            <h1>{activeIndex}</h1>
        </div>
    )
}
export default SimpleTodo