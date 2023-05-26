export default class FichePerso{
    constructor(nom, prenom){
        this.nom = nom;
        this.prenom = prenom;
        this.pvBase = 50;
        this.pvActuel = this.pvBase;
        this.bagarre = 3;
        this.cerveau = 3;
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
            case (resJet > 10 && resJet < 13):
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

    corpsACorps(cible){

    }
}