import React from 'react';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';


const styles = {
  smallButton: {
    background: 'linear-gradient(45deg, #F0AF5D 30%, #F38E4A 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 30,
    padding: '0 30px',
    margin: '10px'
  },
};


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
      return (
        <div>          
          <Button color="secondary" onClick={this.toggleWindowPortal} disabled={this.props.disabled} className={this.props.classes.smallButton}> 
            Details
          </Button>
          
          {this.state.showWindowPortal && (
            <Card>
            <CardContent>
              <Typography  color="textSecondary">
              {this.props.title}
              </Typography>
              <Typography component="p">
                {this.props.information}<br />
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

export default withStyles(styles)(Info);