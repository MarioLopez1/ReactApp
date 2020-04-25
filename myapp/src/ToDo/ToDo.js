import React from 'react';

function ToDo(props){
    const tasks = props.tasks
        .filter((task)=>{
            return task.status === "todo";
        })
        .sort((a, b)=>a.name.localeCompare(b.name))
        .map((task) => {
            return(
                <li className="list-group-item" key={task.name}>
                    {task.name}
                    <button 
                        type="button" 
                        className="btn btn-primary float-right" 
                        onClick={props.toggle.bind(this, task.name)}>
                        Mark As Done
                    </button>
                </li>
            );
        })
    let ToDoContent;
    if(tasks.length<=0){
        ToDoContent = <p>You Have No To Do Tasks</p>
    } else{
        ToDoContent = <ul className="list-group">
            {tasks}
        </ul>
    }
    return (
        <div className="row">
            <div className="col-12 container">
                <h1>To Do Tasks</h1>
                {ToDoContent}
            </div>
        </div>
    );
}

export default ToDo;