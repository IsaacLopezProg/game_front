import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

export default function Auth({ setTitleModal, setShowModal }) {


    const [showLogin, setShowLogin] = useState(true)

    const showRegisterForm = () => {
        setShowLogin(false);
        setTitleModal('Crear cuenta');
    }

    const showLoginForm = () => {
        setShowLogin(true);
        setTitleModal('Iniciar Sesion');
    }

    // const closeModal = () => 


    return showLogin ? <LoginForm showRegisterForm={showRegisterForm} setShowModal={setShowModal} /> : <RegisterForm showLoginForm={showLoginForm} />
}
