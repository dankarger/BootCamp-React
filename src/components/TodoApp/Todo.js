import React from "react";


export default function Todo(todo) {


    return(
        <div id={todo.id}>
            {todo.content}
            <button>Delete-Todo</button>
            <button>Update-Todo</button>
        </div>
    )

}