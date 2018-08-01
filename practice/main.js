import Checkbox from '@material-ui/core/Checkbox'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



class IndecisionApp extends React.Component { 

    render(){
        const title="Intern On Boarding Tasksss";
        const subtitle ="Welcome to company! Hopefully, this short guide will clarify some of your onboarding tasks.";
        
        return (
            <div>
            <Header title={title}  subtitle={subtitle}/>
            <Tasks />
            </div>
        )
    }
}

const Header = (props) =>  (
        <div>   
        <h1> {props.title} </h1>
        <h2><em>{props.subtitle}</em></h2>
        </div>
);
    


class Tasks extends React.Component {

    constructor (props){
        super (props);
        const tasks = ['Task number one', 'Task number two', 'Task number three', 'Task number four'];

        this.enabled = this.enabled.bind (this);
        this.updateOptions = this.updateOptions.bind (this)
        this.checked= this.checked.bind(this)
        this.state =  {
            tasks:tasks,
            completed:[]
            // get the index in tasks and if it isnt one more, than it should be disabled? 
        }    
    }


    enabled (option){
        return  this.state.tasks.indexOf(option) <= this.state.completed.length;
    }

    checked(option){
        return this.state.completed.indexOf(option) >=0;
    }

   updateOptions (option, add){
       if (add){
           this.setState((prevState)=>{
               console.log (prevState.completed.concat (option))
                return {
                    completed: prevState.completed.concat (option)
                   /* incomplete:  prevState.incomplete.filter ((el) => {
                        return (prevState.incomplete.indexOf(el) != 0 )
                    })*/
                }
        })
    }
        else {
            this.setState((prevState)=>{
                console.log (prevState.completed.filter ((el) => {
                    return (prevState.completed.indexOf(el) < prevState.completed.indexOf(option) )}));
                return {
                    completed: prevState.completed.filter ((el) => {
                        return (prevState.completed.indexOf(el) < prevState.completed.indexOf(option) )
                    })/*,
                    incomplete: prevState.incomplete.concat ( prevState.completed.filter ((el) => {
                        return (prevState.completed.indexOf(el) >= prevState.completed.indexOf(option) )
                    }) )*/
                }
        })
        }
   }
    render(){
        return (
             <div>
                {this.state.tasks.map ((task) => <Task id={task} 
                enabled={this.enabled(task)} 
                checked={this.checked(task)}
                updateOptions={this.updateOptions}/>)}
            </div>
            
        )
    }
}



//popup component: https://stackoverflow.com/questions/47574490/open-a-component-in-new-window-on-a-click-in-react?rq=1
class MyWindowPortal extends React.PureComponent {
    constructor(props) {
      super(props);
      this.containerEl = document.createElement('div');
      this.externalWindow = null;
    }
  
    render() {
      return ReactDOM.createPortal(this.props.children, this.containerEl);
    }
  
    componentDidMount() {
      this.externalWindow = window.open('', '', 'width=600,height=400,left=200,top=200');
        this.externalWindow.document.body.appendChild(this.containerEl);
    }
  
    componentWillUnmount() {
      this.externalWindow.close();
    }
  }

class App extends React.PureComponent {
    constructor(props) {
      super(props);   
      this.state = {
        showWindowPortal: false,
      };
      
      this.toggleWindowPortal = this.toggleWindowPortal.bind(this);
    }
  
    componentDidMount() {
      window.setInterval(() => {
        this.setState(state => ({
          state
        }));
      }, 1000);
    }
    
    toggleWindowPortal() {
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


class Task extends React.Component {
    constructor (props){
        super(props);
        this.checkboxHandler = this.checkboxHandler.bind(this);
    }

    checkboxHandler(e){
         var check = e.target.checked;
         this.props.updateOptions (this.props.id, check);
    }

    render (){

        return (
            <div> <Checkbox disabled={!this.props.enabled}  
                             onChange={this.checkboxHandler} 
                             checked={this.props.checked}
                    /> 
                    {this.props.id}  
                    <App id={this.props.id} disabled={!this.props.enabled}/>
            </div>
        )
    }
}





var appRoot = document.getElementById('app');
ReactDOM.render (<IndecisionApp />, appRoot);


