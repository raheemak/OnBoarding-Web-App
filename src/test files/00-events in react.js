'use strict';

var tasksToComplete = ['task number one', 'task number two', 'task number three', 'task number four'];


const app = {
    title: "indecision app",
    subtitle: 'millenialls are indecisive... we have a solution ',
    options: tasksToComplete
}

//functions 

const onFormSubmit =(e) =>{
 e.preventDefault();
 console.log ("form submitted");
 const option = e.target.elements.option.value;
 option && app.options.push (option);
 renderApp();
}

const removeAll = () => {
    app.options=[];
    renderApp();
}

const onMakeDecision =() => {
    const randomNum= Math.floor (Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert (option);    
}

//rendering app 
const renderApp =()=> {
    
    const template = (
    <div>
        <h1>{app.title}</h1>
        <p><em>{app.subtitle}</em> </p>
        <p> {app.options.length>0 ? "Here are your options:" : "No options" } </p>
        <ul>
           {app.options.map ((option)=> <li id={option}>{option}</li>)}
        </ul> 

        <div><button onClick={removeAll}>Remove All </button></div>

        <form onSubmit={onFormSubmit}>
            <input type="text" name="option"/>
            <button> Add Option</button>
        </form>

        <div>
            <button disabled={app.options.length==0}onClick={onMakeDecision}>Make Decision </button>
        </div>
    </div>
)

var appRoot = document.getElementById('app');
ReactDOM.render (template, appRoot);

}

renderApp();
