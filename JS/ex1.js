/*
	-perimeter (side times 4)
	-area (side^2)
	-diagonal (sqrt(2) * side^2)
	-describe – shows the squares information as follows:
     Square with side 2 has perimeter of 8, area of 4, and diagonal of 2.828
*/

class square {
  constructor(side) {
    //one property-side
    this.side = side;
  }
//methods
  //perimeter
  perimeter(){
    return 4 * this.side;
  }
  //area
  area(){
    return this.side**2;
  }
  // diagonal
  diag(){
    return (Math.sqrt(2) * this.side).toFixed(3);
  }
  // return the perimeter, area, and diag
  describe() {
    return ` ${this.side} has  perimeter: ${this.perimeter()} area: ${this.area()} and diagonal: ${this.diag()}. `;
  }
};

const square1 = new square(2);
console.log(square1.describe());
const square2 = new square(5);
console.log(square2.describe());
const square3 = new square(6);
console.log(square3.describe());
