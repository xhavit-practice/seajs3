console.log('2');
define(function (require) {
    console.log('3');
    const module2 = require('./module2');
    console.log('4');
    return `module1 - ${module2}`;
});
