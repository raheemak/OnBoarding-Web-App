import React from 'react';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';




class Info extends React.PureComponent {
   state = {
    showWindowPortal: false,
   }

    componentDidMount() {
      window.setInterval(() => {
        this.setState(state => ({
          state
        }));
      }, 1000);
    }
    
    toggleWindowPortal = () => {
      this.setState(state => ({
        ...state,
        showWindowPortal: !state.showWindowPortal,
      }));
    }
    
  

    render() {
      const formatxml = (str) =>{
        return str.split("\n").map((arg)=>(
          arg.trim()
        )).join ("\n")
      }
      
      return (
        <div>          
          <Button color="secondary" onClick={this.toggleWindowPortal} disabled={this.props.disabled} > 
            Details
          </Button>
          
          {this.state.showWindowPortal && (
            <Card>
            <CardContent>
              <Typography  color="textSecondary">
              {this.props.title}
              </Typography>
              <Typography component="p">{
                this.props.information && (
                  this.props.information.subtask ? 
                    (                   
                      <div>
                        <em>{this.props.information["_"] && this.props.information["_"]} </em>
                         {this.props.information.subtask.map (
                          (el)=>(
                            <div>
                              <em>{el.task}</em>
                              {
                                el.instructions && (
                                  el.instructions[0].steps ? (
                                    el.instructions[0].steps[0].step.map ((step)=>(
                                      <div>
                                          <h4>{step.title}</h4>
                                          {step.info &&  <div class="pre"> {(formatxml(step.info.toString()))} </div>}
                                      </div>
                                    ))
                                  ): (
                                    <p> <div class="pre">{formatxml(el.instructions.toString())} </div> </p>
                                  )
                                )
                              }
                            </div>
                          )
                        )
                    }</div>):
                  (
                   <em>{this.props.information}</em>
                  )
                )
              }

               

                <br />
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small"  onClick={() => this.setState({ showWindowPortal: false })}>  Collapse</Button>
            </CardActions>
          </Card>
          )}
        </div>
      );
    }
  }

export default Info;