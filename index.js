//Q1
 const styles = ["jazz","blues"]
 let add = styles.push("Rock-n-Roll")
 let add_1 = styles.length
 let add_3 = add_1-1
 let add_4 = add_3/2
 let addi = styles[add_4] = "classics"
 let rem = styles.shift()
 let add_5 = styles.unshift("Rap","Reggae")
 console.log(styles)

const custom = require("errno/custom")
const { values, uniq } = require("lodash")

//Q2
 function sumInput(arr) {
     if (Array.isArray(arr)) {
       const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
       return sum;
     } else {
       return "Invalid input..";
     }
   }
  
   // Example usage:
   const d = [1, 2, 3];
   console.log(sumInput(d)); 

//Q3
 function filterRange(arr, a, b){
     const final = []
     for (let i = 0;i<arr.length;i++){
         if (arr[i]>a && arr[i]<b ){
          final.push(arr[i]);
         }
     }
     return final
 }
 let ar = [1,2,3,4,5,6,7,8,9]
 console.log(filterRange(ar,1,3))

//Q4

 function filterRangeInPlace(arr, a, b) {
     for (let i = arr.length - 1; i >= 0; i--) {
       if (arr[i] < a || arr[i] > b) {
         arr.splice(i, 1);
       }
     }
   }
 const exp = [1,2,3,4,5,6]  
 console.log(filterRangeInPlace(exp,1,4))

//Q5

 let john = { name: "John", age: 25 };
 let pete = { name: "Pete", age: 30 };
 let mary = { name: "Mary", age: 28 };

 let users = [ john, pete, mary ];

 let names = users.map(user => user.name);

 console.log(names); 

//Q6


 let john = { name: "John", surname: "Smith", id: 1 };
 let pete = { name: "Pete", surname: "Hunt", id: 2 };
 let mary = { name: "Mary", surname: "Key", id: 3 };

 let users = [ john, pete, mary ];

 let usersMapped = users.map(user => ({
   id: user.id,
   fullName: `${user.name} ${user.surname}`
 }));

 console.log(usersMapped);

//Q7

 function getAverageAge(users) {
     if (users.length === 0) {
       return 0; 
     }
  
     const sumOfAges = users.reduce((total, user) => total + user.age, 0);
     const averageAge = sumOfAges / users.length;
     return averageAge;
   }
  
   let john = { name: "John", age: 25 };
   let pete = { name: "Pete", age: 30 };
   let mary = { name: "Mary", age: 29 };
  
   let arr = [ john, pete, mary ];
  
   console.log(getAverageAge(arr)); 
  

//Q8

function unique(arr) {
    return uniq(arr)
  }
  let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
]; 
console.log(unique(strings))




