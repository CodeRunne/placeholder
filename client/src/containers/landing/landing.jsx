import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { APP_NAME } from '../../config';

// Pages
import Home from '../../pages/landing/home/home';
import HowToUse from '../../pages/landing/how-to-use/how-to-use';
import Services from '../../pages/landing/services/services';
import Api from '../../pages/landing/api/api';
import Login from '../../pages/landing/login/login';
import Register from '../../pages/landing/register/register';
import ConfirmMail from '../../pages/landing/confirm-mail/confirm-mail';
import ForgotPassword from '../../pages/landing/forgot-password/forgot-password';
import ForgotPasswordRequest from '../../pages/landing/forgot-password-request/forgot-password-request';
import ResetPassword from '../../pages/landing/reset-password/reset-password';

// Components
import { Navigation, NoMatch, AuthRoute, SEO } from '../../components';

function Landing() {
    return (
        <>
            {/* SEO */}
            <SEO
                title={APP_NAME}
                description="How much does culture influence creative thinking?"
                type="article"
            />

            {/* Navigation */}
            <Navigation />

            <Routes>
                <Route index element={<Home />} />
                <Route path="how-to-use" element={<HowToUse />} />
                <Route path="services" element={<Services />} />
                <Route path="api" element={<Api />} />
                <Route path="login" element={
                    <AuthRoute>
                        <Login />
                    </AuthRoute>
                }/>
                <Route path="register" element={
                    <AuthRoute>
                        <Register />
                    </AuthRoute>
                }/>
                <Route path="confirm-mail" element={<ConfirmMail />}/>
                <Route path="/account/password" element={<ForgotPassword />}>
                    <Route index element={<ForgotPasswordRequest />} />
                    <Route path="reset/:token" element={<ResetPassword />} />
                </Route>
                <Route path="*" element={<NoMatch path="/" style={{ left: '50%' }} />} />
            </Routes>
        </>
    );
}

export default Landing;