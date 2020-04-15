import React from 'react';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import {
    SignInContainer,
    SignInTitle,
    SignInButtonContainer
} from './sign-in.styles';

class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            auth.signInWithEmailAndPassword( email, password )
            this.setState({email: '', password: ''})
        } catch(error) {
            console.log(error);
        }
    }

    handleChange = (event) => {
        const { value, name } = event.target
        this.setState({ [name]:value })
    }

    render (){
        return(
            <SignInContainer>
                <SignInTitle>I already have an account</SignInTitle>
                <span>Sign in with your email and password</span>

                <form onSubmit={ this.handleSubmit }>
                    <FormInput
                        name = 'email'
                        type='email'
                        value={this.state.email}
                        required
                        handleChange = {this.handleChange}
                        label='Email'
                    />
                    <FormInput 
                        name='password'
                        type='password'
                        value={this.state.password}
                        required
                        handleChange = {this.handleChange}
                        label='Password'
                    />
                    <SignInButtonContainer>
                        <CustomButton type='submit'>
                            sign in
                        </CustomButton>
                        <CustomButton onClick={ signInWithGoogle } isGoogleSignIn>
                            sign in with google
                        </CustomButton>
                    </SignInButtonContainer>
                </form>
            </SignInContainer>
        )
    }
}

export default SignIn;