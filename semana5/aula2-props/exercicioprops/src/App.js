import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Caio Edurdo Braga B. dos Santos
        </p>
        <p>
          Estudante Web Full Stack
        </p>
      </header>
      <section className="Main">
        <section className="componente1">
          <h3>
          Dados Pessoais
          </h3>
          <p>
            Caio Eduardo Braga, formado em produção fonográfica, mudei de área, estudei marketing digital, trabalhei em agência de publicidade, a agora resolvi entrar de vez no ramo de tecnologia.
          </p>
        </section>
        <section className="componente2">
          <p>
            Email: caioeduardobbsantos@gmail.com
          </p>
        </section>
        <section className="compenente3">
          <h3>
            Experiências Profissionais
          </h3>
          <p>
            Aluno Web Full Stack da Future4
          </p>
          <p>
            Cursos de Formação em Google Marketing e Formação em Mídias Sociais - M2BR Academy
          </p>
          <p>
            Analista de Data Intelligence na Agência3
          </p>
        </section>
      </section>
    </div>
  );
}

export default App;
