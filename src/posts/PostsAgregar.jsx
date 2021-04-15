import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';

function PostsAgregar(props) {
  const [form, setForm] = React.useState({ title: '', body: '' });

  const dispatch = useDispatch();
  const handleTitleChange = (e) => {
    const newForm = JSON.parse(JSON.stringify(form));
    newForm.title = e.target.value;
    setForm(newForm);
  };
  const handleBodyChange = (e) => {
    const newForm = JSON.parse(JSON.stringify(form));
    newForm.body = e.target.value;
    setForm(newForm);
  };

  const handleCancel = () => {
    props.history.push('/posts');
  };

  const handleSave = async () => {
    try {
      const serverResponse = await axios.post(`https://jsonplaceholder.typicode.com/posts`, form);
      dispatch({ type: 'AGREGAR_UN_POSTEO', posteo: serverResponse.data });
      props.history.push('/posts');
    } catch (e) {
      // Informar al usuario que no se pudo borrar
    }
  };

  return (
    <div>
      <div>
        <label>Titulo</label>
        <input type="text" value={form.title} onChange={handleTitleChange} />
      </div>
      <div>
        <label>Cuerpo</label>
        <input type="text" value={form.body} onChange={handleBodyChange} />
      </div>
      <div>
        <button onClick={handleSave}>Guardar</button>
        <button onClick={handleCancel}>Cancelar</button>
        <p>El nuevo posteo se va a agregar al final del listado</p>
      </div>
    </div>
  );
}

export default PostsAgregar;
