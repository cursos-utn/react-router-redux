import React from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

function PostsVer() {
  const params = useParams();
  const listado = useSelector((state) => state.posteos);
  const [posteo, setPosteo] = React.useState({});

  React.useEffect(() => {
    // Se puede realizar una peticion al servidor para obtener la última version o
    // o utilizar los datos del store (vamos a usar esta última para tener una versión)
    // diferente a la realizada anteriormente
    if (!listado || listado.length==0) return;
      console.log(listado)
    setPosteo(listado.find((item) => item.id == params.id));
    // En caso de no encontrarlo en el listado, se puede solicitar al servidor
  }, [params, listado]);

  return (
    <>
      <h1>Ver un Posteo</h1>
      <p>Ejemplo de recepción de parámetros por medio de la URL</p>
      <h2>{posteo.title}</h2>
      <h3>{posteo.body}</h3>
      <Link to="/posts">Volver al listado de Posts</Link>
    </>
  );
}

export default PostsVer;
