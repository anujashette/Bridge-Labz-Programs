import React from 'react';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { TextField } from '@material-ui/core';



const styles = theme => ({
    menuButton: {
        marginRight: 1,
      },
      button: {
        margin: 20,
      },
      title: {
       
        flexGrow: 1,
       
      },
      text: {
        marginTop: 20,
        flexGrow: 1,
       
      },
      textField: {
          marginTop:5,
        marginLeft: 1,
        marginRight: 1,
        width: 300,
      },
  });

  export default withStyles(styles) (
class SignupFrom extends React.Component {
    state = {
        formData: {
            email: '',
            password: '',
            username:''
        },
        submitted: false,
    }

    handleChange = (event) => {
        const { formData } = this.state;
        formData[event.target.name] = event.target.value;
        this.setState({ formData });
    }

    handleSubmit = () => {
        this.setState({ submitted: true }, () => {
            setTimeout(() => this.setState({ submitted: false })  ,5000);
        });
    }

    render() {
        const { formData, submitted } = this.state;
        const { classes } = this.props;

        return (
            <ValidatorForm
                ref="form"
                onSubmit={this.handleSubmit}
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
                <h2>Signup</h2>
                <TextValidator
                    label="Email"
                    onChange={this.handleChange}
                    name="email"
                    value={formData.email}
                    className={classes.textField}
                    validators={['required', 'isEmail']}
                    errorMessages={['this field is required', 'email is not valid']}
                />
                <br/>
                <TextField
                    label="Username"
                    onChange={this.handleChange}
                    name="username"
                    value={formData.username}
                    className={classes.textField}
                >

                </TextField>
                <br />
                <TextValidator
                    label="Password"
                    onChange={this.handleChange}
                    name="password"
                    value={formData.password}
                    validators={['required']}
                    className={classes.textField}
                    errorMessages={['this field is required']}
                />
                <br />
                <Button
                    color="primary"
                    variant="contained"
                    type="submit"
                    className={classes.button}
                    disabled={submitted}
                >
                    {
                        (submitted && 'Your form is submitted!')
                        || (!submitted && 'Signup')
                    }
                </Button>
            </ValidatorForm>
        );
    }
})