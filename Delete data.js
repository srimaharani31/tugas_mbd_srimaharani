const database = 'UAS_MBD';
const collection = 'SERI';

use(database);


db.createCollection(collection);

db[collection].deleteOne({namaMhs : "Rahwan"});

db[collection].find();