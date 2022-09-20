import React from "react";
import Item from './Item';
import './Item.css'

function TodoList(props){
    return(
        <div className="container">
            {props.todolist.map(todo=>{
                return(
                    <Item todo={todo} key={todo.id} />
                )
            })}
        </div>
    )
}
export default TodoList