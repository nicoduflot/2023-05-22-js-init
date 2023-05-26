export default function  loaded(callable){
    window.addEventListener('DOMContentLoaded', callable);
}

function s(selector){
    return document.querySelector(selector);
}

export {s};

export function sAll(selector){
    return document.querySelectorAll(selector);
}

function setCookie(name, value = '', days = -1, path = '/', samesite = 'Strict', secure = 'secure'){
    /* il est possible d'ajouter plus de paramètres, par défaut tel que le path, samesite et secure */
    let maxAge = days * 24 * 60 * 60;
    document.cookie = `${name}=${value}; max-age=${maxAge}; path=${path}; Samesite=${samesite}; ${secure}`;
}

function getCookie(name){
    let tabCookie = document.cookie.split('; ');
    for(cookie of tabCookie){
        let tabValue = cookie.split('=');
        if(tabValue[0] === name){
            return tabValue[1];
        }
    }
    return false;
}

export {setCookie, getCookie};