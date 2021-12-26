import React, {useEffect, useState} from "react";
// import App116 from "./components/Code-Along/App-116/App116";
// import Avatar from "./components/13-2-avatars/Avatar";
// import RouterApp from "./components/Code-Along/React-router/Router";
// import TodoApp from "./components/TodoApp/TodoApp";
// import CardTest from "./cardTest/CardTest";
// import Widget from "./components/Code-Along/widget/Widget";
// import Text,{text} from "./components/18-1-text/Text";
// import SimpleTodo ,{data3} from "./components/18-2-simpleTodo/simpleTodo";
// import WhatsTheTime from "./components/18-3-whats-the-time/WhatsTheTime";
// import MarkAndDelete from "./components/18-4-marking-And-deleting /MarkAndDelete";
import './MArk.css'

if (module.hot) {
    module.hot.accept();
}

const arr= [{
    content:'one',checked:false,show:true},{content:'two',checked:false,show:true},{content:'three',checked:false,show:true}
    ,{content:'four',checked:false,show:true}]

const Mark = ()=> {
    const[makeList,setList] = useState(arr)
    const[activateReset,setReset] = useState(arr)
    const[indexList,setIndexList] = useState([false,false,false,false])

    const inject =()=> {
        return  arr.map((item,index) => {
            // let classProp = indexList.includes(index)?'hide':'show'
            // let classProp = 'show'
            return (

                <li key={item.content} className={item.show?'':'hide'} >
                    <input onChange={(e) =>handleCheck(e,index) } value={index}  defaultChecked={item.checked} type="checkbox"/>
                    {item.content}
                </li>)
        })
    }
    const handleReset = ()=>{
        let newArr = makeList.map(item=>{
            item.show=true
            item.checked=false
            return item
        })
        setList(newArr)

    }
    const handleDelete=()=> {
        let newArr = makeList.map(item => {
            item.show = !item.checked

            return item
        })
        setList(newArr)
    }
  const handleCheck=(e,index)=>{
        console.log(e.currentTarget.checked)
        // let items= makeList
        // console.log('items,',items)
          console.log('dsd')
      let shallow = makeList
        shallow[index].checked=e.currentTarget.checked
         setList(shallow)
      return console.log('g')
          // setIndexList([index]=e.currentTarget.checked)

  }
   function removePeople(e) {
        this.setState({people: this.state.people.filter(function(person) {
                return person !== e.target.value
            })});
    }
    return (
        <>

            <div style={{display:'flex'}}>
                <button onClick={handleDelete}>Delete</button>
                <button onClick={handleReset}>Reset</button>
            </div>
            <div>
                <ul>
                    {inject()}
                </ul>

            </div>

        </>
    )
}







export default Mark