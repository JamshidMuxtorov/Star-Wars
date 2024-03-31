import { HTTP, HTTPS } from "constants/api";

/**
 * change url from http to https
 * @param {String} url - url for change
 * @returns {String} -- url with https
 */

export const changeHTTP = (url) => {
  const result = url ? url.replace(HTTP, HTTPS) : url;
  return result;
};

// export const getApiResource = () => {
// fetch(SWAPI_ROOT+SWAPI_PEOPLE)
// .then(res => console.log(res.json()))
// .then(body => console.log(body)).catch(err => console.log(err.message))
// }

export const getApiResource = async (url) => {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      console.error("ERROR", res.status);
      return false;
    }

    return await res.json();
  } catch (error) {
    console.error("ERROR 404,", error.message);
    return false;
  }
};

export const makeConcurrentRequest = async (urls) => {
  const res = await Promise.all(
    urls.map((res) => {
      return fetch(res).then((res) => res.json());
    })
  );
  return res;
};

//  getApiResource(SWAPI_ROOT+SWAPI_PEOPLE).then(body => console.log(body));
//  (async ()=>{
//     const body = await getApiResource(SWAPI_ROOT+SWAPI_PEOPLE);

//  })()
// console.log(body)
