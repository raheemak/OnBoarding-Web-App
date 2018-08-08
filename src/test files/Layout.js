
import React from 'react';
import ReactDOM from 'react-dom';

const Layout = (props) =>{
    return (
        <div>
            <p>header </p>
            {props.children}
            <p> fotoer </p>
        </div>
    )
}


const template = (
    <div>
        <h1>hi </h1>
        </div>
)
var appRoot = document.getElementById('app');
ReactDOM.render ((
        <Layout> <p> this is ineline>  </p> </Layout>
), appRoot);

