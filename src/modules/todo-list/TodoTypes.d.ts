export interface ToDoItem {
  title: string;
  priority: "low" | "medium" | "high";
  dueDate: string;
  assignedTo: string;
  id: string;
}

export type TodoTypes =
  | "allTodos"
  | "assignedToYou"
  | "createdByYou"
  | "routine"
  | "reminders";
