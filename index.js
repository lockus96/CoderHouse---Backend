//Constructor
class Person {
	constructor(name, surname, books, pets) {
		this.name = name;
		this.surname = surname;
		this.books = books;
		this.pets = pets;
	}

  getFullName(){
    return this.name + ' ' + this.surname;
  }
  
	getBooks(){
    return this.books
  }
	
  countPets(){
    let count = 0
    return count = person1.pets.length
  }
  
  countBooks(){
    let count = 0
    return count = person1.books.length
  }
  
  getBooksName(){
   return person1.books[0].name + ' ' + person1.books[1].name
    
  }
 
  addBook(book){
    person1.books.push(book)
  }
  
  addPet(pet){
    person1.pets.push(pet)
  }
  
  
}

// Creating a new Person
const person1 = new Person (
     'Constanza',
     'Fernandez',
     [
       { 
       name: 'Catedrales', 
       author: 'Claudia Piñeiro'},
       { 
       name: 'Donde los Arboles Cantan', 
       author: 'Laura Gallego'}
     ],
     ['Oliver', 'Ziggy', 'Juno', 'Mora', 'Yuki']
);


// Pushing a new book
person1.addBook({ name: 'Little Prince', author: 'Saint Exupery'})
// Pushing a new pet
person1.addPet('Micha')



// Testing
console.log(person1.getFullName())
console.log(person1.pets)
console.log(person1.getBooks())
console.log(person1.countPets())
console.log(person1.countBooks())
console.log(person1.getBooksName())

