import React from 'react';
import Checkbox from '@material-ui/core/Checkbox'

import Info from './Info';


export default class Task extends React.Component {


    checkboxHandler = (e) => {
         const check = e.target.checked;
         this.props.updateOptions (this.props.id, check);
    }

    render (){
        console.log ("this is being called...")
        return (
            <div> <Checkbox disabled={!this.props.enabled}  
                             onChange={this.checkboxHandler} 
                             checked={this.props.checked}
                    /> 
                    {this.props.id}  
                    <Info id={this.props.id} disabled={!this.props.enabled}/>
            </div>
        )
    }
}


