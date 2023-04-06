// ==== api utils for fetching api

import {BASE_URL} from './apis';

export const fetchAPI = (url, method, body, header) => {
  const _REQUEST_URL = BASE_URL + url;

  return fetch(_REQUEST_URL, {
    method: method ?? 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...header,
    },
    body: JSON.stringify(body),
  })
    .then(res => res.json())
    .then(result => {
      if (result?.length) {
        return result;
      }
    })
    .catch(err => {
      return err;
    });
};
