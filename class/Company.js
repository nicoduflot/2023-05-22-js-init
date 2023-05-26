import {User} from './User.js';

export default class Company{
    constructor(name){
        this.name = name;
    }
}

/* 
ma classe Employee n'est pas une classe mère mais une classe enfant de User
*/

export class Employee extends User{
    constructor(name, job){
        super(name);
        this.job = job;
        this.statut = 'Salarié';
    }
}

export class Menuisier extends Employee{
    constructor(name){
        super(name);
        this.job = 'Menuisier';
    }
}