import React from 'react';
import Checkbox from '@material-ui/core/Checkbox'

import Info from './Info';


export default class Task extends React.Component {


    checkboxHandler = (e) => {
         const check = e.target.checked;
         this.props.updateOptions (this.props.id, check);
    }

    render (){
        return (
            <div>
                <div class="checkbox">
                    <Checkbox disabled={!this.props.enabled}  
                             onChange={this.checkboxHandler} 
                             checked={this.props.checked}
                  />
                <div class="checkbox-text">
                    {this.props.id}  
                </div>
             </div>
            
                <Info id={this.props.id} disabled={!this.props.enabled}/>
            </div>
        )
    }
}


