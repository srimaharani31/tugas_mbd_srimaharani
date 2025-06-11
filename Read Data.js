const database = 'UAS_MBD';
const collection = 'SERI';

use(database);


db.createCollection(collection);

db[collection].find();
db[collection].find({
    namaMhs : "Sri Maharani"
});