# abcsql api [![Build Status](https://github.com/thehurricanes/abcsql-api/workflows/tests/badge.svg)](https://github.com/thehurricanes/abcsql-api/actions)

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

```
{
	"username": "jamie",
	"password": "myPassword"
}
```

### GET `/users/profile`

- Example request
- Header Authorization: `"Bearer eyJhbGciOiJIUzxxxxxxxx"`