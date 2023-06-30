'use strict';

// This script creates a database if it doesn't exist.
// It uses the nano library and the CouchDB REST API.
// The script is written in ES6 syntax and uses the "import" syntax.

// import nano using "import" syntax
import nano from 'nano';

// Credentials für die Anmeldung in Couch
const username = 'admin', password = 'asy';
const dbName = 'article_db';

// Verbindung zu Couch herstellen

const couch = nano(`http://${username}:${password}@127.0.0.1:5984`);

const init = () => {

    couch.db.list()
        .then((dbNames) => {
            if (dbNames.includes(dbName)) {
                console.log(`DB "${dbName}" existiert bereits`);
            } else {
                console.log(`DB "${dbName}" existiert nicht und wird erstellt`);

                couch.db.create(dbName)
                    .then((response) => {
                        console.log(`Database created with status ${response.ok}`);
                    })
                    .catch((err) => {
                        console.warn(err);
                    });
            }
        })
        .catch((err) => {
            console.warn(err);
        });
}

init();

// Output: DB "article_db" existiert bereits