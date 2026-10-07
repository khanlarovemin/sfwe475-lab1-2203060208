# Reflection

## 1. 404 vs 500

A 404 status code means that the requested resource could not be found and belongs to the 4xx client-error family. A 500 status code indicates an internal server error, meaning the server encountered a problem while processing the request.

## 2. Why strict mode rejects tasks.find

The Array.find method can return undefined when no task matches the given ID. Therefore, strict TypeScript cannot treat its result as always being a Task without handling the missing case.

## 3. Why use a branch instead of main

Using a separate branch keeps the main branch stable while changes and fixes are being developed. It also allows the work to be reviewed through a pull request before being merged.

# Lab 2 Reflection

## 1. Why does await only pause the function it's inside?

`await` pauses the execution of the async function that contains it until the Promise settles. It does not pause the entire JavaScript program, so other asynchronous work can continue.

## 2. Why didn't TypeScript complain about the API data?

TypeScript only checks the declared types during compilation and does not inspect external API data at runtime. The API response was not actually checked against the Task structure, so the mismatch could only become visible when the data was used.

## 3. parse() vs safeParse()

`parse()` throws an error when validation fails, while `safeParse()` returns an object containing either a successful result or validation errors. `createTask` uses `safeParse()` so invalid user input can be returned as an error result without crashing the program.