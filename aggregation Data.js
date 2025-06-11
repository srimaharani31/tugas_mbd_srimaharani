const database = 'UAS_MBD';
const collection = 'SERI';

use(database);


db.createCollection(collection);

db[collection].aggregate ([
    { 
        $group: {
            _id: "$kategori",
            totalUmur: { $sum: "$Umur"},
            rataUmur: {$avg: "$Umur"}
        }
    }
]);