/*2.	Starting with an array containing the numbers 1 through 10, use filter, map and reduce to produce the following.  Use console.log to display the results.*/

//base array
let base = [1,2,3,4,5,6,7,8,9,10];

 // a.	An array of odd numbers
  let odds = base.filter(n => n%2);
  
  console.log(` odd numbers: ${odds}`);
  //b.	An array of numbers divisible by 2 or 5
  let div_2_5 = base.filter (x => (x % 2 == 0) || (x % 5 == 0));
  console.log(` numbers divisible by 2 or 5: ${div_2_5 }`);
  //c.	An array of numbers divisible by 3 squared
  let div_3_squared = base.filter ( x => x % 3 == 0).map(x => x * x);
  console.log(` numbers divisible by 3 squared: ${div_3_squared}`);
  //d.	The sum of the following: square the numbers divisible by 5 
  let div_5_square_Sum = base.filter( x => x % 5 == 0).map(x => x * x).reduce((a,b) => a + b,0);
  console.log(` square the numbers divisible by 5: ${div_5_square_Sum} `);