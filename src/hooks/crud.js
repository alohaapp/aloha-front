/* A module that handles CRUDL stores for react components
* Upon invocation of createCRUDHook(endpoint), a hook function
* is returned which, on call, returns an object with the following
* shape:
* {
*  store: [] // array of entities
*  loading: bool // if an operation is executing
*  fetch: fn() // fetches the list of objects
*  create: fn(entity) // creates a new entity
*  read: fn(id) // reads entity with specified id
*  update: fn(entity) // updates the entity
*  delete: fn(id) // deletes the entity
* }
*/
import { useReducer } from "react";
import { get, post, put, del } from "./api.js";

const CREATE = "CREATE";
const READ = "READ";
const UPDATE = "UPDATE";
const DELETE = "DELETE";
const LIST = "LIST";
const LOADING = "LOADING";

/*
* Given an array of objects with an id and a new object
* return a copy of this array with the new object in place
* of any with a matching id.
*/
const arrayUpdate = (array, update) => {
  const updated = [...array];
  const index = array.findIndex(element => element.id === update.id);
  if (index !== -1) {
    updated[index] = update;
  } else {
    updated.push(update);
  }
  return updated;
};

/*
* Given an id and an array of objects with ids, returns
* a copy of the array with the element of matching id removed.
*/
const arrayDelete = (array, id) => {
  const updated = [...array];
  const index = array.findIndex(element => element.id === id);
  updated.splice(index, 1);
  return updated;
};

/*
* Returns a reducer that, for a given entity name, will recognize CRUD actions
* on that entity and update state accordingly
*/
const crudReducer = (state, { type, payload }) => {
  switch (type) {
    case LOADING:
      return { ...state, loading: payload };
    case CREATE:
      return { store: state.store.concat(payload), loading: false };
    case READ:
      return {
        store: arrayUpdate(state.store, payload),
        loading: false
      };
    case UPDATE:
      return {
        store: arrayUpdate(state.store, payload),
        loading: false
      };
    case DELETE:
      return {
        store: arrayDelete(state.store, payload),
        loading: false
      };
    case LIST:
      return { store: payload, loading: false };
    default:
      return state;
  }
};

const actionCreate = (dispatch, endpoint) => entity => {
  dispatch({ type: LOADING, payload: true });
  post({ url: endpoint, options: { body: entity } }).then(response => {
    dispatch({ type: CREATE, payload: response });
  });
};

const actionRead = (dispatch, endpoint) => id => {
  dispatch({ type: LOADING, payload: true });
  get({ url: `${endpoint}/${id}` }).then(response => {
    dispatch({ type: READ, payload: response });
  });
};

const actionUpdate = (dispatch, endpoint) => entity => {
  const { id, ...payload } = entity;
  dispatch({ type: LOADING, payload: true });
  put({ url: `${endpoint}/${id}`, options: { body: payload } }).then(
    response => {
      dispatch({ type: UPDATE, payload: response });
    }
  );
};

const actionDelete = (dispatch, endpoint) => id => {
  dispatch({ type: LOADING, payload: true });
  del({ url: `${endpoint}/${id}` }).then(response => {
    dispatch({ type: DELETE, payload: response });
  });
};

const actionList = (dispatch, endpoint) => entity => {
  dispatch({ type: LOADING, payload: true });
  get({ url: endpoint }).then(response => {
    dispatch({ type: LIST, payload: response });
  });
};

export default function createCRUDHook(entityEndpoint) {
  const initialState = {
    store: null,
    loading: false
  };
  return function useCRUD() {
    const [{ store, loading }, dispatch] = useReducer(
      crudReducer,
      initialState
    );

    return {
      store,
      loading,
      create: actionCreate(dispatch, entityEndpoint),
      read: actionRead(dispatch, entityEndpoint),
      update: actionUpdate(dispatch, entityEndpoint),
      del: actionDelete(dispatch, entityEndpoint),
      fetch: actionList(dispatch, entityEndpoint)
    };
  };
}
