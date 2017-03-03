// contoh constructor function
function Human(humanName, humanAge) {
  this.name   = humanName;
  this.age    = humanAge;
  this.talk   = function(otherHumanName) {
    console.log('Hi, ' + otherHumanName + '!');
    console.log('My name is ' +this.name);
    console.log('I am ' + this.age + ' years old');
  }
}

// melakukan instantiate
var mario = new Human('Mario', 34);
var luigi = new Human('Luigi', 32);

console.log(mario.name); // 'Mario'
console.log(luigi.age);  // 32

mario.talk(luigi.name);
// Hi, Luigi!
// My name is Mario
// I am 34 years old