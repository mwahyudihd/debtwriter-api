# debtwriter-api

`debtwriter-api` This is a RESTful API project built with Express and using MongoDB as the database. The project is designed to manage information about personal debts.

## Fitur

- Add user/debt
- Update user / debt information
- Delete user / debt
- Get user / debt information
  
## Run Locally

Clone the project

```bash
  git clone [https://github.com/mwahyudihd/debtwriter-api.git](debtwriter-api.git)
```

Go to the project directory

```bash
  cd debtwriter-api
```

Install dependencies

```bash
  npm install
```
### Configurations
- db : app/config/database change mongodb://127.0.0.1:27017/(with your local database)
- port : default [3000] and can change with port variable at server.js

Start the server

```bash
  npm run dev
```

# API Endpoint
Here are some of the available endpoints in the debtwriter-api:

## CREATE
- Endpoint:
```http
  POST http://127.0.0.1:YOUR_PORT/debt-api/items
```
description: Creating new user.
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `user`      | `string` | **Required**. Key of items |
| `debt`      | `string` | **Required**. Key of items |

Model:
### user
```json
{
    "username": "user123",
    "password": "password",
    "nama": "John Does",
    "role": "member",
}
```
### debt
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

## GET
- Endpoint:
```http
  GET http://127.0.0.1:YOUR_PORT/debt-api/items/${id}
```
Deskripsi: Getting information data with ID.
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `objectId` | **Required**. Id of item to fetch |

## GET ALL
- Endpoint:
```http
  GET http://127.0.0.1:YOUR_PORT/debt-api/items
```
Deskripsi: Getting All data of items.
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `user`      | `string` | **Required**. Key of items |
| `debt`      | `string` | **Required**. Key of items |

## UPDATE
- Endpoint:
```http
  PUT http://127.0.0.1:YOUR_PORT/debt-api/items/${id}
```
Deskripsi: Updating data by ID.
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `objectId` | **Required**. Id of item to modify |
Note: `attributes to be updated optional` can be entered and not e.g. you can update user / debt data without entering attributes and password values :

## DELETE
- Endpoint:
```http
  DELETE http://127.0.0.1:YOUR_PORT/debt-api/items/${id}
```
Deskripsi: Removing data by ID.
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `objectId` | **Required**. Id of item to remove |

## Usage/Examples

```javascript
const apiUrl = 'http://127.0.0.1:YOUR_PORT/debt-api/items'; // fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log('Data from API:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

```
# Contributing
If you want to contribute, please make a pull request for contribution.
