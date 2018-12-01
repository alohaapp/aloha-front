/* TODO: Temporary fetch module to get the CRUD working */
import { API_URL } from "../constants";

async function post({ url, options }) {
  try {
    let response = await fetch(API_URL + url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      ...options
    });
    switch (response.status) {
      case 200:
        return response.json();
      default:
        throw response;
    }
  } catch (e) {
    throw e;
  }
}

async function put({ url, options }) {
  try {
    let response = await fetch(API_URL + url, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      ...options
    });
    switch (response.status) {
      case 200:
        return response.json();
      default:
        throw response;
    }
  } catch (e) {
    throw e;
  }
}

async function get({ url, options }) {
  try {
    let response = await fetch(API_URL + url, { method: "GET", ...options });
    switch (response.status) {
      case 200:
        return response.json();
      default:
        throw response;
    }
  } catch (e) {
    throw e;
  }
}

async function del({ url, options }) {
  try {
    let response = await fetch(API_URL + url, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      ...options
    });
    if (response.status < 400) {
      return response;
    } else {
      throw response;
    }
  } catch (e) {
    throw e;
  }
}

export { post, put, get, del };
