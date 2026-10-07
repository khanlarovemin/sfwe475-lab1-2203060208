# TypeScript Strict Mode Errors

## 1. Implicit any for tasks

TypeScript cannot determine the type of the empty `tasks` array. Strict mode does not allow the variable to remain implicitly typed as `any[]`.

## 2. Using tasks with an unknown type

The `tasks` variable has an implicitly inferred `any[]` type, so TypeScript cannot safely use it as the `Task[]` argument required by `addTask`.

## 3. Missing type for title

The `title` parameter does not have an explicit type. Strict mode requires function parameters to have a specific type instead of implicitly becoming `any`.

## 4. Wrong type for done

The `done` property is defined as a boolean in `Task`, but the code assigns the string `"false"` to it. A string cannot be used where a boolean is expected.

## 5. String is not assignable to boolean

The value `"false"` is a string, but the `done` property requires a boolean value. The two types are incompatible.

## 6. find can return undefined

The `find` method may return `undefined` when no task matches the requested ID. Therefore, the function cannot always promise to return a `Task`.

## 7. Optional dueDate may be undefined

The `dueDate` property is optional, so it can be `undefined`. TypeScript does not allow it to be passed directly to `new Date()` without handling the missing case first.