import React from 'react';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import './sign-in.style.scss';

class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()

        this.setState({email: '', password: ''})
    }

    handleChange = (event) => {
        const { value, name } = event.target
        this.setState({ [name]:value })
    }

    render (){
        return(
            <div className='sign-in'>
                <h2 className='title'>I already have an account</h2>
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
                    <div className='buttons'>
                        <CustomButton type='submit'>
                            sign in
                        </CustomButton>
                        <CustomButton onClick={ signInWithGoogle } isGoogleSignIn>
                            sign in with google
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;