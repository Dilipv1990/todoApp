import { Drawer } from "@mui/material";
import dayjs from "dayjs";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAppContext from "../../App.context";
import ActionButton from "../../components/action-button/ActionButton.component";
import Bullet from "../../components/bullet/Bullet.component";
import Button from "../../components/button";
import Label from "../../components/label/Label.component";
import Person from "../../components/person/Person.component";
import Header from "../../modules/header/Header.component";
import { ToDoItem, TodoTypes } from "../../modules/todo-list/TodoTypes";
import AddTodoDrawer from "./AddTodoDrawer.component";
import {
  Container,
  List,
  ListHeader,
  Table,
  TableHeaderRow,
  TableRow,
  Title,
  Wrapper,
} from "./TodoList.container.styles";

const TodoList = () => {
  const navigate = useNavigate();
  const { todoType } = useParams() as { todoType: TodoTypes };
  const {
    allTodosJson,
    assignedTYouJson,
    createdByYouJson,
    routineJson,
    remindersJson,
    deleteTask,
    editTask,
  } = useAppContext();

  const [item, setItem] = useState<undefined | ToDoItem>(undefined);

  const [openDrawer, setOpenDrawer] = useState(false);

  const getTodos = () => {
    if (todoType === "assignedToYou") {
      return { name: "Assigned to you", list: assignedTYouJson };
    }
    if (todoType === "allTodos") {
      return { name: "All todos", list: allTodosJson };
    }
    if (todoType === "createdByYou") {
      return { name: "Created by you", list: createdByYouJson };
    }
    if (todoType === "routine") {
      return { name: "Routine", list: routineJson };
    }
    if (todoType === "reminders") {
      return { name: "Routine", list: remindersJson };
    }
    return { name: todoType, list: [] };
  };

  const { name, list } = getTodos();

  return (
    <Wrapper>
      <Header
        name="Abram Vetros"
        onBackClick={() => navigate({ pathname: "/" })}
      />
      <Container>
        <List>
          <ListHeader>
            <Title>{name}</Title>
            <Button
              btnType="Primary"
              startIcon={<p>+</p>}
              onClick={() => setOpenDrawer(true)}
            >
              Add
            </Button>
          </ListHeader>
          <Table>
            <TableHeaderRow>
              <th></th>
              <th>Todo</th>
              <th>Priority</th>
              <th>Due date</th>
              <th>Created by</th>
              <th>Assigned to</th>
              <th>Action</th>
            </TableHeaderRow>
            {list.map((todoItem) => (
              <TableRow key={todoItem.id}>
                <td>
                  <Bullet />
                </td>
                <td>{todoItem.title}</td>
                <td>
                  <Label type={todoItem.priority} />
                </td>
                <td>{dayjs(todoItem.dueDate).format("DD MMM, YYYY")}</td>
                <td>
                  <Person />
                </td>
                <td>
                  <Person />
                </td>
                <td>
                  <ActionButton
                    onClick={() => {
                      setItem(todoItem);
                      setOpenDrawer(true);
                    }}
                  >
                    Edit
                  </ActionButton>
                </td>
              </TableRow>
            ))}
          </Table>
        </List>
      </Container>

      <Drawer open={openDrawer} anchor="right">
        <AddTodoDrawer
          item={item}
          onCancel={() => setOpenDrawer(false)}
          onSave={(item: ToDoItem) => {
            editTask(item, todoType);
            setOpenDrawer(false);
          }}
          onDelete={(id: string) => {
            deleteTask(id, todoType);
            setOpenDrawer(false);
          }}
        />
      </Drawer>
    </Wrapper>
  );
};

export default TodoList;
