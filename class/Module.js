/*
Dans ce fichier,
on importe les modules nécessaire à au comportement JS de la page.
les fonctions des bibliothèques peuvent être importées 
    soient dans la totalité
    soient partiellement
*/

import * as other from './Others.js';
import loaded, {s, sAll} from './Utils.js';
import Toto, {Employee, Menuisier} from './Company.js';
import Company from './Company.js';

loaded(function(){
    console.log(other.truc());
    console.log(other.m);

    console.log(s('body > header > h1'));

    let toto = new Toto('Agence tous risques');
    let duffer = new Company('Dunder Mifflin');
    console.log(toto);
    console.log(duffer);
    let employee = new Employee('Kurt', 'Océanologue');
    let carpenter = new Menuisier('John');
    console.log(employee);
    console.log(carpenter);
});

