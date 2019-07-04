import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/styles';
import { ValidatorForm, TextValidator,} from 'react-material-ui-form-validator';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// import TextField from '@material-ui/core/TextField'

const styles = theme => ({
    menuButton: {
        marginRight: 1,
      },
      button: {
        margin: 1,
      },
      title: {
       
        flexGrow: 1,
       
      },
      text: {
        marginTop: 20,
        flexGrow: 1,
       
      },
      
      textField: {
        marginTop:20,
        marginLeft: 1,
        marginRight: 1,
        width: 300,
      },
  });

  export default withStyles(styles) (
class LoginForm extends React.Component {
 
    state = {
        email: '',
        password:''
    }
    handleChange = (event) => {
        const email = event.target.value;
        this.setState({ email:email });
    }
    handleChangeP = (event) => {
        const password = event.target.value;
        this.setState({ password:password });
    }
 
    handleSubmit = () => {
        // your submit logic
        
    }
    handleSignup = () => {
        // your submit logic
        
    }
 
    render() {
        
        const { classes } = this.props;

        return (
            <ValidatorForm
                ref="form"
                onSubmit={this.handleSubmit}
                onError={errors => console.log(errors)}
            >
            <AppBar position="static">
          <Toolbar>
            
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
  
            <Typography variant="h6" className={classes.title}>
              Chat Application
            </Typography>
      
          </Toolbar>
        </AppBar>
                <TextValidator

                    label="Email"
                    onChange={this.handleChange}
                    name="email"
                    value={this.state.email}
                    validators={['required', 'isEmail']}
                    errorMessages={['this field is required', 'email is not valid']}
                    className={classes.textField}
                    type = "email"
                    margin="normal"
                />
                <br/>
                
                    {/* <TextField
                        className={classes.textField}
                        onChange={this.handleChangeP}
                        value={this.state.password}
                        label="password"
                        margin="normal"
                        type="password"
                    /> */}

                <TextValidator
                    label="Password"
                    onChange={this.handleChangeP}
                    name="password"
                    value={this.state.password}
                    validators={['required']}
                    className={classes.textField}
                    errorMessages={['this field is required']}
                />      
                
                <br/>
                      <Button variant="contained" color="primary" className={classes.button} type="submit">
                          Login
                      </Button>
                      <Button variant="contained" color="primary" className={classes.button} type="button">
                          Signup
                       </Button>
                  </ValidatorForm>

              );
          }
      }
  )