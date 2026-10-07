import { createTask } from "./createTask";
import { fetchTodo } from "./api";

async function main() {
  const todo = await fetchTodo(1);

  console.log("Fetched todo:", todo);

  const valid = createTask({
    id: 1,
    title: "Read",
    done: false,
  });

  const missingField = createTask({
    id: 2,
    done: true,
  });

  const wrongType = createTask({
    id: 3,
    title: "Write",
    done: "yes",
  });

  for (const result of [valid, missingField, wrongType]) {
    if (result.ok) {
      console.log("Created task:", result.task);
    } else {
      console.log("Validation error:", result.error);
    }
  }
}

main();