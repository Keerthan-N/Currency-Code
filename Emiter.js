const EventEmitter = require('events');
const celebrity = new EventEmitter();

celebrity.on('Race',(result) => { 
  result === 'win' ? console.log('Race Won') : console.log('Race lost');
});

process.on('exit',(code)=>{
    console.log('Exiting the code ',code);
});


celebrity.emit('Race','win');
