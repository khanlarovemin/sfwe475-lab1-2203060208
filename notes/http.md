# HTTP Inspection

## Request: /todos/1

| Question | Your answer |
|---|---|
| Method | GET |
| Status code | 200 |
| Content-Type response header | application/json; charset=utf-8 |
| What is in the body? | JSON object containing userId: 1, id: 1, title: "delectus aut autem", completed: false |

## Invalid ID: /todos/99999

The response has status code 404, which belongs to the 4xx family. The 4xx family indicates a client-side error, and in this case the requested resource does not exist.

## URL Parts

- Scheme: `https`
- Host: `jsonplaceholder.typicode.com`
- Path: `/todos/99999`

## Query String

The query string is `userId=1`. It filters the todos to return only items belonging to user 1.

## GET vs POST

A GET request asks the server to return a resource, while a POST request sends data to the server and asks it to perform an action, such as creating or submitting data.

## Cache-Control

The response includes `Cache-Control: max-age=43200`, which indicates that the response can be cached for up to 43,200 seconds. Based only on this header, the response appears safe for a browser to cache during that period.