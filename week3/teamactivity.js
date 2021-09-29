      // ## Array Cardio Day 1

      // Some data we can work with

      const genius = [
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

      const personas = [
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
      const old_inventors = genius.filter(i => (i.year >= 1500 && i.year < 1600));
      console.table(old_inventors);

      // Array.prototype.map()
      // 2. Give us an array of the inventors' first and last names
      // could make a func to do this and then pass to map
      // function getNames (inventors) {
      //   return inventors.first + ' ' + inventors.last;
      // }
      const names = genius.map(i => ({name: i.first + ' ' + i.last, age: i.passed - i.year}));
      console.table(names);

      // Array.prototype.sort()
      // 3. Sort the inventors by birthdate, oldest to youngest
      // 0 if equal, -1 if <, +1 if > === truthy
      // sorting in descending order for fun
      const sorted = genius.sort((i,j) => ((-1)*(i.year - j.year)));
      console.table(sorted);

      // Array.prototype.reduce()
      // 4. How many years did all the inventors live?
      const total_years = genius.reduce( (acc,i) => acc + (i.passed - i.year),0);
      console.log("The inventors lived for a total of " + total_years + " years")

      // 5. Sort the inventors by years lived
      const sorted_by_age = genius.map(i => ({name: i.first + ' ' + i.last, age: i.passed - i.year})).sort((i,j) => (i.age - j.age));
      console.table(sorted_by_age);

      // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
      // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
      // goto the link above and open the console. Paste the following two lines in.  That will create a list of links in memory that you can reference through the console. Use that list to finish the problem.

      // const category = document.querySelector('.mw-category');
      // const links = Array.from(category.querySelectorAll('a'));
      // let de_streets = links.map(i => i.textContent);
      // de_streets.filter(i => i.includes("de"));

      // 7. sort Exercise
      // Sort the people alphabetically by last name
      console.table(personas.sort());

      // 8. Reduce Exercise
      // Sum up the instances of each of these
      const info = [
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

      const transport_counts = info.reduce((count,i) => {
        if (count[i]) {
          count[i]++;
        }
        else {
          count[i] = 1;
        }
        return count;
      },{});
      console.table(transport_counts);



    // ## Array Cardio Day 2

    const people3 = [
      { name: 'Wes', year: 1988 },
      { name: 'Kait', year: 1986 },
      { name: 'Irv', year: 1970 },
      { name: 'Lux', year: 2015 }
    ];

    let comments3 = [
      { text: 'Love this!', id: 523423 },
      { text: 'Super good', id: 823423 },
      { text: 'You are the best', id: 2039842 },
      { text: 'Ramen is my fav food ever', id: 123523 },
      { text: 'Nice Nice Nice!', id: 542328 }
    ];

    // Some and Every Checks
    // Array.prototype.some() // is at least one person 19 or older?
    const relatively_older_people = people3.some(i => (2021 - i.year) >= 19);
    console.log(relatively_older_people);

    // Array.prototype.every() // is everyone 19 or older?
    const all_older_people = people3.every(i => (2021 - i.year) >= 19);
    console.log(all_older_people);

    // Array.prototype.find()
    // Find is like filter, but instead returns just the one you are looking for
    // find the comment with the ID of 823423
    const waldo = comments3.find(i => i.id == 823423);
    console.table(waldo);

    // Array.prototype.findIndex()
    // Find the comment with this ID
    // delete the comment with the ID of 823423
    const deleted_text = comments3.findIndex(i => (i.id == 823423));
    comments.splice(deleted_text,1);
    console.table(comments3);