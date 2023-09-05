import React from "react";
import EditButton from "./EditIcon";
import CheckButton from "./CheckButton";
import DeleteButton from "./DeleteButton";
import { Box, Button, Input } from "@mui/material";
import checkmark from "../img/icon-check.svg";

const TodosList = ({
  todos,
  setTodos,
  setEditTodo,
  handleClear,
  handleFilter,
}) => {
  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  const [active, setActive] = React.useState("all");
  function handleActive(e) {
    setActive(e.currentTarget.value);
    handleFilter(e.currentTarget.value);
  }
  const handleEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };

  const handleClick = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box>
        {todos.map((todo) => (
          <li className="list-item" key={todo.id}>
            <Button
              // className={`check-button ${
              //   todo.complete ? "check-button-completed" : "null"
              // }`}
              type="submit"
              onClick={() => handleComplete(todo)}
            >
              <CheckButton />
            </Button>
            <Input
              type="text"
              variant="standard"
              disabled
              value={todo.title}
              sx={{ bgcolor: "white", border: "none" }}
              className={`list ${todo.completed ? "complete" : ""} `}
            />
            <Box sx={{ display: "flex", margin: "0" }}>
              <Button
                className="button-edit task-button"
                onClick={() => handleEdit(todo)}
              >
                <EditButton />
              </Button>
              <Button
                className="button-delete task-button"
                onClick={() => handleClick(todo)}
              >
                <DeleteButton />
              </Button>
            </Box>
          </li>
        ))}
      </Box>
      <Box
        sx={{
          borderTop: ".01rem solid #2a2a2a",
          borderWidth: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1rem",
        }}
      >
        <Box component="span" sx={{ fontSize: ".9rem", fontWeight: "900" }}>
          {todos.length} items left
        </Box>
        <Box
          sx={{
            width: "100%",

            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <Button
            value="all"
            onClick={handleActive}
            className={`${active === "all" ? "active" : null}`}
          >
            All
          </Button>
          <Button
            value="active"
            onClick={handleActive}
            className={`${active === "active" ? "active" : null}`}
          >
            Active
          </Button>
          <Button
            value="completed"
            onClick={handleActive}
            className={`${active === "completed" ? "active" : null}`}
          >
            Completed
          </Button>
        </Box>
        <Button onClick={handleClear}>Clear</Button>
      </Box>
    </Box>
  );
};

export default TodosList;
