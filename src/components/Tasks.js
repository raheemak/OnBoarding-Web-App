import React from 'react';
import Task from './Task';
import Data from '../data/data.xml';
import Info from './Info';
import Box from './Box';


export default class Tasks extends React.Component {

   state={
            current: -1
    }


    enabled =  (option) => {
        return option<= this.state.current + 1;
    }

    checked =  (option) => {
        return option<= this.state.current ;
    }
    checkboxHandler = (option) => {
        console.log (this.state.prevState.current)
        this.setState ( (prevState) => ({
            console.log (prevState current: (prevState.current===0 && option===0) ? -1 :  (prevState.current===option ? (prevState.option -1) : option) }) )
        console.log (this.state.current)
    }
   
    render(){
        const tasks = Data.Tasks.task;
        return (
             <div className="taskbody">
               
                {
                   tasks.map ((task,index) => {
                       return (<div>
                                    <Box id={index} checked={this.checked(index)} enabled={this.enabled(index)} handler={this.checkboxHandler}  />
                                    <Task id={task.title} className="textbox-text"/>
                                    <Info title={task.title} information={task.information[0]} disabled={false}/>
                                </div>)
                   })
                }
            </div>
            
        )
    }
}