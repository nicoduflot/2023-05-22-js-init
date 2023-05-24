function loaded(callable){
    window.addEventListener('DOMContentLoaded', callable);
}

function s(selector){
    return document.querySelector(selector);
}

function sAll(selector){
    return document.querySelectorAll(selector);
}

/*
function $(selector){
    let objet = document.querySelectorAll(selector);
    if(objet.length > 1){
        return objet;
    }else if(objet.length > 0){
        return objet[0];
    }
    return false;
}
*/