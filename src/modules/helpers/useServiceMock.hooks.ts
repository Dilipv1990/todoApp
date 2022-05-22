import { SetStateAction, useState } from "react";
import { v4 } from "uuid";
import allTodosJson from "../../json/AllTodo.json";
import assignedTYouJson from "../../json/AssignedToYou.json";
import createdByYouJson from "../../json/CreatedByYou.json";
import remindersJson from "../../json/Reminders.json";
import routineJson from "../../json/Routine.json";
import { ToDoItem, TodoTypes } from "../todo-list/TodoTypes";
type SetStateType = React.Dispatch<
  SetStateAction<
    {
      title: string;
      priority: string;
      dueDate: string;
      assignedTo: string;
      id: string;
    }[]
  >
>;

const useServiceMock = () => {
  const [allTodos, setAllTodos] = useState(allTodosJson);
  const [assignedToYou, setAssignedToYou] = useState(assignedTYouJson);
  const [createdByYou, setCreatedByYou] = useState(createdByYouJson);
  const [reminders, setRemindres] = useState(remindersJson);
  const [routine, setRoutine] = useState(routineJson);

  const getGettersAndSetters = (todoType: TodoTypes) => {
    if (todoType === "allTodos") {
      return { getter: allTodos, setter: setAllTodos };
    }
    if (todoType === "assignedToYou") {
      return { getter: assignedToYou, setter: setAssignedToYou };
    }
    if (todoType === "createdByYou") {
      return { getter: createdByYou, setter: setCreatedByYou };
    }
    if (todoType === "reminders") {
      return { getter: reminders, setter: setRemindres };
    }
    if (todoType === "routine") {
      return { getter: routine, setter: setRoutine };
    }
    return {};
  };

  const editTask = (item: ToDoItem, todoType: TodoTypes) => {
    const { getter, setter } = getGettersAndSetters(todoType) as {
      getter: ToDoItem[];
      setter: SetStateType;
    };
    if (!getter || !setter) {
      return;
    }
    if (item.id) {
      setter((oldData) => [
        ...oldData.map((data) => (data.id === item.id ? item : data)),
      ]);
    } else {
      setter((data) => [...data, { ...item, id: v4() }]);
    }
  };
  const deleteTask = (id: string, todoType: TodoTypes) => {
    const { getter, setter } = getGettersAndSetters(todoType) as {
      getter: ToDoItem[];
      setter: SetStateType;
    };
    if (!getter || !setter) {
      return;
    }
    setter((oldData) => [...oldData.filter((item) => item.id !== id)]);
  };

  return {
    allTodosJson: allTodos,
    assignedTYouJson: assignedToYou,
    createdByYouJson: createdByYou,
    routineJson: routine,
    remindersJson: reminders,
    editTask,
    deleteTask,
  };
};

export default useServiceMock;
