import React from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function PostsListado() {
  const dispatch = useDispatch();
  const listado = useSelector((state) => state.posteos);

  const handleBorrarPosteo = async (idABorrar) => {
    // Hacer peticion al servidor y si la peticion es correcta borrar del store
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${idABorrar}`);
      dispatch({ type: 'REMOVER_POSTEO', idElementoARemover: idABorrar });
    } catch (e) {
      // Informar al usuario que no se pudo borrar
    }
  };

  return (
    <>
      <h1>Listado de Posteos</h1>
      <p>Ejemplo de paso de parámetros por medio de una ruta/URL a otro componente</p>
      <Link to="/posts/new">Agregar un posteo</Link>
      <ul>
        {listado.map((unPost) => (
          <li key={unPost.id}>
            <Link to={'/posts/view/' + unPost.id}>{unPost.title}</Link>{' '}
            <button onClick={() => handleBorrarPosteo(unPost.id)}>Borrar</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default PostsListado;
