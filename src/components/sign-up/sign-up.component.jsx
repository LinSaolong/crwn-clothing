import React from 'react';

import { connect } from 'react-redux';

import {
    SignUpContainer,
    SignUpTitle
} from './sign-up.styles'

import { signUpStart } from '../../redux/user/user.actions'

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';


class SignUp extends React.Component{
    constructor(){
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { signUpStart } = this.props;
        const {displayName, email, password, confirmPassword} = this.state
        if(password !== confirmPassword){
            alert("password don't match");
            return;
        }

        signUpStart({displayName, email, password})

    };

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]:value });
    }

    render(){
        const { displayName, email, password, confirmPassword } = this.state
        return(
            <SignUpContainer>
                <SignUpTitle>I do not have a account</SignUpTitle>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='displayName'
                        type='text'
                        label='Display Name'
                        value={displayName}
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput 
                        name='email'
                        type='email'
                        label='Email'
                        value={email}
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput 
                        name='password'
                        type='password'
                        label='Password'
                        value={password}
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput 
                        name='confirmPassword'
                        type='password'
                        label='ConFrim PassWord'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        required
                    />
                    <CustomButton type='submit'>
                        SIGN UP
                    </CustomButton>
                </form>
            </SignUpContainer>
        )
    }
}

export const mapDispatchToProps = dispatch => ({
    signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp);