// //const uuidv1 = require('uuid/v1'); //now when we're calling uuidv1 it will give us a unique id
// const util = require("util");
// const fs = require("fs");
// const { parse } = require('path');

// const readFileAsync = util.promisify(fs.readFile);
// const writeFileAsync = util.promisify(fs.writeFile);
// const db = require('./db.json')

// class NoteData {
//     read() {
//         return fs.readFileSync('db/db.json', 'utf8')
//     }
//     writer(note){
//         //finish later
//     }
//     getNotes() {
//         return res.json(db); /*this.read().then((notes) => {
//           let parsedNotes;
    
//           //try {
//             parsedNotes = [].concat(JSON.parse(notes));
//           //} catch (err) {
//             //parsedNotes = [];
//           //}
    
//           return parsedNotes;
//         });*/
//       }
// }

// module.exports = new NoteData