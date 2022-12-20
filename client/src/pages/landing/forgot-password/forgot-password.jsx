import React from 'react';
import { Outlet } from 'react-router-dom';
import { ForgotPasswordContainer } from './forgot-password.styles';

function ForgotPassword() {

    return (
        <ForgotPasswordContainer>
            <Outlet />
        </ForgotPasswordContainer>
    )
}

export default ForgotPassword;