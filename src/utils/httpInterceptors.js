import httpClient from "./httpClient";
import { store } from "../store";
const actionScope = `loader`;
export function setupInterceptors({ dispatch }) {
  let requestsPending = 0;
  const req = {
    pending: () => {
      requestsPending++;
      dispatch(`${actionScope}/show`);
    },
    done: () => {
      requestsPending--;
      if (requestsPending <= 0) {
        dispatch(`${actionScope}/hide`);
      }
    }
  };
  httpClient.interceptors.request.use(
    config => {
      config.headers.common[
        "Authorization"
      ] = `Bearer ${store.getters.isAuthenticated}`;
      req.pending();
      return config;
    },
    error => {
      requestsPending--;
      req.done();
      return Promise.reject(error);
    }
  );
  httpClient.interceptors.response.use(
    ({ data }) => {
      req.done();
      return Promise.resolve(data);
    },
    error => {
      req.done();
      return Promise.reject(error);
    }
  );
}
