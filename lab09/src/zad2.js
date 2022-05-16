class numbers {
    constructor(numerator, denumerator) {
      this.numerator = numerator;
      this.denumerator = denumerator;
    }
    
    multiplyBy(x) {
      return newNumber = (this.numerator/this.denumerator)*x;
    }
    multiply(x,y) {
        return x*y;
      }
    print() {
        console.log(""+this.numerator+"/"+this.denumerator+"")
    }
    
  }
  
newNumber = new numbers(1,2)
newNumber.multiplyBy(5)
// console.log(newNumber)
x = new numbers
res = x.multiply(1/2, 1/2)
console.log(res)
y = new numbers(2,4)
y.print()