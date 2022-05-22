import { useNavigate } from "react-router-dom";
import useAppContext from "../../App.context";
import Indicator from "../../components/indicator/Indicator.component";
import Header from "../../modules/header/Header.component";
import TodoList from "../../modules/todo-list/TodoList.component";
import { ToDoItem } from "../../modules/todo-list/TodoTypes";
import { Container, HomeWrapper, ToDoColumn } from "./Home.container.styles";

const Home = () => {
  const navigate = useNavigate();
  const { allTodosJson, assignedTYouJson, createdByYouJson, routineJson } =
    useAppContext();

  return (
    <HomeWrapper>
      <Header name="Abram Vetros" />
      <Container>
        <TodoList
          list={allTodosJson.slice(0, 3) as ToDoItem[]}
          fullScreen
          onViewAll={() => navigate({ pathname: "/list/allTodos" })}
          title="All todos"
        />
        <ToDoColumn>
          <TodoList
            list={assignedTYouJson as ToDoItem[]}
            onViewAll={() => navigate({ pathname: "/list/assignedToYou" })}
            title="Assigned to you"
          />
          <TodoList
            list={[]}
            onViewAll={() => navigate({ pathname: "/list/reminders" })}
            title="reminders"
            headerIcon={<Indicator type="green" />}
          />
        </ToDoColumn>
        <ToDoColumn>
          <TodoList
            list={createdByYouJson as ToDoItem[]}
            onViewAll={() => navigate({ pathname: "/list/createdByYou" })}
            title="Created by you"
          />
          <TodoList
            list={routineJson as ToDoItem[]}
            onViewAll={() => navigate({ pathname: "/list/routine" })}
            title="Routine"
            headerIcon={<Indicator type="red" />}
          />
        </ToDoColumn>
      </Container>
    </HomeWrapper>
  );
};

export default Home;
