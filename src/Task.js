import { Component } from "react";
import './style.css'

class Task extends Component{
    state = {
        tasks: [
            "Kill My Self",
            "Wash The Dishes",
            "Having Stroke",
            "don't forget to clean the blood"
        ],
    }

    addNewTask(newTask){
        if(newTask !== ''){
            const {tasks} = this.state;
            tasks.push(newTask);
            this.setState({tasks: tasks});
            document.getElementById('k').value = '';
            console.log(this.state);
        }
    }

    removeTask(indexOfTask){
        let {tasks} = this.state;
        const arr1 = tasks.slice(0,indexOfTask)
        const arr2 = tasks.slice(indexOfTask+1)
        tasks = arr1.concat(arr2);
        this.setState({tasks: tasks});
    }

    render(){
        let newtask = '';
        let i = 0;
        return(
            <div>
                <form 
                    onSubmit = {(e => {e.preventDefault()})}
                >
                    <input 
                        className = "textArea"
                        id = 'k'
                        onChange = { e => newtask = e.target.value}
                    />
                    <button
                        className = "add"
                        onClick = { () => this.addNewTask(newtask)}
                    >Add</button>
                </form>
                <ol className = "task">
                {
                    this.state.tasks.map((task) => {
                        
                        i++;
                        return(
                            <li key = {i} className="tasklist">
                                {task}
                                <button
                                    className = "delete"
                                    onClick = {() => this.removeTask(this.state.tasks.indexOf(task))}
                                >X</button>
                            </li>
                        )
                    })

                }
                </ol>
            </div>
        )
    }
}

export default Task