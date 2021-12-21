import React from "react";
import './TodoApp.css'
import Todo from "./Todo";




class TodoApp extends React.Component{
  state={todos:[],inputTodo:'',currentTodo:null}


    componentDidMount() {
    //  grab form localstorage
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
    //  Update localstorage
    }

    handleAddTodo=()=>{
       //
       //  this.setState({currentTodo:this.state.inputTodo})
        // let arr = this.state.todos.concat(this.state.inputTodo)
        // let currentTodo = this.state.todo
        // this.setState({ todos: [...this.state.todos, this.state.inputTodo] }) //simple value
        // let todoObj={
        //
        // }
        const content = this.state.inputTodo
        const date =   Date.now()
        const currenTodo = {
            content:{content},
            date:date,
            id:{content} + date
        }
        let todosArray = this.state.todos
        let newTodosArray = todosArray.push(currenTodo)
        this.setState(
           {todos:newTodosArray}
        )
        this.setState({inputTodo:''})

        console.log('todos',this.state.todos)
    }
    handleWriteInput(event){
      this.setState({inputTodo:event.target.value})
        console.log(event.target.value)
    }
    render() {
        return(
            <div>
                TodoApp
                <div className="Todo-buttons-div">
                        <div>
                            <input type="text" onChange={(e)=>this.handleWriteInput(e)} value={this.state.inputTodo}/>
                            <button onClick={this.handleAddTodo}>Add</button>
                        </div>




                </div>
            </div>
        )
    }
}

export default TodoApp