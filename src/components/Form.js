import React, { useEffect } from "react";
import Input from "@mui/material/Input";
import { v4 as uuidv4 } from "uuid";
import { CustomButton } from "./CustomButton";
import { FormControl } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "./EditIcon";

const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {
  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { title, id, completed } : todo
    );
    setTodos(newTodo);
    setEditTodo("");
  };
  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title);
    } else {
      setInput("");
    }
  }, [setInput, editTodo]);
  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  // event.target.value === "";

  const onFormSubmit = (event) => {
    if (!editTodo) {
      if (input === "") {
        console.error("Input can not be enmpty");
        return;
      }
      setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
      setInput("");
    } else {
      updateTodo(input, editTodo.id, editTodo.completed);
    }
    console.log(event.target.value);
  };

  return (
    <FormControl
      sx={{
        displey: "flex",
        width: "100%",
        flexDirection: "row",
        background: "#fff",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: "20px",
        padding: [2, 2],
        borderRadius: "5px",
      }}
    >
      <EditIcon />
      <Input
        type="text"
        placeholder="Enter a Todo..."
        value={input}
        required
        onChange={onInputChange}
        sx={{ width: "100%", borderRadius: "10px" }}
      />
      <CustomButton onClick={onFormSubmit}>
        {/* {editTodo ? "OK" : "Add"} */}
        <AddIcon />
      </CustomButton>
    </FormControl>
  );
};

export default Form;
