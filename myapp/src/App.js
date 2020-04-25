import React from 'react';
import './App.css';
import ToDo from './ToDo/ToDo';
import Done from './Done/Done';
import Add from './Add/Add';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      newTaskName:"",
      tasks:localStorage.getItem("tasks") == null ? [] : JSON.parse(localStorage.getItem("tasks")) 
    };
  }
  toggleTask = (key) => {
    const cloneTasks = [...this.state.tasks];
    const index = cloneTasks.findIndex((task) => task.name === key);
    const task = {...cloneTasks[index]};
    task.status = task.status === "todo" ? "done" : "todo";
    cloneTasks[index] = task;
    localStorage.setItem("tasks", JSON.stringify(cloneTasks));
    this.setState({tasks:cloneTasks});
  }
  onNewTaskChange = (event) => {
    const newTaskName = event.target.value;
    this.setState({newTaskName:newTaskName});
  }
  addTask = (event) => {
    event.preventDefault();
    const cloneTasks = [...this.state.tasks];
    cloneTasks.push({status:"todo", name:this.state.newTaskName});
    localStorage.setItem("tasks", JSON.stringify(cloneTasks));
    this.setState({tasks:cloneTasks, newTaskName:""});
  }
  render() {
    return (
      <div className="App container-fluid">
        <div className="row">
          <div className="col-6 container">
            <Add tasks={this.state.tasks} 
            newTaskName={this.state.newTaskName} 
            newChange={this.onNewTaskChange}
            addTask={this.addTask}/>
          </div>
          <div className="col-6 container">
            <ToDo tasks={this.state.tasks} toggle={this.toggleTask}/>
            <Done tasks={this.state.tasks}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
