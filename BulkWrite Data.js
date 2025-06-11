const database = 'UAS_MBD';
const collection = 'SERI';

use(database);


db.createCollection(collection);

db.SERI.bulkWrite([

  {
    updateOne: {
      filter: { namaMhs: "Sri Maharani" },
      update: { $set: { Umur: 22 } }
    }
  },


  {
    updateOne: {
      filter: { namaMhs: "Ade indawan" },
      update: { $set: { Jurusan: "Sistem Informasi" } }
    }
  },

  
  {
    deleteOne: {
      filter: { namaMhs: "Srynadila" }
    }
  },


  {
    insertOne: {
      document: {
        namaMhs: "Nadya Putri",
        Nim: "D0222055",
        JK: "Perempuan",
        Jurusan: "Informatika",
        Umur: 20
      }
    }
  }
]);
db[collection].find()
