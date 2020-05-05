import React,{useState} from 'react';

import { connect } from 'react-redux';

import {
    SignUpContainer,
    SignUpTitle
} from './sign-up.styles'

import { signUpStart } from '../../redux/user/user.actions'

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';


const SignUp = ({ signUpStart}) => {
    
    const [userCredentials, setUserCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const {displayName, email, password, confirmPassword} = userCredentials

    const handleSubmit = async event => {
        event.preventDefault();

        if(password !== confirmPassword){
            alert("password don't match");
            return;
        }

        signUpStart({displayName, email, password})

    };

    const handleChange = event => {
        const { name, value } = event.target;

        setUserCredentials({ ...userCredentials, [name]:value });
    }
    return(
        <SignUpContainer>
            <SignUpTitle>I do not have a account</SignUpTitle>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput 
                    name='displayName'
                    type='text'
                    label='Display Name'
                    value={displayName}
                    onChange={handleChange}
                    required
                />
                <FormInput 
                    name='email'
                    type='email'
                    label='Email'
                    value={email}
                    onChange={handleChange}
                    required
                />
                <FormInput 
                    name='password'
                    type='password'
                    label='Password'
                    value={password}
                    onChange={handleChange}
                    required
                />
                <FormInput 
                    name='confirmPassword'
                    type='password'
                    label='ConFrim PassWord'
                    value={confirmPassword}
                    onChange={handleChange}
                    required
                />
                <CustomButton type='submit'>
                    SIGN UP
                </CustomButton>
            </form>
        </SignUpContainer>
    )
}

export const mapDispatchToProps = dispatch => ({
    signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp);