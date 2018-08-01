
let count =0;
var appRoot = document.getElementById('app');

const addOne = () => {
    count++;
    renderCounterApp();
}

const minusOne = () => {
    count--;
    renderCounterApp();
}

const reset = () => {
    count=0;
    renderCounterApp();
}

const renderCounterApp = () => {

    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button id="my-id" className="Button" onClick={addOne}>+1 </button>
            <button id="my-id" className="Button" onClick={minusOne}>-1 </button>
            <button id="my-id" className="Button" onClick={reset}>0 </button>
            </div>
    
    )
    ReactDOM.render (templateTwo, appRoot);
}

renderCounterApp();

