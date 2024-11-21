import React, { useState, useEffect } from 'react';
import { ArrowRight, User, Brain, Zap, Book, Clock, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom'; // Para navegação
import logo3 from '../img/logo3.jpg';
import '../Style/explorar.css';

const Explorar = () => {
  const [activeSection, setActiveSection] = useState('pesquisa');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 1000);
  }, []);

  const sections = {
    pesquisa: {
      title: 'Linhas de Pesquisa',
      description: 'Descubra nossos campos de investigação científica e inovação',
      items: [
        {
          icon: <Brain color="#8A2BE2" size={40} />,
          title: 'Neurociência Feminina',
          subtitle: 'Mapeando as complexidades cognitivas e emocionais',
        },
        {
          icon: <Zap color="#D8BFD8" size={40} />,
          title: 'Tecnologia & Gênero',
          subtitle: 'Desenvolvendo soluções inovadoras para desafios contemporâneos',
        },
        {
          icon: <Book color="#8A2BE2" size={40} />,
          title: 'Saúde Interdisciplinar',
          subtitle: 'Abordagens integradas para bem-estar holístico',
        },
      ],
    },
    comunidade: {
      title: 'Comunidade Acadêmica',
      description: 'Networking, eventos e oportunidades de crescimento',
      items: [
        {
          icon: <Clock color="#8A2BE2" size={40} />,
          title: 'Eventos & Workshops',
          subtitle: 'Conexões que transformam e inspiram',
        },
        {
          icon: <Trophy color="#D8BFD8" size={40} />,
          title: 'Mentoria Acadêmica',
          subtitle: 'Orientação personalizada para desenvolvimento profissional',
        },
      ],
    },
  };

  return (
    <div className={`body-comunidade ${isLoaded ? '' : 'hidden'}`}>
      <nav className="nav-bar">
        <div className="logo-container">
          <img src={logo3} alt="Logo" className="logo-img" />
        </div>
        <div className="menu-container">
          <Link to="/home" className="menu-item">Home</Link>
          <Link to="/comunidade" className="menu-item">Comunidade</Link>
          <Link to="/explorar" className="menu-item">Explorar</Link>
          <div className="user-icon">
            <User color="white" />
          </div>
        </div>
      </nav>

      <div className="hero-elegant">
        <div className="hero-content-grid">
          <div className="hero-text-section">
            <h1 className="hero-title">Explore o Seu Corpo</h1>
            <p className="hero-subtitle">Descoberta, Conhecimento, Transformação</p>
            <div className="section-toggle">
              {Object.keys(sections).map((key) => (
                <button
                  key={key}
                  className={`section-toggle-btn ${activeSection === key ? 'active' : ''}`}
                  onClick={() => setActiveSection(key)}
                >
                  {sections[key].title}
                </button>
              ))}
            </div>
          </div>

          <div className="explorar-content">
            <h2 className="section-heading">{sections[activeSection].title}</h2>
            <p className="section-description">{sections[activeSection].description}</p>

            <div className="explorar-grid">
              {sections[activeSection].items.map((item, index) => (
                <div key={index} className="explorar-card">
                  {item.icon}
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="quiz-section">
        <div className="quiz-content">
          <h2>Descubra Seu Potencial Acadêmico</h2>
          <p>Um quiz interativo para explorar suas áreas de interesse e desenvolvimento</p>
          <div className="quiz-placeholder">
            <Link to="/quiz" className="cta-primary">
              Iniciar Quiz <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>

      <footer className="elegant-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Navegação</h4>
            <Link to="/home">Home</Link>
            <Link to="/comunidade">Comunidade</Link>
            <Link to="/explorar">Explorar</Link>
          </div>
          <div className="footer-section">
            <h4>Contato</h4>
            <p>📧 academico@mybody.org.br</p>
            <p>📞 +55 (00) 00000-0000</p>
          </div>
          <div className="footer-copyright">
            <p>© 2024 MyBody. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Explorar;
