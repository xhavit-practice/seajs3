console.log('5');
define(function (require) {
    console.log('6');
    const module1 = require('./module1');
    console.log('7');
    console.log(module1);
    console.log('8');
});
