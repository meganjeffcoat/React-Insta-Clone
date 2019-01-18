import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import './Login.css';
import colorlogo from './app-icon2.png';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    };

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleLoginSubmit = e => {
        const user = this.state.username;
        localStorage.setItem('user', user);
        window.location.reload();
    }

    render() {
        return (
            <Form className='login-form'>
                <h1>InstaClone</h1>
                <img src={colorlogo} />
                <div className='subHeader'>Login to begin</div>
                <FormGroup>
                    <Input 
                        type='text'
                        placeholder='User Name'
                        name = 'username'
                        value = {this.state.username}
                        onChange={this.handleInputChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Input 
                        type='password'
                        placeholder='Password'
                        name='password'
                        value={this.state.password}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <Button color='dark' size='large' onClick={this.handleLoginSubmit}>
                    Log In
                    </Button>
                </FormGroup>
            </Form>
        );
    }
}

export default Login;