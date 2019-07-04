// const Person  = require('./person');
// const person1 = new Person('tejveer', 27);
// person1.greeting();


const Logger = require('./logger');

const logger = new Logger();

logger.on('message', (data) => console.log('called Listener', data));

logger.log('Hello World');