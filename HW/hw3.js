const fs = require('fs-extra');


// fs.emptyDir('./newFolder1', err => {
//     if (err) return console.error(err)
//     console.log(`Папка создана (или уже существовала)`)
// });

fs.emptyDirSync ('./newFolder1');

fs.outputFileSync( './newFolder1/text.txt', 'Hello world!');


fs.emptyDirSync ('./newFolder2');

fs.moveSync('./newFolder1/text.txt', './newFolder2/text.txt');

fs.emptyDirSync ('./newFolder3');

fs.copySync('./newFolder2/text.txt', './newFolder3/text.txt')

fs.removeSync('./newFolder2/text.txt');

fs.removeSync('./newFolder3/text.txt');

fs.removeSync('./newFolder1');

fs.removeSync('./newFolder2');

fs.removeSync('./newFolder3');  // Пробовал с асинхронными методами работать, но поведение разное и иногда теряются функции так и не выполнившись. Они разве не должны выполняться? (как на схеме обработки которую мы рассматривали)