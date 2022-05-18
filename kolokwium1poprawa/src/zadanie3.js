const lodash = require('lodash');
class CoffeeShop {
    constructor(name,menu){
        this.name = name;
        this.menu = menu 
        this.orders =  []
    }
    addOrder(name) {
        if (lodash.find(this.menu,(el) => {return el.item ===name}) !== undefined){
            this.orders.push(name)
            console.log("Order added!")
        }
        else{
            console.log("This item is currently unavailable!")
        }
        
    }
    fulfillOrder() {
        (this.orders === []) ? console.log("The {item} is ready!") : console.log("All orders have been fulfilled!")
    }
    listOrders() {
        return this.orders
    }

    dueAmount() {
        const a = this.menu
        return this.menu.reduce((acc, currentItem) => {
            let count = this.orders.filter((item)=>{
                return item === currentItem.item
            })
            count = count.length
            console.log(count)
            if (this.orders.includes(currentItem.item)) acc+=currentItem.price*count
            return acc
        },0);
      }
    cheapestItem() {
        const help = this.menu.sort((a,b) => {
            a.price - b.price
        })
        return help.reverse()[0].item
    }
    drinksOnly(){
        return this.menu.filter((item) => {
            return item.type === "drink"
        })
    }
   
}

    
    
const Shop1 = new CoffeeShop(
    "Shop1",
    [
      { item: "cinnamon roll", type: "food", price: 4.99},
      { item: "hot chocolate", type: "drink", price: 2.99},
      { item: "lemon tea", type: "drink", price: 2.50},
     ]
 
    );
    Shop1.addOrder("lemon tea")
    Shop1.addOrder("lemon tea")
    console.log(Shop1.dueAmount())
    console.log(Shop1.cheapestItem())