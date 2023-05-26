import Arme from './Arme.js';
export default class FichePerso{
    constructor(nom, prenom){
        this.nom = nom;
        this.prenom = prenom;
        this.pvBase = 50;
        this.pvActuel = this.pvBase;
        this.bagarre = 3;
        this.cerveau = 3;
        this.armeEquipee = new Arme();
    }

    /* les methodes d'un personnage */

    deuxDsix(valCar = 0){
        let res = 0;
        res = Math.floor(Math.random()*6 + 1) + Math.floor(Math.random()*6 + 1);
        res = res + valCar;
        return res;
    }

    tester(type){
        let test = 0;
        let resJet = 0;
        switch(type){
            case 'bagarre':
                resJet = this.deuxDsix(this.bagarre);
            break;
            case 'cerveau':
                resJet = this.deuxDsix(this.cerveau);
            break;
            default: 
                resJet = this.deuxDsix();
        }
        

        switch (true){
            case (resJet < 7):
                test = 0;
            break;
            case (resJet > 6 && resJet < 10):
                test = 1;
            break;
            case (resJet > 10 && resJet < 15):
                test = 2;
            break;
            default:
                test = 3;
        }
        return test;
    }

    modifPv(valeur){
        if( this.pvActuel + valeur > this.pvBase){
            this.pvActuel = this.pvBase;
        }else{
            this.pvActuel = this.pvActuel + valeur;
        }
    }

    seSoigner(){
        let valeur = this.pvBase*0.1;
        this.modifPv(valeur);
    }

    corpsACorps(cible, taux = 1){
        let degatsBase = this.armeEquipee.degats;
        degatsBase = degatsBase*taux;
        switch(true){
            case (this.tester('bagarre') === 0):
                degatsBase = 0;
                console.log('Attaque raté, 0 dg');
                break;
            case (this.tester('bagarre') === 1):
                degatsBase = Math.floor(degatsBase*0.5);
                console.log(`Attaque amortie mais 1/2 dg : ${degatsBase}`);
                break;
            case (this.tester('bagarre') === 2):
                degatsBase = degatsBase;
                console.log(`Attaque réussie dg normaux : ${degatsBase}`);
            break;
            default:
                degatsBase = degatsBase * 2;
                console.log(`Attaque réussie critique dg double : ${degatsBase}`);
        }
        cible.modifPv(-degatsBase);
    }

    multi(cible){
        console.log(`${this.prenom} lance un coup spécial : dégats x 2`);
        this.corpsACorps(cible, 2);
    }
}