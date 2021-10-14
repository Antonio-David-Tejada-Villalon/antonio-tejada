/* const quiz = [
    { name: "Superman",realName: "Clark Kent" },
    { name: "Wonder Woman",realName: "Diana Prince" },
    { name: "Batman",realName: "Bruce Wayne" },
    ];

    console.table(quiz);

    const game = {
        start(quiz){
        this.questions = [...quiz];
        console.table(this.questions);
        this.score = 0;
        // main game loop
for(const question of this.questions){
    this.question = question;
    console.table(this.question);
    this.ask();
    console.table(this.ask());
    }
    // end of main game loop
    this.gameOver();
    },
    ask(){
    const question = `What is ${this.question.name}'s real name?`;
    const response = prompt(question);
    this.check(response);
    },
    check(response){
    const answer = this.question.realName;
    if(response === answer){
    alert('Correct!');
    this.score++;
    } else {
    alert(`Wrong! The correct answer was ${answer}`);
    }
    },
    
    gameOver(){
    alert(`Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
    } }

    game.start(quiz); */

    // Studying Classes

    class Animal{
        constructor(species, age, color){
            this.species = species;
            this.age = age;
            this.color = color;
            this.info = `I'm a ${this.species}, I'm ${this.age} years old and my color is ${this.color}`;
        }
        seeInfo(){
            document.write(this.info +  "<br>"); 
        }
    }

    //Building an inheritance

    class Dog extends Animal{
        constructor(species, age, color, race){
            super(species, age, color);
            this.race = race;
        }
        //Setters for changing and modify some properties
        set setRace(newName){
            this.race = newName;
        }
        //Getters for getting some property
        get getRace(){
            return this.race;
        }
    }

    const dog = new Dog("dog", 5, "brown", "Doberman");
    const cat = new Animal("cat", 2, "black");
    const bird = new Animal("bird", 1, "green");

    dog.seeInfo();
    cat.seeInfo();
    bird.seeInfo();

    dog.setRace = "Bobby";
    //document.write(dog.setRace + "<br>");
    document.write(dog.getRace);

    //Tasks Lists