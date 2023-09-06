import React, { useState, useEffect } from "react";
import { Grid, Box, IconButton } from "@mui/material";
import Header from "./components/Header";
import Form from "./components/Form";
import TodosList from "./components/TodosList";
import "./index.css";
import lightHeader from "./img/bg-desktop-light.jpg";
import darkHeader from "./img/bg-desktop-dark.jpg";

function App() {
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(initialState);
  const [editTodo, setEditTodo] = useState(null);
  const [isDarkMode, setIsDarkMode] = React.useState(true);
  function toggleDarkMode() {
    setIsDarkMode((prevMode) => !prevMode);
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function handleClear() {
    let filtered = todos.filter((todo) => {
      return todo.complete === false;
    });
    setTodos(filtered);
  }
  function handleFilter(value) {
    if (value === "active") {
      let filtered = todos.filter((todo) => {
        return todo.complete === false;
      });
      setTodos(filtered);
    } else if (value === "completed") {
      let filtered = todos.filter((todo) => {
        return todo.complete === true;
      });
      setTodos(filtered);
    } else {
      setTodos(initialState);
    }
  }

  return (
    <Box
      sx={(theme) => ({
        bgcolor:
          theme.palette.mode === "light" ? "action.disabledBackground" : "red",
      })}
    >
      <Box
        sx={{
          backgroundImage: {
            xs: isDarkMode ? `url(${lightHeader})` : `url(${darkHeader})`,
            md: isDarkMode ? `url(${darkHeader})` : `url(${lightHeader})`,
          },
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "400px",
        }}
      >
        <Grid container direction="column" alignItems="center">
          <Grid
            sx={{
              mt: "11rem",
            }}
            md={5}
            xs={11}
          >
            <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
          </Grid>
          <Grid container md={4} xs={11}>
            <Form
              input={input}
              setInput={setInput}
              todos={todos}
              setTodos={setTodos}
              editTodo={editTodo}
              setEditTodo={setEditTodo}
              isDarkMode={isDarkMode}
              toggleDarkMode={toggleDarkMode}
            />
          </Grid>
          <Grid
            container
            boxShadow="6px 6px 30px gray"
            alignItems="center"
            sx={{
              bgcolor: "#fff",
              borderRadius: "5px",
              color: "black",
              position: "relative",
              top: "2rem",
            }}
            md={4}
            xs={11}
          >
            <TodosList
              todos={todos}
              setTodos={setTodos}
              setEditTodo={setEditTodo}
              handleClear={handleClear}
              handleFilter={handleFilter}
              isDarkMode={isDarkMode}
              toggleDarkMode={toggleDarkMode}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default App;
