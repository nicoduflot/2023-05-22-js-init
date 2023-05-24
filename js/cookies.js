/*
let dateNow = new Date();
console.log(dateNow);
console.log(dateNow.getDate());
console.log(dateNow.getMonth()+1);
console.log(dateNow.getTime());
console.log(dateNow.getTime() + (1 * 24 * 60 * 60 * 1000) );
dateNow.setTime(dateNow.getTime() + (1 * 24 * 60 * 60 * 1000) );
console.log(dateNow);
console.log(dateNow.toLocaleString());
console.log(dateNow.toDateString());
console.log(dateNow.toUTCString());
console.log(dateNow.toLocaleDateString());

let valDays = 24 * 60 *60;
document.cookie = `userTest=titi; max-age=${valDays}; path=/; Samesite=Strict; Secure`;
console.log(document.cookie);
*/

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
/*
setCookie('test', 'toto', 1);
setCookie('test2', 'toto2', 1);
console.log(document.cookie);
console.log(getCookie('test'));
console.log(getCookie('jean'));
*/