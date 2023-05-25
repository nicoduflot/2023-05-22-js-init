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

function jsonToList(data = {message: "pas de flux récupéré"}){
    /* création d'un élément liste */
    let ul = document.createElement('ul');
    if(data.length >= 0){
        /* si data est un tableau */
        data.forEach(function(value, key){
            /* un forEach sur chacun des éléments du tableau */
            let li = document.createElement('li');
            ul.append(li);
            /* on envoie le contenu de la case du tableau dans la fonction en récursif */
            li.append(jsonToList(value));
        });        
    }else{
        /* si data est un objet */
        for(key in data){
            /* on parcour les valeur des clefs de l'objet */
            let li = document.createElement('li');
            if(typeof data[key] === 'object'){
                /* 
                si la valeur de la clef est un objet, 
                on crée un élément de liste avec la clef puis on y ajoute le retour de la fonction en récursif 
                */
                li.append(document.createTextNode(`${key}`));
                li.append(jsonToList(data[key]));
                
            }else{
                /* 
                si la valeur de la clef n'est pas un objet 
                on crée un élément de liste avec la clef
                */
                li.append(document.createTextNode(`${key} : ${data[key]}`));
            }
            /* on ajoute ensuite le li à la liste qu'on retourne en réponse de la fonction */
            ul.append(li);
        }
    }
    return ul;
}