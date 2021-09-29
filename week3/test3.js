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

//Team Activity W03

// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

      const inventors = [
        { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
        { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
        { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
        { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
        { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
        { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
        { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
        { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
        { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
        { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
        { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
        { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
      ];

      const people = [
        'Beck, Glenn',
        'Becker, Carl',
        'Beckett, Samuel',
        'Beddoes, Mick',
        'Beecher, Henry',
        'Beethoven, Ludwig',
        'Begin, Menachem',
        'Belloc, Hilaire',
        'Bellow, Saul',
        'Benchley, Robert',
        'Benenson, Peter',
        'Ben-Gurion, David',
        'Benjamin, Walter',
        'Benn, Tony',
        'Bennington, Chester',
        'Benson, Leana',
        'Bent, Silas',
        'Bentsen, Lloyd',
        'Berger, Ric',
        'Bergman, Ingmar',
        'Berio, Luciano',
        'Berle, Milton',
        'Berlin, Irving',
        'Berne, Eric',
        'Bernhard, Sandra',
        'Berra, Yogi',
        'Berry, Halle',
        'Berry, Wendell',
        'Bethea, Erin',
        'Bevan, Aneurin',
        'Bevel, Ken',
        'Biden, Joseph',
        'Bierce, Ambrose',
        'Biko, Steve',
        'Billings, Josh',
        'Biondo, Frank',
        'Birrell, Augustine',
        'Black, Elk',
        'Blair, Robert',
        'Blair, Tony',
        'Blake, William'
      ];

      // Array.prototype.filter()
      // 1. Filter the list of inventors for those who were born in the 1500's

      const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600))
      console.table(fifteen);

      // Array.prototype.map()
      // 2. Give us an array of the inventors' first and last names
      const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
      console.table(fullNames);

      // Array.prototype.sort()
      // 3. Sort the inventors by birthdate, oldest to youngest
      /* const ordered = inventors.sort(function(a , b){
          if(a.year > b.year) {
              return 1;
          }else{
              return -1;
          }
      }); */
      
      const ordered = inventors.sort((a,b) => a.year > b.year ? 1 : -1);
      console.table(ordered);

      // Array.prototype.reduce()
      // 4. How many years did all the inventors live?
      const totalYears = inventors.reduce((total, inventor) => {
          return total + (inventor.passed - inventor.year);
      }, 0)

      console.log(totalYears);

      // 5. Sort the inventors by years lived
      const oldest = inventors.sort(function(a, b){
          const lastGuy = a.passed - a.year;
          const nextGuy = b.passed - b.year;
          return lastGuy > nextGuy ? -1 : 1;
      });

      console.table(oldest);

      // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
      // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
      // goto the link above and open the console. Paste the following two lines in.  That will create a list of links in memory that you can reference through the console. Use that list to finish the problem.
      /* const category = document.querySelector('.mw-category');
      const links = Array.from(category.querySelectorAll('a'));
      const de = links
                .map(link => link.textContent)
                .filter(streetName => streetName.includes('de')); */


      // 7. sort Exercise
      // Sort the people alphabetically by last name
      const alpha = people.sort((lastOne, nextOne) => {
          const [alast, afirst] = lastOne.split(', ');
          const [blast, bfirst] = nextOne.split(', ');
          return alast > blast ? 1 : -1;
      })

      console.table(alpha);

      // 8. Reduce Exercise
      // Sum up the instances of each of these
      const data = [
        'car',
        'car',
        'truck',
        'truck',
        'bike',
        'walk',
        'car',
        'van',
        'bike',
        'walk',
        'car',
        'van',
        'car',
        'truck'
      ];

      const transportation = data.reduce(function(obj, item){
          if (!obj[item]) {
              obj[item] = 0;
          }
          obj[item]++;
          return obj;
      }, {});

      console.table(transportation);

// ## Array Cardio Day 2

      const people2 = [
        { name: 'Wes', year: 1988 },
        { name: 'Kait', year: 1986 },
        { name: 'Irv', year: 1970 },
        { name: 'Lux', year: 2015 }
      ];
  
      const comments = [
        { text: 'Love this!', id: 523423 },
        { text: 'Super good', id: 823423 },
        { text: 'You are the best', id: 2039842 },
        { text: 'Ramen is my fav food ever', id: 123523 },
        { text: 'Nice Nice Nice!', id: 542328 }
      ];
  
      // Some and Every Checks
      // Array.prototype.some() // is at least one person 19 or older?
      /* const isAdult = people2.some(function(person){
          const currentYear = (new Date()).getFullYear();
          if (currentYear - person.year >= 19){
              return true;
          }
      }); */

      const isAdult = people2.some(person => ((new Date()).getFullYear()) - person.year >= 19);

      console.log({isAdult});
      // Array.prototype.every() // is everyone 19 or older?
      const allAdult = people2.every(person => ((new Date()).getFullYear()) - person.year >= 19);

      console.log({allAdult});
  
      // Array.prototype.find()
      // Find is like filter, but instead returns just the one you are looking for
      // find the comment with the ID of 823423
      /* const comment = comments.find(function(comment){
          if(comment.id === 823423){
              return true;
          }
      }); */

      const comment = comments.find(comment => comment.id === 823423);

      console.table(comment);
  
      // Array.prototype.findIndex()
      // Find the comment with this ID
      // delete the comment with the ID of 823423
      const index = comments.findIndex(comment => comment.id === 823423);

      console.table(index);

      //comments.splice(index, 1);
      const newComments = [
          ...comments.slice(0, index),
          ...comments.slice(index + 1)
      ];

      
