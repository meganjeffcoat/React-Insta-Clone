import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

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
                <h1>React Insta Clone</h1>
                <div>Login to begin</div>
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
                    <Button color='success' size='large' onClick={this.handleLoginSubmit}>
                    Log In
                    </Button>
                </FormGroup>
            </Form>
        );
    }
}

export default Login;