import React from 'react';
import Styled from 'styled-components';
import './App.css';


const addTarefa = () => {
  return {
    type: 'ADD_TAREFA',
  }
}

const marcaTodas = () => {
  return {
    type: 'MARCA_TODAS',
  }
}

const marcaComoPendente = () => {
  return {
    type: 'MARCA_COMO_PENDENTE',
  }
}

const marcaComoCompleta = () => {
  return {
    type: 'MARCA_COMO_COMPLETA',
  }
}

const filtroPendente = () => {
  return {
    type: 'FILTRO_PENDENTE',
  }
}

const filtroCompleta = () => {
  return {
    type: 'FILTRO_COMPLETA',
  }
}

function App() {
  return (
    <div>
      <h1>4Task</h1>
      <input placeholder="O que tem que ser feito?"></input>
      <hr />
      <button>Marcar todas como completas</button>
      <button>Todas</button>
      <button>Pendentes</button>
      <button>Completas</button>

      
    </div>
  );
}

export default App;
