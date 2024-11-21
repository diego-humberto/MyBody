import React, { useState } from 'react';
import { FaLock, FaUser, FaEnvelope, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';
import logo3 from '../img/logo3.jpg';
import '../Style/login.css';

function Cadastro() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePasswordVisibility = (type) => {
        if (type === 'password') {
            setShowPassword(!showPassword);
        } else {
            setShowConfirmPassword(!showConfirmPassword);
        }
    };

    return (
        <div className="cadastro-elegant-container">
            <div className="cadastro-wrapper">
                <div className="cadastro-header">
                    <img src={logo3} alt="MyBody Logo" className="cadastro-logo" />
                    <h1>Crie sua Conta</h1>
                    <p>Inicie sua jornada de descoberta e conhecimento</p>
                </div>

                <form className="cadastro-form">
                    <div className="input-elegant-group">
                        <label htmlFor="nome">Nome Completo</label>
                        <div className="input-elegant-wrapper">
                            <FaUser className="input-icon" />
                            <input 
                                type="text" 
                                id="nome" 
                                placeholder="Insira seu nome completo" 
                                required 
                            />
                        </div>
                    </div>

                    <div className="input-elegant-group">
                        <label htmlFor="email">Email</label>
                        <div className="input-elegant-wrapper">
                            <FaEnvelope className="input-icon" />
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
                                placeholder="Crie uma senha forte" 
                                required 
                            />
                            <button 
                                type="button" 
                                className="password-toggle"
                                onClick={() => togglePasswordVisibility('password')}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                    </div>

                    <div className="input-elegant-group">
                        <label htmlFor="confirm-password">Confirmar Senha</label>
                        <div className="input-elegant-wrapper">
                            <FaLock className="input-icon" />
                            <input 
                                type={showConfirmPassword ? "text" : "password"} 
                                id="confirm-password" 
                                placeholder="Repita sua senha" 
                                required 
                            />
                            <button 
                                type="button" 
                                className="password-toggle"
                                onClick={() => togglePasswordVisibility('confirm')}
                            >
                                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                    </div>

                    <button type="submit" className="cadastro-button">
                        Cadastrar
                    </button>

                    <div className="login-redirect-section">
                        <p>
                            Já tem uma conta? 
                            <Link to="/login" className="login-link">
                                  Entrar
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Cadastro;