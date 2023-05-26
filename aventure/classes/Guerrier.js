import FichePerso from "./FichePerso.js";
import Arme from "./Arme.js";

export default class Guerrier extends FichePerso{
    constructor(nom, prenom){
        super(nom, prenom);
        this.bagarre = 4;
        this.cerveau = 2;
        this.armeEquipee = new Arme('Épée', 10);
        this.pvBase = 70;
        this.pvActuel = this.pvBase;
    }

    multi(cible){
        console.log(`${this.prenom} lance un coup spécial : double attaque`);
        this.corpsACorps(cible);
        this.corpsACorps(cible);
    }
}