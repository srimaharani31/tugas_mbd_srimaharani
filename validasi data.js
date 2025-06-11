const database = 'UAS';
const collection = 'Validasi';

use(database);


db.createCollection("SERI", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["namaMhs", "Nim", "JK", "Jurusan", "Umur"],
      properties: {
        namaMhs: {
          bsonType: "string",
          description: "Harus berupa string dan wajib diisi"
        },
        Nim: {
          bsonType: "string",
          pattern: "^D\\d{7}$",
          description: "Harus berupa string dengan format seperti D0222001"
        },
        JK: {
          enum: ["Laki-laki", "Perempuan"],
          description: "Jenis kelamin hanya boleh Laki-laki atau Perempuan"
        },
        Jurusan: {
          bsonType: "string",
          description: "Jurusan wajib diisi dalam bentuk string"
        },
        Umur: {
          bsonType: "int",
          minimum: 17,
          maximum: 100,
          description: "Umur harus antara 17 hingga 100 tahun"
        }
      }
    }
  },
});