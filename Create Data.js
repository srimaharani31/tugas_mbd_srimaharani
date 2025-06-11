

const database = 'UAS_MBD';
const collection = 'SERI';

use(database);


db.createCollection(collection);

db[collection].insertMany([
    {namaMhs : "Sri Maharani", Nim : "D0222034", JK : "Perempuan", Jurusan : "Informatika", Umur : 21},
    {namaMhs : "Ade indawan", Nim : "D0222034", JK : "Perempuan", Jurusan : "Informatika", Umur : 22},
    {namaMhs : "Srynadila", Nim : "D0222047", JK : "Perempuan", Jurusan : "Informatika", Umur : 22},
    {namaMhs : "Rahwan", Nim : "D0222005", JK : "laki-laki", Jurusan : "Informatika", Umur : 23}
    
]);
db[collection].find();