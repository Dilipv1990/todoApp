import { MenuItem, Select, TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useState } from "react";
import Button from "../../components/button";
import { ToDoItem } from "../../modules/todo-list/TodoTypes";
import {
  ActionButton,
  ButtonGroup,
  Container,
  Field,
  Header,
} from "./AddTodoDrawer.component.styles";

interface DrawerProps {
  item?: ToDoItem;
  onSave: (item: ToDoItem) => void;
  onCancel: () => void;
  onDelete: (id: string) => void;
}

const AddTodoDrawer = ({ item, onSave, onCancel, onDelete }: DrawerProps) => {
  const [todo, setTodo] = useState(item?.title || "");
  const [priority, setPriority] = useState(item?.priority || "");
  const [dueDate, setDueDate] = useState(item?.dueDate || null);
  const [assignedTo, setAssignedTo] = useState(item?.assignedTo || "");

  return (
    <Container>
      <Header>Add todo</Header>
      <Field>
        <p>Todo</p>
        <input
          placeholder="type here"
          value={todo}
          onChange={(ev) => setTodo(ev.currentTarget.value)}
        />
      </Field>
      <Field>
        <p>Priority</p>
        <Select
          displayEmpty
          value={priority}
          onChange={(ev) => setPriority(ev.target.value)}
        >
          <MenuItem value="low">Low</MenuItem>
          <MenuItem value="medium">Medium</MenuItem>
          <MenuItem value="high">High</MenuItem>
        </Select>
      </Field>
      <Field>
        <p>Due date</p>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            value={dueDate}
            onChange={(val) => val && setDueDate(val)}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </Field>
      <Field>
        <p>Assigned to</p>
        <Select
          displayEmpty
          value={assignedTo}
          onChange={(ev) => setAssignedTo(ev.target.value)}
        >
          <MenuItem value="">Select...</MenuItem>
          <MenuItem value="Martin Stanton">Martin Stanton</MenuItem>
          <MenuItem value="Jacob Mango">Jacob Mango</MenuItem>
          <MenuItem value="Abram Septimus">Abram Septimus</MenuItem>
          <MenuItem value="Randy Santon">Randy Santon</MenuItem>
          <MenuItem value="Carla Philips">Carla Philips</MenuItem>
          <MenuItem value="Disarae Burgson">Disarae Burgson</MenuItem>
          <MenuItem value="Mira Botosh">Mira Botosh</MenuItem>
        </Select>
      </Field>
      <ButtonGroup>
        <Button btnType="Secondary" onClick={onCancel}>
          Cancel
        </Button>
        <Button
          btnType="Primary"
          onClick={() =>
            onSave({
              ...item,
              assignedTo,
              dueDate,
              priority: priority as "low" | "high" | "medium",
              title: todo,
            } as ToDoItem)
          }
          startIcon={!item ? <>+</> : undefined}
        >
          {!item ? "Add" : "Save changes"}
        </Button>
      </ButtonGroup>
      {item && (
        <>
          <ActionButton>
            <p>Mark this todo complete</p>
            <Button btnType="Primary">Mark complete</Button>
          </ActionButton>
          <ActionButton>
            <p>Do you want to delete this todo ?</p>
            <Button btnType="Primary" onClick={() => onDelete(item.id)}>
              Delete todo
            </Button>
          </ActionButton>
        </>
      )}
    </Container>
  );
};

export default AddTodoDrawer;
