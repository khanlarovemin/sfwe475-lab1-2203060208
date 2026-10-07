import { addTask, findTask, type Task } from "./tasks";

let tasks: Task[] = [];

tasks = addTask(tasks, "Read Chapter 1");

console.log(findTask(tasks, 1).title);

try {
  console.log(findTask(tasks, 99).title);
} catch (error) {
  console.log("Task not found");
}