import React, { useEffect, useState } from 'react';
import { Search, MessageSquare, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../Style/comunidade.css';
import logo3 from '../img/logo3.jpg';


const Comunidade = () => {
  const [isLoaded, setIsLoaded] = useState(false);


  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoaded(true);
    }, 100);


    return () => clearTimeout(timeout);
  }, []);


  const questions = [
    {
      avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
      title: 'Assédio na Rua',
      desc: 'Sofri assédio no centro do recife, alguém pode me ajudar judicialmente?'
    },
    {
      avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
      title: 'Dúvida sobre contraceptivos',
      desc: 'Alguém pode me explicar a diferença entre IST e DST? Pesquisei mas não entendi.'
    },
    {
      avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
      title: 'Vagas de Empregos para mulheres',
      desc: 'Meninas, deem uma olhada nessas vagas de empregos que estão sendo oferecidas na minha empresa'
    }
  ];


  const groups = [
    {
      title: 'Mulheres em STEM',
      desc: 'Comunidade dedicada a promover e apoiar mulheres em Ciências, Tecnologia, Engenharia e Matemática',
      members: 150
    },
    {
      title: 'Mulheres Ativas - PE',
      desc: 'Grupo de mulheres que se organizam para debaterem a segurança das mulheres nas ruas de Pernambuco',
      members: 200
    }
  ];


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


      <div className="container-comunidade">
        <h1>Rede Acadêmica</h1>


        <div className="search-box">
          <Search className="icon" />
          <input
            type="text"
            placeholder="Busque grupos, pesquisas e oportunidades"
          />
        </div>


        <div className="content-grid">
          <div className="questions-section">
            <h2>Discussões em Destaque</h2>
            {questions.map((question, index) => (
              <div key={index} className="question-item">
                <div className="avatar">
                  <img src={question.avatar} alt="User Avatar" />
                </div>
                <div className="question-content">
                  <h3>{question.title}</h3>
                  <p>{question.desc}</p>
                </div>
              </div>
            ))}
          </div>


          <div className="groups-section">
            {groups.map((group, index) => (
              <div key={index} className="group-card">
                <h2>{group.title}</h2>
                <p>{group.desc}</p>
                <button>Junte-se ao grupo ({group.members} membros)</button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer className="elegant-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Navegação</h4>
            <a href="/home">Home</a>
            <a href="/comunidade">Comunidade</a>
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


export default Comunidade;