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

var fishy = {
    species: 'goldfish',
    name: 'goldie',
    noises: ['silence', 'nada', 'whisper', 'no noises']
}

animals.push(cat);
animals.push(fishy);

var friends = [];
// We picked an array because we can make an ordered list of friends that we can loop over
function randomM() {
let index = Math.floor(Math.random() * animals.length);
return animals[index];
}

friends.push(randomM()["name"]);

console.log(friends)

animals[0].friends = friends;
console.log(animals);

function search (name) {
    for (var i = 0; i < animals.length; i++) {
        if (animals[i]["name"] === name) {
            return animals[i];
        }
    }
return null;
}