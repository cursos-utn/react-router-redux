import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Página principal</h1>
      <Link to="/posts">Ver posteos</Link>
    </div>
  );
}

export default Home;
