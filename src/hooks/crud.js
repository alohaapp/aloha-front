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
import { useContext } from "react";
import MessageContext from "../components/MessageContext";
import {
  WORKER_CREATED_OK,
  FLOOR_CREATED_OK,
  OFFICE_CREATED_OK,
  WORKER_UPDATED_OK,
  FLOOR_UPDATED_OK,
  OFFICE_UPDATED_OK,
  WORKER_DELETED_OK,
  FLOOR_DELETED_OK,
  OFFICE_DELETED_OK
} from "../constants";

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
    const { setMessage, setIsVisible } = useContext(MessageContext);

    const actionCreate = (dispatch, endpoint) => entity => {
      dispatch({ type: LOADING, payload: true });
      const promise = post({
        url: endpoint,
        options: { body: JSON.stringify(entity) }
      });
      promise
        .then(response => {
          const endpointType = endpoint.substring(1);
          switch (endpointType) {
            case "Workers":
              setMessage(WORKER_CREATED_OK);
              setIsVisible(true);
              break;
            case "Floors":
              setMessage(FLOOR_CREATED_OK);
              setIsVisible(true);
              break;
            case "Offices":
              setMessage(OFFICE_CREATED_OK);
              setIsVisible(true);
              break;
            default:
              break;
          }
          dispatch({ type: CREATE, payload: response });
        })
        .catch(error => {
          setMessage(`${error.status} ${error.statusText}`);
          setIsVisible(true);
        });
      return promise;
    };

    const actionRead = (dispatch, endpoint) => id => {
      dispatch({ type: LOADING, payload: true });
      const promise = get({ url: `${endpoint}/${id}` });
      promise
        .then(response => {
          dispatch({ type: READ, payload: response });
        })
        .catch(error => {
          setMessage(`${error.status} ${error.statusText}`);
          setIsVisible(true);
        });
      return promise;
    };

    const actionUpdate = (dispatch, endpoint) => entity => {
      const { id } = entity;
      dispatch({ type: LOADING, payload: true });
      const promise = put({
        url: `${endpoint}/${id}`,
        options: { body: JSON.stringify(entity) }
      });
      promise
        .then(response => {
          const endpointType = endpoint.substring(1);
          switch (endpointType) {
            case "Workers":
              setMessage(WORKER_UPDATED_OK);
              setIsVisible(true);
              break;
            case "Floors":
              setMessage(FLOOR_UPDATED_OK);
              setIsVisible(true);
              break;
            case "Offices":
              setMessage(OFFICE_UPDATED_OK);
              setIsVisible(true);
              break;
            default:
              break;
          }
          dispatch({ type: UPDATE, payload: response });
        })
        .catch(error => {
          setMessage(`${error.status} ${error.statusText}`);
          setIsVisible(true);
        });
      return promise;
    };

    const actionDelete = (dispatch, endpoint) => id => {
      dispatch({ type: LOADING, payload: true });
      const promise = del({ url: `${endpoint}/${id}` });
      promise
        .then(() => {
          const endpointType = endpoint.substring(1);
          switch (endpointType) {
            case "Workers":
              setMessage(WORKER_DELETED_OK);
              setIsVisible(true);
              break;
            case "Floors":
              setMessage(FLOOR_DELETED_OK);
              setIsVisible(true);
              break;
            case "Offices":
              setMessage(OFFICE_DELETED_OK);
              setIsVisible(true);
              break;
            default:
              break;
          }
          dispatch({ type: DELETE, payload: id });
        })
        .catch(error => {
          setMessage(`${error.status} ${error.statusText}`);
          setIsVisible(true);
        });
      return promise;
    };

    const actionList = (dispatch, endpoint) => entity => {
      dispatch({ type: LOADING, payload: true });
      const promise = get({ url: endpoint });
      promise
        .then(response => {
          dispatch({ type: LIST, payload: response });
        })
        .catch(error => {
          setMessage(`${error.status} ${error.statusText}`);
          setIsVisible(true);
        });
      return promise;
    };

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
