import React, { useState } from 'react';
import api from './services/api';
import './App.css';

import logo from './assets/baia.png';

function App() {
  const [email, setEmail] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();  

    const response = await api.post('/sessions', { email });

    console.log(response); 
  }

  return (
    <div className="container">
      <img src={logo} alt="logo do baia"/>

      <div className="content">
        <p>
          A plataforma mais <strong>ultra</strong>, mega power, <strong>top das galáxias</strong> para alugueis na temporada.
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-mail *</label>
          <input 
          type="email" 
          id="email" 
          placeholder="Passa o e-mail :P" 
          value={email }
          onChange={event => setEmail(event.target.value)}
          />

          <button className="btn" type="submit">Entre</button>
        </form>
      </div>
    </div>

  );
}

export default App;
