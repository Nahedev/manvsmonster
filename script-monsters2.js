/////////////////player////////////////////////
class player {
    constructor(name, hp, minAttack, maxAttack){
        this.name = name;
        this.hp = hp;
        this.minAttack = minAttack;
        this.maxAttack = maxAttack;
        this.weapon = null //or weapon
    }
    getPlayerAttack(){
        let randomAttack =  Math.floor(Math.random() * (this.maxAttack - this.minAttack + 1)) + this.minAttack;

        if(this.weapon){
            randomAttack += this.weapon.bonus;

        }

        return randomAttack;
    }
}


///////////////player1////////////////////   

const playerA = new player ('Cloud', 150, 5, 10);




////////////////monster factory////////////////////

class monster {
    constructor(name, hp, minAttack, maxAttack){
        this.name = name;
        this.hp = hp;
        this.minAttack = minAttack;
        this.maxAttack = maxAttack;
        
    }
    
    getMonsterAttack(){
        let randomAttack =  Math.floor(Math.random() * (this.maxAttack - this.minAttack + 1)) + this.minAttack;
       
        return randomAttack;
    }

    monsterDrop(){
        const drops = [
            { item: "Excalibur", rarity: "Rara" },
            { item: "Ragnarok", rarity: "Rara" },
            
        ];


        let randomDrop =  Math.floor(Math.random() * drops.length);

        return drops[randomDrop];
    }
}

///monsters

const monsterA = new monster ('zombie',80, 5, 10);

///weapon factory/////////////////////////////////////

class weapon {
    constructor(name, bonus){
        this.name = name;
        this.bonus = bonus;

    }
}
///////////////weapons/////////////////////////////////
const swordA = new weapon ('Excalibur', 10);
const swordB = new weapon ('Ragnarok', 15);

//////////////////display mechanics//////////////////////////////

function displayInfoDrop(){
    if(monster.monsterDrop.drops[randomDrop] === 'Excalibur'){

        display.value = 'Excalibur has dropped';

    }
}