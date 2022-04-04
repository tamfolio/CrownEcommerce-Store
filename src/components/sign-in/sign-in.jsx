import React from 'react'

import './sign-in.scss'
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button'

class SignIn extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email: '', password: ''})
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }

    render(){
        return (
            <div className='sign-in'>
                <h2>I already have an Account</h2>
                <span>Sign In with your Email and Password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                    name='email'
                    type='email' 
                    handleChange={this.handleChange} 
                    value={this.state.email}
                    label='Email'
                    required/>
                    
                    <FormInput 
                    name='password'
                    type='password' 
                    value={this.state.email}
                    handleChange={this.handleChange}
                    label='Password'
                    required/>
                    

                    <CustomButton type="submit">SIGN IN</CustomButton>
        
                </form>
            </div>
        )
    }
}

export default SignIn