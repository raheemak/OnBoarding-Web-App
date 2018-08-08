
import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import Tasks from './components/Tasks'
import Header from './components/Header'

import './styles/style.scss'
class TaskApp extends React.Component { 

    state = {
        selected: undefined
    }
    render(){
        const title="Intern On Boarding Tasks";
        const subtitle ="Welcome to company! Hopefully, this short guide will clarify some of your onboarding tasks.";
        
        return (
            <div class="parent">
            <Header title={title}  subtitle={subtitle}/>
            <Tasks />
            </div>
        )
    }
}

    
var appRoot = document.getElementById('app');
ReactDOM.render (<TaskApp />, appRoot);


