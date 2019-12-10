import React from 'react';
import './App.css';
import './input.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Instaex</h1>
      </header>
      <section className="App-main">
        <div className="App-posts">
          <h3>Foto</h3>
        </div>
        <button onClick>Curtir</button>
          <button onClick>Comentar</button>
      </section>
    </div>
  );
}

export default App;
