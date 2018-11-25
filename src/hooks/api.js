/* TODO: Temporary fetch module to get the CRUD working */
import { API_URL } from "../constants";

async function post({ url, options }) {
  let response = await fetch(API_URL + url, { method: "POST", ...options });
  return response.json();
}

async function put({ url, options }) {
  let response = await fetch(API_URL + url, { method: "PUT", ...options });
  return response.json();
}

async function get({ url, options }) {
  let response = await fetch(API_URL + url, { method: "GET", ...options });
  return response.json();
}

async function del({ url, options }) {
  return fetch(API_URL + url, { method: "DELETE", ...options });
}

export { post, put, get, del };
