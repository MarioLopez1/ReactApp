import React from 'react';

function Add(props){
    return (
        <div className="row">
            <div className="col-12 container">
                <h1>Add Task</h1>
                <form onSubmit={props.addTask}>
                    <div className="form-group">
                        <label>Task:</label>
                        <input 
                        type="text" 
                        placeholder="Type Here" 
                        className="form-control" 
                        value={props.newTaskName}
                        onChange={props.newChange}/>
                    </div>
                    <button type="submit" className="btn btn-success">Add</button>
                </form>
            </div>    
        </div>
    );
}

export default Add;