import React, { useState, useEffect } from 'react';
import { ArrowRight, Activity, Heart, Users, BookOpen } from 'lucide-react';
import '../Style/home.css';
import juntas from "../img/juntas.png";
import outubrorosa from "../img/outubrorosa.png";
import mulherti from "../img/mulherti.png";
import logo3 from '../img/logo3.jpg';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimated, setIsAnimated] = useState(false);
  const navigate = useNavigate();

  const slides = [
    { 
      title: "Primeira mulher formada em IA no Brasil quer promover conscientização sobre a tecnologia", 
      text: "Heloisy Pereira Rodrigues, 24 anos, fez história ao se tornar a primeira mulher brasileira...", 
      image: mulherti,
      category: "Tecnologia"
    },
    { 
      title: "Outubro Rosa chama a atenção das mulheres sobre a importância da prevenção no combate ao câncer de mama", 
      text: "O câncer de mama é o tipo que mais acomete as mulheres no Brasil, segundo dados do...", 
      image: outubrorosa,
      category: "Bem-Estar"
    },
    { 
      title: "Juntas Festival une talks inspiradoras e shows com mulheres poderosas", 
      text: "Nesta sexta-feira (15), o Juntas Festival agitou o Parque Villa Lobos, em…", 
      image: juntas,
      category: "Evento"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`body-home ${isAnimated ? 'animated' : ''}`}>
      <nav className="nav-bar">
        <div className="logo-container">
          <img src={logo3} alt="Logo" className="logo-img" />
        </div>
        <div className="menu-container">
          <Link to="/home" className="menu-item">Home</Link>
          <Link to="/comunidade" className="menu-item">Comunidade</Link>
          <Link to="/explorar" className="menu-item">Explorar</Link>
          <div className="user-icon">
            <Users color="white" />
          </div>
        </div>
      </nav>

      <div className="hero-elegant">
        <div className="hero-content-grid">
          <div className="hero-text-section">
            <h1 className="hero-title">Explorando o Corpo e a Mente Feminina</h1>
            <p className="hero-subtitle">Conexão, Conhecimento e Empoderamento</p>
            <div className="cta-buttons">
              <button 
                className="cta-primary"
                onClick={() => navigate('/explorar')}
              >
                Iniciar Jornada <ArrowRight size={18} />
              </button>
              <button 
                className="cta-secondary"
                onClick={() => {
                  const section = document.getElementById("mission-section");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Nosso Propósito <BookOpen size={18} />
              </button>
            </div>
          </div>

          <div className="carousel-elegant">
            <div className="carousel-wrapper">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`carousel-item ${index === currentSlide ? 'active' : ''}`}
                  style={{ backgroundImage: `url(${slide.image})` }}
                >
                  <div className="slide-overlay">
                    <span className="slide-category">{slide.category}</span>
                    <h3 className="slide-title">{slide.title}</h3>
                    <p className="slide-description">{slide.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="carousel-indicators">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div id="mission-section" className="mission-section">
        <div className="mission-content">
          <div className="mission-grid">
            <div className="mission-card">
              <Activity size={40} color="#8A2BE2" />
              <h3>Saúde Feminina</h3>
              <p>Abordagem para cuidar da saúde física e mental</p>
            </div>
            <div className="mission-card">
              <Heart size={40} color="#D8BFD8" />
              <h3>Empoderamento</h3>
              <p>Fortalecer a presença de mulheres em todos os espaços</p>
            </div>
            <div className="mission-card">
              <Users size={40} color="#8A2BE2" />
              <h3>Networking</h3>
              <p>Construir conexões com mulheres ao redor do Brasil</p>
            </div>
          </div>
        </div>
      </div>

      <div className="knowledge-section">
        <h2 className="section-title">Áreas de Expertise</h2>
        <div className="knowledge-grid">
          <div className="knowledge-card">
            <div className="card-icon">🔬</div>
            <div className="card-content">
              <h3>Pesquisa Científica</h3>
              <p>Monografias sobre o empoderamento e o corpo feminino</p>
            </div>
          </div>
          <div className="knowledge-card">
            <div className="card-icon">💡</div>
            <div className="card-content">
              <h3>Relacionamentos </h3>
              <p>Aprenda sobre consentimento, respeito e comunicação em relacionamentos. </p>
            </div>
          </div>
        </div>
      </div>

      <footer className="elegant-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Navegação </h4>
            <a href="/home">Home</a>
            <a href="/comunidade"> Comunidade</a>
            <a href="/explorar">Explorar</a>
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

export default Home;
