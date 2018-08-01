import React from 'react';

export default (props) =>  (
    <div className="header">   
    <h1 className="header__title"> {props.title} </h1>
    <h2 className="header__subtitle"><em>{props.subtitle}</em></h2>
    </div>
);

