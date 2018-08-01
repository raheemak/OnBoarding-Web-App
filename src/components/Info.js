
import React from 'react';


import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

 export default class Info extends React.PureComponent {
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
      return (
        <div>          
          <Button color="secondary" onClick={this.toggleWindowPortal} disabled={this.props.disabled}>
            Details
          </Button>
          
          {this.state.showWindowPortal && (
            <Card>
            <CardContent>
              <Typography  color="textSecondary">
                Word of the Day
              </Typography>
              <Typography variant="headline" component="h2">
               err
              </Typography>
              <Typography color="textSecondary">
                adjective
              </Typography>
              <Typography component="p">
                well meaning and kindly.<br />
                {'"a benevolent smile"'}
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

