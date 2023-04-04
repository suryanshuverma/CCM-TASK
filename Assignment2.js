First Approach:


const books = [
  { title: "The Catcher in the Rye", author: "J.D. Salinger" },
  { title: "To Kill a Mockingbird", author: "Harper Lee" },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { title: "The Old Man and the Sea", author: "Ernest Hemingway" },
  { title: "1984", author: "George Orwell" },
  { title: "Animal Farm", author: "George Orwell" }
];

function getBooksByAuthor(list,auth){
const result = list.filter((item) => {
  if(item.author==auth){
    console.log(item.title)
  }
})
return result;
}
getBooksByAuthor(books,"F. Scott Fitzgerald" )





Second Approach:


const books = [
  { title: "The Catcher in the Rye", author: "J.D. Salinger" },
  { title: "To Kill a Mockingbird", author: "Harper Lee" },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { title: "The Old Man and the Sea", author: "Ernest Hemingway" },
  { title: "1984", author: "George Orwell" },
  { title: "Animal Farm", author: "George Orwell" }
];


function getBooksByAuthor(book,auth){
  for(let i=0;i<book.length;i++){
  if(book[i].author==auth){
    console.log(book[i].title)
  }
  }
  
}
console.log(getBooksByAuthor(books,"Ernest Hemingway"));






