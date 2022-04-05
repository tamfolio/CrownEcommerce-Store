import React from 'react'

import FormInput from '../form-input/form-input'
import CustomButton from '../custom-button/custom-button'

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'
import './sign-up.scss';

class SignUp extends React.Component {
    constructor(){
        super();
        
        this.state = {
            displayName: '',
            email:'',
            password:'',
            confirmPassword: ''
        }
    }

    render() {
        return (
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput>
                        
                    </FormInput>
                </form>
            </div>
        )
    }
}