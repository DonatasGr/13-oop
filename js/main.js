import { Dog } from './animals/Dog.js';
import { Cat } from './animals/Cat.js';

const rikis = new Dog('Rikis', 'melynas');
const miauksius = new Cat ('Miauksius', 'juodas');

rikis.sound();
miauksius.sound();

rikis.introduce();
miauksius.introduce();