import React from 'react';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MiniCard from './MiniCard';





class Info extends React.PureComponent {
   state = {
    showWindowPortal: this.props.open,
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
        return str.replace(/^\s+|\s+$/g, '').split("\n").map((arg)=>(
          arg.trim()
        )).join ("\n")
      }
      
      return (
        <div>          
          <Button color="secondary" onClick={this.toggleWindowPortal} disabled={!this.props.enabled} > 
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
                      <div><ul class= "list">
                        <em>{this.props.information["_"] && <div class="pre">{formatxml(this.props.information["_"])}</div>} </em>
                         {this.props.information.subtask.map (
                          (el)=>(
                            <div>
                              <li><b>{el.task}</b>
                              {
                               
                                  el.instructions && (
                                  el.instructions[0].steps ? (
                                    <MiniCard steps={el.instructions[0].steps[0].step} />
                                    ): (
                                    <p> <div class="pre">{formatxml(el.instructions.toString())} </div> </p>
                                  )
                                ) 
                              }
                           </li> </div>
                          )
                        )
                    }</ul></div>):
                  (
                   <em><div class="pre">{formatxml(this.props.information.toString())}</div></em>
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