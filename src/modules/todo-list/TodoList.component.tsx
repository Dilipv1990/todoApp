import { ReactNode } from "react";
import Bullet from "../../components/bullet/Bullet.component";
import Label from "../../components/label/Label.component";
import Person from "../../components/person/Person.component";
import Header from "./Header.component";
import {
  Container,
  EmptyContainer,
  List,
  Profile,
  ReadMoreBtn,
  TodoContainer,
  TodoItem,
  TodoMeta,
  TodoText,
} from "./TodoList.component.styles";
import { ToDoItem } from "./TodoTypes.d";

interface ToDoListProps {
  list: ToDoItem[];
  onViewAll: () => void;
  title: string;
  fullScreen?: boolean;
  headerIcon?: ReactNode;
}

const TodoList = ({
  list,
  onViewAll,
  title,
  fullScreen,
  headerIcon,
}: ToDoListProps) => (
  <Container fullScreen={fullScreen}>
    <Header title={title} afterIcon={headerIcon} />
    {list.length > 0 ? (
      <List fullScreen={fullScreen}>
        {list.map(({ title: todoTitle, priority, assignedTo }) => (
          <TodoContainer key={todoTitle}>
            <Bullet />
            <TodoItem>
              <TodoText>{todoTitle}</TodoText>
              {fullScreen && (
                <TodoMeta>
                  <Label type={priority} />
                  <Profile>
                    <TodoText>{assignedTo}</TodoText>
                    <Person />
                  </Profile>
                </TodoMeta>
              )}
            </TodoItem>
          </TodoContainer>
        ))}
      </List>
    ) : (
      <EmptyContainer>-- Nothing to show --</EmptyContainer>
    )}
    <ReadMoreBtn onClick={onViewAll}>View all</ReadMoreBtn>
  </Container>
);

export default TodoList;
