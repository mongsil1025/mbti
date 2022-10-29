import React, { useEffect, useState } from "react";
import { Amplify, API, graphqlOperation } from "aws-amplify";
import { createTodo } from "./graphql/mutations";
import { listTodos } from "./graphql/queries";
import {
  withAuthenticator,
  Button,
  Heading,
  WithAuthenticatorProps,
  Text,
  TextField,
} from "@aws-amplify/ui-react";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import "@aws-amplify/ui-react/styles.css";

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

interface ToDo {
  id: number;
  name: string;
  description: string;
}

const initialState: ToDo = { id: 0, name: "", description: "" };

function App({ signOut, user }: WithAuthenticatorProps) {
  const [formState, setFormState] = useState(initialState);
  const [todos, setTodos] = useState([initialState]);

  useEffect(() => {
    fetchTodos();
  }, []);

  function setInput(key: string, value: string) {
    setFormState({ ...formState, [key]: value });
  }

  async function fetchTodos() {
    try {
      const todoData: GraphQLResult<any> = await API.graphql(
        graphqlOperation(listTodos)
      );
      const todos = todoData.data.listTodos.items;
      setTodos(todos);
    } catch (err) {
      console.log("error fetching todos");
    }
  }

  async function addTodo() {
    try {
      if (!formState.name || !formState.description) return;
      const todo = { ...formState };
      setTodos([...todos, todo]);
      setFormState(initialState);
      await API.graphql(graphqlOperation(createTodo, { input: todo }));
    } catch (err) {
      console.log("error creating todo:", err);
    }
  }

  return (
    <div style={styles.container}>
      <Heading level={1}>Hello {user?.username}</Heading>
      <Button style={styles.button} onClick={signOut}>
        Sign out
      </Button>
      <Heading level={2}>Amplify Todos</Heading>
      <TextField
        label="name"
        placeholder="Name"
        onChange={(event: { target: { value: string } }) =>
          setInput("name", event.target.value)
        }
        style={styles.input}
        defaultValue={formState.name}
      />
      <TextField
        label="description"
        placeholder="Description"
        onChange={(event: { target: { value: string } }) =>
          setInput("description", event.target.value)
        }
        style={styles.input}
        defaultValue={formState.description}
      />
      <Button style={styles.button} onClick={addTodo}>
        Create Todo
      </Button>
      {todos.map((todo, index) => (
        <div key={todo.id ? todo.id : index} style={styles.todo}>
          <Text style={styles.todoName}>{todo.name}</Text>
          <Text style={styles.todoDescription}>{todo.description}</Text>
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    width: 400,
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 20,
  } as React.CSSProperties,
  todo: { marginBottom: 15 },
  input: {
    border: "none",
    backgroundColor: "#ddd",
    marginBottom: 10,
    padding: 8,
    fontSize: 18,
  },
  todoName: { fontSize: 20, fontWeight: "bold" },
  todoDescription: { marginBottom: 0 },
  button: {
    backgroundColor: "black",
    color: "white",
    outline: "none",
    fontSize: 18,
    padding: "12px 0px",
  },
};

export default withAuthenticator(App);
