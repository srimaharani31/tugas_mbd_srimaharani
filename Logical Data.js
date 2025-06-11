const database = 'UAS_MBD';
const collection = 'SERI';

use(database);


db.createCollection(collection);

db[collection].find({
    $or : [
        { Umur : {$gt : 22}}
    ]
});