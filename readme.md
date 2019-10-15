# abcsql-api [![Build Status](https://img.shields.io/travis/thehurricanes/abcsql-api?style=flat-square&logo=travis)](https://travis-ci.org/TheHurricanes/runit-api)

## Routes

### POST `/users/signup`

- Example request

```json
{
	"name": "James",
	"email": "james@gmail.com",
	"username": "jamie",
	"password": "myPassword"
}
```

### POST `/users/authenticate`

- Example request 

```json
{
	"username": "jamie",
	"password": "myPassword"
}
```

### GET `/users/profile`

- Example request
- Header Authorization: `"Bearer eyJhbGciOiJIUzxxxxxxxx"`
