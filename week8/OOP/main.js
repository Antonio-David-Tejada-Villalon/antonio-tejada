//Object Oriented Programming

//Classes are a model to follow
//Objects is an instance of a class
//Object's attribute are characteristics or properties (are variables in an object)
//Object's method are actions that an object can execute or do (are functions in an object)
console.log("I'm working");

// These are objects but this is not efficient and I use lowerCamelCase on Objects
const animal = {
    name: 'Snoopy',
    toSound(){
        console.log("Makes sounds because it's alive");
    }
}

const animal2 = {
    name: "Lola Bunny",
    toSound(){
        console.log("Makes sounds because it's alive");
    }
}

console.log(animal);
console.log(animal2);

//Constructor Function to make new instances and i'm going to use UpperCamelCase on Classes

/* function Animal(name, gender){
    this.name = name; //attribute
    this.gender = gender; //attribute

    // Method
    this.toSound = function(){
        console.log("Makes sounds because it's alive");
    }

    this.greet = function(){
        console.log(`Hello my name is ${this.name}`);
    }
} */

//Constructor function where I assign the methods to a prototype, not to the function as this is.

function Animal(name, gender){
    this.name = name; //attribute
    this.gender = gender; //attribute
}

// Methods added to the prototype of the constructor function
Animal.prototype.toSound = function(){
    console.log("Makes sounds because it's alive");
}

Animal.prototype.greet = function(){
    console.log(`Hello my name is ${this.name}`);
}

const snoopy = new Animal("Snoopy", "Male"), lolaBunny = new Animal("Lola Bunny", "Female");
console.log(snoopy);
console.log(lolaBunny);

snoopy.toSound();
snoopy.greet();

lolaBunny.toSound();
lolaBunny.greet();