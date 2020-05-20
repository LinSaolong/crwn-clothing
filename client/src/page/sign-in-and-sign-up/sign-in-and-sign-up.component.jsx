import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import {
    SignInAndSignOutPageContainer
} from './sign-in-and-sign-out.styles';

const SignInAndSignUpPage = () => (
    <SignInAndSignOutPageContainer>
        <SignIn />
        <SignUp />
    </SignInAndSignOutPageContainer>
);

export default SignInAndSignUpPage;