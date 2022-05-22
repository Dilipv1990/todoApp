import { createContext, ReactNode, useContext } from "react";
import useServiceMock from "./modules/helpers/useServiceMock.hooks";
import { ToDoItem, TodoTypes } from "./modules/todo-list/TodoTypes";

interface ContextProps {
  allTodosJson: ToDoItem[];
  assignedTYouJson: ToDoItem[];
  createdByYouJson: ToDoItem[];
  routineJson: ToDoItem[];
  remindersJson: ToDoItem[];
  editTask: (item: ToDoItem, todoType: TodoTypes) => void;
  deleteTask: (id: string, todoType: TodoTypes) => void;
}

const initialProps = {
  allTodosJson: [],
  assignedTYouJson: [],
  createdByYouJson: [],
  routineJson: [],
  remindersJson: [],
  editTask: (item: ToDoItem, todoType: TodoTypes) => {},
  deleteTask: (id: string, todoType: TodoTypes) => {},
};

const Context = createContext<ContextProps>(initialProps);

interface ProviderProps {
  children: ReactNode;
}

export const AppContextProvider = ({ children }: ProviderProps) => {
  const {
    allTodosJson,
    assignedTYouJson,
    createdByYouJson,
    routineJson,
    remindersJson,
    editTask,
    deleteTask,
  } = useServiceMock();

  return (
    <Context.Provider
      value={{
        allTodosJson: allTodosJson as ToDoItem[],
        assignedTYouJson: assignedTYouJson as ToDoItem[],
        createdByYouJson: createdByYouJson as ToDoItem[],
        routineJson: routineJson as ToDoItem[],
        remindersJson: remindersJson as ToDoItem[],
        editTask,
        deleteTask,
      }}
    >
      {children}
    </Context.Provider>
  );
};

const useAppContext = () => useContext(Context);

export default useAppContext;
