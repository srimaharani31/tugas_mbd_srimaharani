const database = 'UAS_MBD';
const collection = 'SERI';

use(database);


db.createCollection(collection);

db[collection].find({ Umur : {$gt : 22}});


// db[collection].find();
