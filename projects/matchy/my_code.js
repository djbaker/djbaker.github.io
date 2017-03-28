var animal = {};
animal.species = 'dog';
animal.name = 'joey';
animal.noises = [];
console.log(animal);

var noises = [];
noises[0] = 'bark';
noises[1] = 'growl';
noises.unshift('yip');
noises[noises.length] = 'bark bark';
console.log(noises.length);
console.log(noises[noises.length - 1]);
console.log(noises);

var animals = [];
animal['noises'] = noises;
animals.push(animal);
console.log(animals);

var duck = {
   species: 'duck',
   name: 'Jerome',
   noises: ['quack', 'honk', 'sneeze', 'woosh']
};
animals.push(duck);
console.log(animals);

var cat = {
    species: 'cat',
    name: 'Sarah',
    noises: ['meow', 'purr', 'screech','hiss']
}

var friends = [];
// We picked an array because we can make an ordered list of friends that we can loop over
function randomM() {
let index = Math.floor(Math.random() * animals.length - 1);
return animals[index];
}

friends.push(randomM()["name"]);

console.log(friends)
