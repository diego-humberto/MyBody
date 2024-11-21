import React from 'react';

function Cadastro() {
  return (
    <div>
      <h2>Cadastro</h2>
      <form>
        <input type="text" placeholder="Nome" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Senha" />
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}

export default Cadastro;
