import React, { useState } from 'react';
import { FaLock, FaUser, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';
import logo3 from '../img/logo3.jpg';
import '../Style/login.css';

function Login() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="login-elegant-container">
            <div className="login-wrapper">
                <div className="login-header">
                    <img src={logo3} alt="MyBody Logo" className="login-logo" />
                    <h1>Faça login</h1>
                    <p>Atenção ao preencher a conta</p>
                </div>

                <form className="login-form">
                    <div className="input-elegant-group">
                        <label htmlFor="email">Email</label>
                        <div className="input-elegant-wrapper">
                            <FaUser className="input-icon" />
                            <input 
                                type="email" 
                                id="email" 
                                placeholder="Insira seu email" 
                                required 
                            />
                        </div>
                    </div>

                    <div className="input-elegant-group">
                        <label htmlFor="password">Senha</label>
                        <div className="input-elegant-wrapper">
                            <FaLock className="input-icon" />
                            <input 
                                type={showPassword ? "text" : "password"} 
                                id="password" 
                                placeholder="Insira sua senha" 
                                required 
                            />
                            <button 
                                type="button" 
                                className="password-toggle"
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                    </div>

                    <div className="login-options">
                        <label className="checkbox-container">
                            <input type="checkbox" />
                            <span>Lembrar de mim</span>
                        </label>
                        <Link to="/recuperar-senha" className="forgot-password">
                            Esqueceu a senha?
                        </Link>
                    </div>

                    <button type="submit" className="login-button">
                        Entrar
                    </button>

                    <div className="login-register-section">
                        <p>
                            Não tem uma conta? 
                            <Link to="/cadastro" className="register-link">
                                  Cadastre-se
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;