# abcsql-api [![Build Status](https://travis-ci.com/thehurricanes/abcsql-api.svg?logo=travis)](https://travis-ci.org/TheHurricanes/runit-api)

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