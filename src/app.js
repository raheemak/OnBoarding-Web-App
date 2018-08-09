
import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import Tasks from './components/Tasks'
import Header from './components/Header'
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./Theme";
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
            <MuiThemeProvider theme={theme}>
                <Header title={title}  subtitle={subtitle}/>
                 <Tasks />
            </MuiThemeProvider>
   
            </div>
        )
    }
}

    
var appRoot = document.getElementById('app');
ReactDOM.render (<TaskApp />, appRoot);


