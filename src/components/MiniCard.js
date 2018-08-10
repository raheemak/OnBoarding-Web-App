import React from 'react';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

export default class MiniCard extends React.Component {

    state = {
        showWindowPortal: false,
       }

       toggleWindowPortal = () => {
        this.setState(state => ({
          ...state,
          showWindowPortal: !state.showWindowPortal,
        }));
      }
      
  
      
    render(){
        const formatxml = (str) =>{
            return str.split("\n").map((arg)=>(
              arg.trim()
            )).join ("\n")
          }

        return (

            <div>
                <Button color="secondary" onClick={this.toggleWindowPortal} > 
            Details
          </Button> 
            {this.state.showWindowPortal && 
            (<Card>
            <CardContent>
            {this.props.steps.map ((step)=>(
                <div>
                   <li><h4>{step.title}</h4>
                    {step.info &&  <div class="pre"> {(formatxml(step.info.toString()))}
                    </div>}
                </li>
                </div>
              ))
        }
    </CardContent>
    <CardActions>
              <Button size="small"  onClick={() => this.setState({ showWindowPortal: false })}>  Collapse</Button>
            </CardActions>
    </Card>)
            }</div>
    )
}
}