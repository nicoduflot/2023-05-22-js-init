import loaded, {s, sAll} from './Utils.js';
import FichePerso from '../classes/FichePerso.js';
import Guerrier from '../classes/Guerrier.js';

loaded(function(){
    console.log('nouveau perso');
    let perso1 = new Guerrier('Duflot', 'Nicolas');
    let perso2 = new FichePerso('Tolfud', 'Salocin');
    console.log(perso1);
    console.log(perso2);
    console.log(`${perso1.prenom} attaque ${perso2.prenom}`);
    perso1.corpsACorps(perso2);
    console.log(`${perso2.prenom} est à ${perso2.pvActuel} PV / ${perso2.pvBase}`);
    perso2.multi(perso1);
    console.log(`${perso1.prenom} est à ${perso1.pvActuel} PV / ${perso1.pvBase}`);
    perso1.multi(perso2);
    console.log(`${perso2.prenom} est à ${perso2.pvActuel} PV / ${perso2.pvBase}`);
});