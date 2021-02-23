/*Processing:  
Use functional programming.  Use filter, map, reduce, and pure functions.
Hint: See tutorial, "Student Results"
Output:  An array of student objects with the shown properties.  Shows students whose last name begins with "C": First and Last name; Min, Max, and Average Score.  */

//Declare studentList Array
const studentList = [
  {
      firstName: "Allan",
      lastName: "Able",
      scores: [95, 85, 92, 98]
  },
  {
      firstName: "Amy",
      lastName: "Alexander",
      scores: [80, 88, 100]
  },
  {
      firstName: "Betty",
      lastName: "Barns",
      scores: [70, 80, 90, 100]
  },
  {
      firstName: "Bob",
      lastName: "Bones",
      scores: [75, 85, 95, 85]
  },
  {
      firstName: "Cindy",
      lastName: "Chase",
      scores: [95, 90, 92, 98]
  },
  {
      firstName: "Charles",
      lastName: "Chips",
      scores: [88, 99, 90]
  },
];
// TO DO - Write higher order functions / There are many solutions

const lastnameC = array => array.lastName[0].toLowerCase() === "c";

function average(array) {
    return array.reduce((sum, value) => sum + value, 0) / array.length;
}

const max = arr => arr.reduce(function(a,b) {
return Math.max(a,b)
});

const min = arr => arr.reduce(function(a,b) {
return Math.min(a,b)
});

//Declare cLastNameResults.  Use functions and map a new array of objects

const cLastNameResults = studentList.filter(lastnameC).map(arr => {
    return { 
    firstname: arr.firstName,
    lastname: arr.lastName,
    minScore: min(arr.scores),
    maxScore: max(arr.scores),
    avgScore: average(arr.scores).toFixed(2)
    }
})
//Output
console.log(cLastNameResults);
