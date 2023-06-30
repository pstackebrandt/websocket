'use strict';

// Credentials für die Anmeldung in Couch
const username = 'admin', password = 'asy';
const dbName = 'chat_db';
const myMessage = {
    channel: 'chat message written',
    text:'Have a nice day!',
    author: 'Peter'
}

// Verbindung zu Couch herstellen
const db = require('nano')(`http://${username}:${password}@127.0.0.1:5984`).db;


const init = () => {

    // use() ist die einzige Methode, die kein Promise ist
    let myDB = db.use(dbName);

    // console.log(myDB);
    myDB.insert(myMessage).then(
        console.log
    ).catch(
        console.warn
    )

}

init();

// Vorher DB anlegen!!
// Output: { ok: true, id: '123', rev: '1-5058ba06b28c9c52139109a1c975f009' }