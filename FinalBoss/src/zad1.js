class Tile {
    constructor(type, x, y ) {
        this.type = type
        this.x = x 
        this.y = y
    }
    getTileInfo() {
        return "typ: "+this.type+", koordy = ["+this.x+","+this.y+"]"
    }
  }
  
  class Grid {
    constructor(height, width) {
        this.height = height
        this.width = width
        this.grid = null //this.generate(this.height, this.width) // albo generatePredefined
        this.ships = []
    }

    generate(height, width) { 
        const grid = []
        for (let i = 0; i< height; i++) {
            const row = []
            for(let j=0; j<width; j++) {
                row.push(new Tile(types[Math.floor(Math.random()*types.length)], i, j))
            }
            grid.push(row)
        }
        this.grid = grid 

        return grid
    }

    print() { // testowa funkcja
        console.log(this.grid)
    }

    generatePredefined(height, width, predefinedTiles) {

        const grid = []
        for (let i = 0; i< height; i++) {
            const row = []
            for(let j=0; j<width; j++) {
                row.push(0)
            }
            grid.push(row)
        }
        for (let i = 0; i<predefinedTiles.length; i++) {
            const x = predefinedTiles[i].x
            const y = predefinedTiles[i].y
            grid[x][y] = predefinedTiles[i]
        }
        // console.log(grid)
        this.grid = grid
        return grid
    }

    getTile(x,y) {
        if (this.grid[x][y] !== null) {
            return this.grid[x][y]
        } else {
            return null
        }
    }

    dodajStatek(statek) {
        this.ships.push(statek)
    }
    // height = null; // liczba całkowita
    // width = null; // liczba całkowita
    // grid = null; // tablica dwuwymiarowa
    // ships = null; // tablica jednowymiarowa

  }
  
  class Ship {
    constructor(direction, x,y,grid) {
        this.direction = direction
        this.x = x 
        this.y = y
        this.grid = grid
    }
    
    turn(x) {
        this.direction= x // "S" alb "N" itp
    }

    // sail() {
    //     if (this.direction === "N") { // done 
    //         this.x-=1
    //         if (this.grid[this.x][this.y].type === "WATER") {
    //             console.log("Statek przesunal sie ! ")
    //         } else {
    //             this.x+=1
    //             console.log("LAND, LOD LUB INNY STATEK, NIE MOGE SIE PRZESUNAC O TO POLE")
    //         }
    //     } else if (this.direction === "S") { // done 
    //         this.x+=1
    //         if (this.grid[this.x][this.y].type === "WATER") {
    //             console.log("Statek przesunal sie ! ")
    //         } else {
    //             this.x-=1
    //             console.log("LAND, LOD LUB INNY STATEK, NIE MOGE SIE PRZESUNAC O TO POLE")
    //         }
    //     } else if (this.direction === "W") { // done 
    //         this.y-=1
    //         if (this.grid[this.x][this.y].type === "WATER") {
    //             console.log("Statek przesunal sie ! ")
    //         } else {
    //             this.y+=1
    //             console.log("LAND, LOD LUB INNY STATEK, NIE MOGE SIE PRZESUNAC O TO POLE")
    //         }
    //     } else if (this.direction === "E") { // done 
    //         this.y+=1
    //         if (this.grid[this.x][this.y].type === "WATER") {
    //             console.log("Statek przesunal sie ! ")
    //         } else {
    //             this.y-=1
    //             console.log("LAND, LOD LUB INNY STATEK, NIE MOGE SIE PRZESUNAC O TO POLE")
    //         }

    //     }
    // }

    getShipInfo() {
        return "Kierunek "+this.direction+", koordy: ["+this.x+", "+this.y+"] "
    }
  }


  class IceBreaker extends Ship {
      constructor (x,y,grid) {
          super()
          this.direction = "N"
          this.x = x 
          this.y = y
          this.grid = grid
            
      }
      turn() {
          if(this.direction === "N") {
              this.direction = "S"
          } else if (this.direction === "S") {
              this.direction = "N"
          } else if (this.direction === "E") {
              this.direction = "W"
          } else if (this.direction === "W") {
              this.direction = "E"
          }
      }
  }
  
  // Funkcja losująca typ kafelka:
  const types = [ "LAND", "WATER", "ICE"];
  const itemType = types[Math.floor(Math.random()*types.length)]; // ICE WATER LAND 

  const tile1 = new Tile(itemType, 5 ,6)
//   console.log(tile1.getTileInfo())
  const grid1 = new Grid(2,2)
//   console.log(grid1.print())

const predefTiles = [
    new Tile("LAND",0, 0 ),
    new Tile("WATER",0,1 ),
    new Tile("ICE", 1,0),
    new Tile("ICE", 1,1)

];
const ship1 = new Ship("N", 0,0,grid1.grid)
grid1.dodajStatek(ship1)
grid1.generatePredefined(2,2, predefTiles)
// console.log(grid1.getTile(1,1))
console.log(grid1)
console.log(ship1)

ship1.turn("E")
// ship1.sail()

const IceBreaker1 = new IceBreaker(5,5,grid1)
console.log(IceBreaker1)