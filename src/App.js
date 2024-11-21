import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Pages/home';
import Cadastro from './Pages/cadastro';
import Login from './Pages/login';
import Comunidade from './Pages/comunidade';
import Explorar from './Pages/explorar';
import QuizQuestion from './Pages/quizquestion'; // Importando o componente do Quiz

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* Cabeçalho com navegação */}
        <header className="App-header">
          <nav>
            <Link to="/home">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/cadastro">Cadastro</Link>
            <Link to="/comunidade">Comunidade</Link>
            <Link to="/explorar">Explorar</Link>
            <Link to="/quiz">Quiz</Link> {/* Link para a página do quiz */}
          </nav>
        </header>

        {/* Rotas da aplicação */}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/comunidade" element={<Comunidade />} />
          <Route path="/explorar" element={<Explorar />} />
          <Route path="/quiz" element={<QuizQuestion />} /> {/* Nova rota para o quiz */}
          <Route path="/" element={<Explorar />} /> {/* Rota inicial */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
