# Reflection

## 1. 404 vs 500

A 404 status code means that the requested resource could not be found and belongs to the 4xx client-error family. A 500 status code indicates an internal server error, meaning the server encountered a problem while processing the request.

## 2. Why strict mode rejects tasks.find

The Array.find method can return undefined when no task matches the given ID. Therefore, strict TypeScript cannot treat its result as always being a Task without handling the missing case.

## 3. Why use a branch instead of main

Using a separate branch keeps the main branch stable while changes and fixes are being developed. It also allows the work to be reviewed through a pull request before being merged.