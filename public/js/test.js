class Players {
    constructor(name, life, level) {
        this.name = name,
        this.life = life,
        this.level = level
        this.attack = (enemy) => {
            let dammage = Math.round(Math.random()*this.level*10)/enemy.level;
            enemy.life = enemy.life - dammage;
            return dammage
        }
    }
}

let hero = new Players("Mitsu", 50, 1);
let boss1 = new Players("Gargantua", 50, 1);

//Boss1 fight
console.log(`${hero.name} enters the room and comes accross ${boss1.name}. ${boss1.name} is the first to attack`);
let points = boss1.attack(hero);
console.log(`${hero.name} lost ${points} life points. He has ${hero.life} life points left.`);
i = 0
while (hero.life > 0 && boss1.life > 0) {
    console.log(`${hero.name} attacks`);
    points = hero.attack(boss1);
    console.log(`${boss1.name} lost ${points} life points. He has ${boss1.life} life points left.`);
    console.log(`${boss1.name} attacks`);
    points = boss1.attack(hero);
    console.log(`${hero.name} lost ${points} life points. He has ${hero.life} life points left.`);
    i++
    if (hero.life <= 0) {
        console.log(`${hero.name} lost. He needs to rest before trying to beat ${boss1.name} again.`);
        boss1.life = 50;
        hero.life = 50;
        break;
    } else if (boss1.life <= 0) {
        console.log(`${boss1.name} has no life left. ${hero.name} wins!`)
        if (i<=8) {
            hero.level += 2;
            console.log(`${hero.name} levels up two points`);
        } else {
            hero.level +=1;
            console.log(`${hero.name} levels up one points`);
        }
    }
}

