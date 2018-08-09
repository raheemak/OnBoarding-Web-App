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
        this.setState ( (prevState)=> ({
            current: (option <= prevState.current  ? option-1 : option)
        }))
    }
   
    render(){
        const tasks = Data.Tasks.task;
        return (
             <div className="taskbody">
                {
                   tasks.map ((task,index) => {
                       return (<div>
                                    <div class="checkbox">
                                        <Box id={index} checked={this.checked(index)} enabled={this.enabled(index)} handler={this.checkboxHandler}  />
                                        <div class="row">
                                            <Task id={task.title} className="textbox-text"/>
                                            <Info title={task.title} information={(task.information[0])} disabled={false}/>
                                            
                                        </div>
                                    </div>
                                </div>)
                   })
                }
                            </div>
            
        )
    }
}