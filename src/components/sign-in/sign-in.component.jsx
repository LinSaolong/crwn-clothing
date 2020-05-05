import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions'

import {
    SignInContainer,
    SignInTitle,
    SignInButtonContainer
} from './sign-in.styles';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {

    const [userCredentails, setCredentails ] = useState({email: '', password: ''});
    
    const { email, password } = userCredentails;

    const handleSubmit = async event => {
        event.preventDefault();

        emailSignInStart(email, password);

    }

    const handleChange = (event) => {
        const { value, name } = event.target
        setCredentails({ ...userCredentails, [name]:value })
    }

    return(
        <SignInContainer>
            <SignInTitle>I already have an account</SignInTitle>
            <span>Sign in with your email and password</span>

            <form onSubmit={ handleSubmit }>
                <FormInput
                    name = 'email'
                    type='email'
                    value={email}
                    required
                    handleChange = {handleChange}
                    label='Email'
                />
                <FormInput 
                    name='password'
                    type='password'
                    value={password}
                    required
                    handleChange = {handleChange}
                    label='Password'
                />
                <SignInButtonContainer>
                    <CustomButton type='submit'>
                        sign in
                    </CustomButton>
                    <CustomButton type='button' 
                    onClick={ googleSignInStart } 
                    isGoogleSignIn
                    >
                        sign in with google
                    </CustomButton>
                </SignInButtonContainer>
            </form>
        </SignInContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: ( email, password ) => dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);