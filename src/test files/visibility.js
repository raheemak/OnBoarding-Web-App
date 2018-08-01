let visible = false;


const detailsChange = () =>{
    visible=!visible;
    console.log (visible);
    render();
}

const render = ()=>{


    const template = (
    <div>
        <h1>Visibilty Toggle </h1>
    <button onClick={detailsChange}> {visible ? "Hide Details" : "Show Details"} </button>
    {visible && <p>These are some details that should be displayed when the button is selected hmmm </p>}
    </div>
)
var appRoot = document.getElementById('app');
ReactDOM.render (template, appRoot);

}

render();
