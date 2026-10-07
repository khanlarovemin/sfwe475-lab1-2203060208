import { TaskSchema } from "./schemas";

export async function fetchTodo(id: number) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );

    if (!response.ok) {
      return null;
    }

    const data: unknown = await response.json();

    if (
      typeof data !== "object" ||
      data === null ||
      !("id" in data) ||
      !("title" in data) ||
      !("completed" in data)
    ) {
      return null;
    }

    const todo = data as {
      id: number;
      title: string;
      completed: boolean;
    };

    const result = TaskSchema.safeParse({
      id: todo.id,
      title: todo.title,
      done: todo.completed,
    });

    if (!result.success) {
      return null;
    }

    return result.data;
  } catch {
    return null;
  }
}