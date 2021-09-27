const superman = {
    name: "Superman",
    'real name': 'Clark Kent',
    height: 75,
    weight: 235,
    hero: true,
    villain: false,
    allies: ['Batman', 'Supergirl', 'Superboy'],
    fly(){
        return 'Up, up and away';
    }
}

console.log(superman);

//Calling Methods

console.log(superman.fly());
console.log(superman['fly']());

// Checking if Properties or Methods Exist

console.log('city' in superman);

console.log(superman.city !== undefined);

console.log(superman.hasOwnProperty('city'));

console.log(superman.hasOwnProperty('name'));

// Finding all the Properties of an Object

for(const key in superman){
    console.log(key + ": " + superman[key]);
}

for(const key in superman){
    if(superman.hasOwnProperty(key)){
        console.log(key + ": " + superman[key]);
    }
}

// Showing the Object.keys() providing them as an argument

for(const key of Object.keys(superman)){
    console.log(key);
}

// Showing the Object.values() providing the object's value

for(const value of Object.values(superman)){
    console.log(value);
}

// Showing the Object.entries() returns an array of key-value

for(const [key, value] of Object.entries(superman)){
    console.log(`${key}: ${value}`);
}

// Adding Properties

console.log("Adding city = Metropolis");

superman.city = 'Metropolis';

for(const [key, value] of Object.entries(superman)){
    console.log(`${key}: ${value}`);
}

// Changing Properties

console.log("Changing name = Clark Kent to name = Kal-El");

console.log(superman['real name'] = 'Kal-El');

for(const [key, value] of Object.entries(superman)){
    console.log(`${key}: ${value}`);
}

// Removing Properties with delete operator

console.log("Removing superman's fly method");

console.log(delete superman.fly);

for(const [key, value] of Object.entries(superman)){
    console.log(`${key}: ${value}`);
}

// Nesting Objects

const jla = {
    superman: {realName: 'Clark Kent'},
    batman: {realName: 'Bruce Wayne'},
    wonderWoman: {realName: 'Diana Prince'},
    flash: {realName: 'Barry Allen'},
    aquaman: {realName: 'Arthur Curry'},
}

// Accesing be referencing each property name in order using either dot or bracket notation

console.log(jla.wonderWoman.realName);

console.log(jla['flash']['realName']);

// Mixing different notations

console.log(jla.aquaman['realName']);

// New Object

const thor = {
    name: 'Thor'
};

const cloneThor = thor;
cloneThor.name = 'Clor'; // This is going to affect both!

console.log(thor.name);

// But this cloning does not affect to primitive values instead of objects

let a = 1;
let b = a;
b = 2;

console.log(a); // Value has not changed.