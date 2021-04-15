import { createStore } from 'redux';

const estadoInicial = {
  posteos: [],
};

function reducer(state = estadoInicial, action) {
  const nuevoState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case 'AGREGAR_UN_POSTEO':
      nuevoState.posteos.push(action.posteo);
      return nuevoState;
    case 'AGREGAR_LISTADO_POSTEOS':
      nuevoState.posteos = action.listado;
      return nuevoState;
    case 'REMOVER_POSTEO':
      nuevoState.posteos = nuevoState.posteos.filter((unElemento) => unElemento.id != action.idElementoARemover);
      return nuevoState;
    default:
      return state;
  }
}

export default createStore(reducer);
