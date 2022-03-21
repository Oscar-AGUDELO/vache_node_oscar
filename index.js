const info = require('./information')

var cowsay = require("cowsay");

console.log(cowsay.say({
    text : `I'm ${info.name} and I'am a ${info.campus} wilder `,
    e: '^^',
    r: true,
}));