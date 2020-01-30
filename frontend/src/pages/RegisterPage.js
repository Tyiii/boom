import React from 'react';
import SignUp from '../components/SignUp';
import RegisterTitle from '../components/RegisterTitle';


function RegisterPage()
{
    return(
        <div class="container-fluid">
            <RegisterTitle />
            <SignUp />
        </div>
    );
};

export default RegisterPage;