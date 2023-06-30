'use strict';

// Credentials für die Anmeldung in Couch
const username = 'admin', password = 'asy';

const newDatabaseName = 'chat_db';

// Verbindung zu Couch herstellen
const db = require('nano')(`http://${username}:${password}@127.0.0.1:5984`).db;

const init = () => {
    db.create(newDatabaseName).then(
        console.log
    ).catch(
        console.warn
    );
}

init();

// Output: { ok: true }