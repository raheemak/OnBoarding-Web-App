import React from 'react';
import Checkbox from '@material-ui/core/Checkbox'


export default class Box extends React.Component {
      
    handler = () => {
        return this.props.handler (this.props.id);
    }
    

    render (){
     return (
        <Checkbox id={this.props.id} checked={this.props.checked} onChange={this.handler} disabled={!this.props.enabled} />
     )
    }


}