import React from "react";
function Item({todo}){
    return(
        <div className="card">
            <div className="content">
                <h3>{todo.h3}</h3>
                <p>{todo.p}</p>
                <a>{todo.a}</a>
        </div>
        {/* <div className="card">
            <div className="content">
                <h3>{todo.h3}</h3>
                <p>{todo.p}</p>
                <a>{todo.a}</a>
            </div>
        </div>
        <div className="card">
            <div className="content">
                <h3>{todo.h3}</h3>
                <p>{todo.p}</p>
                <a>{todo.a}</a>
            </div>
        </div> */}
    </div>
    )
}
export default Item