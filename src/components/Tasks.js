import React from 'react';
import Task from './Task';

export default class Tasks extends React.Component {
    state =  {
        tasks:['Task number one', 'Task number two', 'Task number three', 'Task number four'],
        completed:[]
    }    


    enabled =  (option) => {
        return  this.state.tasks.indexOf(option) <= this.state.completed.length;
    }

    checked = (option) => {
        return this.state.completed.indexOf(option) >=0;
    }

   updateOptions = (option, add) => {
       if (add){//add option to array 
           this.setState((prevState)=>{
                return {
                    completed: prevState.completed.concat (option)
                }
        })
    }
        else {//remove option from array 
            this.setState((prevState)=>{
                return {
                    completed: prevState.completed.filter ((el) => {
                        return (prevState.completed.indexOf(el) < prevState.completed.indexOf(option) )
                    })
                }
        })
        }
   }
   
    render(){
        return (
             <div className="taskbody">
                {this.state.tasks.map ((task) => <Task id={task} 
                enabled={this.enabled(task)} 
                checked={this.checked(task)}
                updateOptions={this.updateOptions}/>)}
            </div>
            
        )
    }
}