import loaded, {s, sAll} from './Utils.js';
import FichePerso from '../classes/FichePerso.js';

loaded(function(){
    console.log('nouveau perso');
    let perso = new FichePerso('Duflot', 'Nicolas');
    console.log(perso);
});