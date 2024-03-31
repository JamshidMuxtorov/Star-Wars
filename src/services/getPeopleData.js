import { HTTP, SWAPI_PEOPLE, GUIDE_IMG_EXTENSON, URL_IMG_PERSON, SWAPI_ROOT, HTTPS, SWAPI_PARAM_PAGE } from "../constants/api"


export const getPageId = url => {
    const pos = url.lastIndexOf(SWAPI_PARAM_PAGE)
    const id = url.slice(pos + SWAPI_PARAM_PAGE.length, url.length)

    return Number(id);
}



const getId = (url, category) => {
    const protocol = checkProtocol(url);
    const id = url
        .replace(HTTP + SWAPI_ROOT + category, '')
        .replace(protocol + SWAPI_ROOT + category, '')
        .replace(/\//g, '')
    return id;

}

const checkProtocol = url => {
    if (url.indexOf(HTTPS) !== -1) {
        return HTTPS;
    }

    return HTTP;
}
export const getPeopleId = url => getId(url, SWAPI_PEOPLE)
export const getPeopleImage = id => `${URL_IMG_PERSON}/${id + GUIDE_IMG_EXTENSON}`;