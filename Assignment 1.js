 First Approach:
 
 const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 }
];
var sum=0;
people.map((item)=>{
  sum+=item.age
})
console.log(sum/people.length);







Second Approach:


const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 }
];

var sum=0;
var count=0;

function test(list){
  for (let i = 0; i < list.length; i++) {
    
      sum += list[i].age;
      count++;
}
return sum/count;

}
console.log(test(people));

