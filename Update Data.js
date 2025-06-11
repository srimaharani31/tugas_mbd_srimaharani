const database = 'UAS_MBD';
const collection = 'SERI';

use(database);


db.createCollection(collection);

db[collection].updateOne(
    {namaMhs : "Rahwan"},
    {$set : {umur : 22}}
);

db[collection].find();
