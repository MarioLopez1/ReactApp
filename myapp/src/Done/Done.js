import React from 'react';

function Done(props) {
    const tasks = props.tasks
        .filter((task) => {
            return task.status === "done";
        })
        .sort((a, b)=>a.name.localeCompare(b.name))
        .map((task, index) => {
            return (
                <li className="list-group-item" key={task.name}>
                    {task.name}
                </li>
            );
        })
    let DoneContent;
    if (tasks.length <= 0) {
        DoneContent = <p>You Have No Done Tasks</p>
    } else {
        DoneContent = <ul className="list-group">
            {tasks}
        </ul>
    }
    return (
        <div className="row">
            <div className="col-12 container">
                <h1>Done Tasks</h1>
                {DoneContent}
            </div>
        </div>
    );
}

export default Done;