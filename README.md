# debtwriter-api

`debtwriter-api` adalah proyek RESTful API yang dibangun dengan Express dan menggunakan MongoDB sebagai database. Proyek ini dirancang untuk mengelola informasi tentang hutang pribadi.

## Fitur

- Menambahkan pengguna
- Mengupdate informasi pengguna
- Menghapus pengguna
- Mendapatkan informasi pengguna

## Instalasi

1. Clone repositori ini:

```bash
git clone https://github.com/username/debtwriter-api.git
cd debtwriter-api
```
## Config PORT dan DB
- db : app/config/database ubah mongodb://127.0.0.1:27017/(ganti dengan database local anda)
- port : default [3000] dan dapat diubah pada variable port pada server.js

## Menjalankan Server

```bash
npm run dev
```
Server akan berjalan di http://127.0.0.1:your_port.

# API Endpoint
Berikut adalah beberapa endpoint yang tersedia dalam debtwriter-api:

## User
### CREATE User
- Endpoint: POST http://127.0.0.1:YOUR_PORT/debt-api/user
Deskripsi: Menambahkan pengguna baru.
Contoh Request:
```json
{
    "username": "user123",
    "password": "password",
    "nama": "John Does",
    "role": "member",
}
```
### GET User
- Endpoint: GET http://127.0.0.1:YOUR_PORT/debt-api/user/:id
Deskripsi: Mendapatkan informasi pengguna berdasarkan ID.
Contoh Response:
```json
{
    "_id": "666c4268ad3faaa4c50e2b00",
    "username": "user123",
    "password": "$2b$10$Y//WQfcMys94JW5j.Hw4RewGIy7xVT6c0AH2GXCQhESREigBPUFfC",
    "nama": "John Doe",
    "role": "member",
    "__v": 0
}
```
- Endpoint: GET http://127.0.0.1:YOUR_PORT/debt-api/user
Deskripsi: Mendapatkan informasi semua pengguna.
Contoh Response:
```json
[
  {
    "_id": "666c4268ad3faaa4c50e2b00",
    "username": "user123",
    "password": "$2b$10$Y//WQfcMys94JW5j.Hw4RewGIy7xVT6c0AH2GXCQhESREigBPUFfC",
    "nama": "John Doe",
    "role": "member",
    "__v": 0
  },
  {
    "_id": "666c4268ad3faaa4c50e2b23",
    "username": "username123",
    "password": "$2b$10$Y//WQfcMys94JW5j.Hw4RewGIy7xVT6c0AH2GXCQhESREigBPUFfC",
    "nama": "Johnny",
    "role": "admin",
    "__v": 0
  }
]
```

### UPDATE user
- Endpoint: PUT http://127.0.0.1:YOUR_PORT/debt-api/user/:id
Deskripsi: Mengupdate informasi pengguna berdasarkan ID.
Contoh Request:
```json
{
    "username": "userJhon",
    "password": "isJhon",
    "nama": "John Doe",
    "role": "admin"
}
```
Note: `atribut yang digunakan optional` bisa dimasukkan dan tidak misal anda dapat mengupdate data user tanpa memasukkan atribut dan value password :
```json
{
    "username": "userJhon",
    "nama": "John Doe",
    "role": "admin"
}
```

### DELETE user
- Endpoint: DELETE http://127.0.0.1:YOUR_PORT/debt-api/user/:id
Deskripsi: Menghapus pengguna berdasarkan ID.

## Debt
- model data request:
```json
{
    "pencatat": "60d0fe4f5311236168a109ca",
    "pemberi": "Jhon",
    "jumlah": 5000.00,
    "tgl_hutang": "2024-06-14T00:00:00.000Z",
    "lunas_pada": null,
    "deadline": "2024-07-14T00:00:00.000Z",
    "catatan": "Hutang untuk peminjaman",
    "status": "belum lunas",
    "create_on": "2024-06-14T12:45:32.000Z"
}
```
- model data response:
```json
{
    "_id": "666c4ffc45cab4819feacab8",
    "pencatat": "60d0fe4f5311236168a109ca",
    "pemberi": "John Does",
    "jumlah": {
        "$numberDecimal": "7000"
    },
    "tgl_hutang": "2024-06-14T00:00:00.000Z",
    "lunas_pada": "2024-06-14T00:00:00.000Z",
    "deadline": "2024-07-14T00:00:00.000Z",
    "catatan": "Hutang untuk pembelian barang X",
    "status": "belum lunas",
    "create_on": "2024-06-14T12:45:32.000Z",
    "__v": 0
}
```

### API KEY
GET `http://127.0.0.1:YOUR_PORT/debt-api/debt` untuk berdasarkan ID `http://127.0.0.1:YOUR_PORT/debt-api/debt/:id`
POST `http://127.0.0.1:YOUR_PORT/debt-api/debt`
PUT `http://127.0.0.1:YOUR_PORT/debt-api/debt/:id`
DELETE `http://127.0.0.1:YOUR_PORT/debt-api/debt/:id`

# Contributing
Silakan buat pull request untuk kontribusi.
