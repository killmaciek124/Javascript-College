class Vector2 {
    constructor(x,y) {
        this.x = x
        this.y = y
    }
    diff(vektor) {
        return new Vector2(this.x-vektor[0], this.y-vektor[1])
    }

    multiplyBy(number) {
        return new Vector2(this.x*number, this.y*number)
    }

    toString() {
        return "x: "+this.x+", y: "+this.y+""
    }
}

let vektor1 = new Vector2(2,3)
// console.log(vektor1)
// console.log(vektor1.toString())
// console.log(vektor1.diff([1,1]))
// console.log(vektor1.multiplyBy(2))


class Ship {
    constructor(faction, position, strength, health) {
        this.faction = faction // nazwa
        this.position = position // czyli ze [1,2]
        this.strength = strength // 1-10
        this.health = health // 1-100
    }
    getDistance(enemyShip) {
        let res
        new Promise((resolve, reject) => {
            let foo = [this.position[0] - enemyShip.position[0], this.position[1]-enemyShip.position[1]]
            let distance = (foo[0]*foo[0] + foo[1]*foo[1])**(1/2)
            if (distance>=0) {
                resolve(distance)
                res = distance
            } else {
                reject("niepowodzenie")
            }
        }).then(resp => console.log("Powodzenie"))
        .catch(resp => console.log(resp))
        return res
    }

    checkHealth() {
        return new Promise((resolve, reject) => {
            if (this.health>0) {
                resolve("STATEK PLYWA!")
            } else {
                reject("statek ZATONAL!")
            }
        }).then(res => console.log(res))
        .catch(res => console.log(res))
    }
    getDamage(amount) {
        this.health -= amount
        this.checkHealth()
    }

    makeDamage(enemyShip) {
        enemyShip.health-=this.strength
        console.log("ZADANO "+this.strength+" OBRAŻEN!")
    }
}


let ship1 = new Ship("Rebelius", [2,3],6,10)
let ship2 = new Ship("Komondus", [3,4], 8, 60)
// console.log(ship1.getDistance(ship2))
// ship1.checkHealth()
// ship1.makeDamage(ship2)
// console.log(ship2.health)


class CreateRebelShip extends Ship { // jesli nie stworzymy konstruktora, to dziedziczy konstruktor
    faction = "Rebel Alliance"
    constructor(position,strength,health) {
        super() // tak ma chyba byc idk czemu
        this.position = position
        this.strength = strength
        this.health = health
    }

    hyperSpeed() {
        this.position = undefined
    }
}

let rebelShip1 = new CreateRebelShip([1,1], 2,100)
// rebelShip1.hyperSpeed()
// console.log(rebelShip1)


class DeathStar extends Ship {
    constructor (position) {
        super('Empire', position, 10, 1000) // UZYCIE SUPER 
        this.deathRayAvailable = true

    }
    makeDamage(enemyShip) {
        return new Promise((resolve,reject) => {
            if (this.deathRayAvailable) {
                super.makeDamage(enemyShip) // UŻYCIE SUPER
                this.deathRayAvailable = false
                setTimeout(() => {
                    this.deathRayAvailable = true
                },3000)
            } else {
                reject("deathRay is not Available")
            }
        })
    }
}

deathStar1 = new DeathStar([1,2])
// console.log(deathStar1)
deathStar1.makeDamage(rebelShip1)

setTimeout(() => {
    deathStar1.makeDamage(rebelShip1).catch(x => console.log(x))
},4000)