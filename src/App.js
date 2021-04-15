import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PostsListado from './posts/PostsListado.jsx';
import PostsVer from './posts/PostsVer.jsx';
import PostsAgregar from './posts/PostsAgregar.jsx';
import Home from './Home.jsx';
import { useDispatch } from 'react-redux';
import axios from 'axios';

function App() {
  const dispatch = useDispatch();

  React.useEffect(async () => {
    const respuesta = await axios.get('https://jsonplaceholder.typicode.com/posts');
    dispatch({ type: 'AGREGAR_LISTADO_POSTEOS', listado: respuesta.data });
  }, []);

  return (
    <div>
      <h1>Aplicación de posteos</h1>
      <p>
        En la ruta / se hace la petición de los posteos al servidor, para que sea más rápida las operaciones posteriores
      </p>
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/posts" component={PostsListado} />
        <Route exact path="/posts/new" component={PostsAgregar} />
        <Route exact path="/posts/view/:id" component={PostsVer} />
      </Router>
    </div>
  );
}

export default App;
