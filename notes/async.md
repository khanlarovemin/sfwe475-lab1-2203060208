# Async / Await

While `await fetch(...)` is waiting for a response, the rest of the program can continue running rather than blocking the entire program. The `await` pauses only the async function that contains it until the Promise settles.

When `fetchTodo` fails because of a network error or receives a bad HTTP status such as 404, the function should handle the failure and return `null` instead of crashing.
## Runtime vs Compile-Time

TypeScript stayed silent because type annotations are checked during compilation and do not validate data received from an external API at runtime. The API response did not actually contain the `done` field expected by the Task type, so the mismatch became visible only when the program tried to use the data.

An unchecked API response is a boundary because the data comes from outside the TypeScript program and cannot be trusted only because of a TypeScript type annotation.

## Zod Validation Errors

The missing-field case reports that the required `title` field is missing. The wrong-type case reports that the `done` field must be a boolean instead of a string.

`unknown` is the honest type for unvalidated external data because it forces the program to check the value before treating it as a known structure. Using `Task` directly would repeat the mistake from Strand 2 by trusting data before validating it.