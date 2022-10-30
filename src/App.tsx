import React, { useEffect, useState } from "react";
import { Amplify, API, graphqlOperation } from "aws-amplify";
import { createMbti, createTodo } from "./graphql/mutations";
import { listMbtis } from "./graphql/queries";
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
import { Radio, RadioGroupField } from "@aws-amplify/ui-react";

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

interface ToDo {
  id: number;
  name: string;
  description: string;
}

interface Mbti {
  id: number;
  name: string;
  energy: string;
  recognition: string;
  decision: string;
  life_pattern: string;
}

const initialState: ToDo = { id: 0, name: "", description: "" };
const initMbti: Mbti = {
  id: 0,
  name: "",
  energy: "",
  recognition: "",
  decision: "",
  life_pattern: "",
};

function App({ signOut, user }: WithAuthenticatorProps) {
  const [formState, setFormState] = useState(initMbti);
  const [mbtis, setMbtis] = useState([initMbti]);
  const [todos, setTodos] = useState([initialState]);

  useEffect(() => {
    fetchMbtis();
  }, []);

  function setInput(key: string, value: string) {
    setFormState({ ...formState, [key]: value });
  }

  async function fetchMbtis() {
    try {
      const mbtiData: GraphQLResult<any> = await API.graphql(
        graphqlOperation(listMbtis)
      );
      const mbtis = mbtiData.data.listMbtis.items;
      setMbtis(mbtis);
    } catch (err) {
      console.log("error fetching todos");
    }
  }

  async function addMbti() {
    try {
      const { name, energy, recognition, decision, life_pattern } = {
        ...formState,
      };
      if (!name || !energy || !recognition || !decision || !life_pattern)
        return;
      setMbtis([...mbtis, { ...formState }]);
      await API.graphql(
        graphqlOperation(createMbti, {
          input: { name, energy, recognition, decision, life_pattern },
        })
      );
    } catch (err) {
      console.log("error creating mbti:", err);
    }
  }

  return (
    <div style={styles.container}>
      <Heading level={1}>Hello {user?.attributes?.email}</Heading>
      <Button style={styles.button} onClick={signOut}>
        Sign out
      </Button>
      <Heading level={2}>Mbti Maps</Heading>
      <TextField
        label="name"
        placeholder="Name"
        onChange={(event: { target: { value: string } }) =>
          setInput("name", event.target.value)
        }
        style={styles.input}
        defaultValue={formState.name}
      />
      <RadioGroupField
        label="Energy"
        name="energy"
        direction="row"
        onChange={(event: { target: { value: string } }) =>
          setInput("energy", event.target.value)
        }
      >
        <Radio value="E">E</Radio>
        <Radio value="I">I</Radio>
      </RadioGroupField>
      <RadioGroupField
        label="Recognition"
        name="recognition"
        direction="row"
        onChange={(event: { target: { value: string } }) =>
          setInput("recognition", event.target.value)
        }
      >
        <Radio value="N">N</Radio>
        <Radio value="S">S</Radio>
      </RadioGroupField>
      <RadioGroupField
        label="Decision"
        name="decision"
        direction="row"
        onChange={(event: { target: { value: string } }) =>
          setInput("decision", event.target.value)
        }
      >
        <Radio value="T">T</Radio>
        <Radio value="F">F</Radio>
      </RadioGroupField>
      <RadioGroupField
        label="LivePattern"
        name="live_pattern"
        direction="row"
        onChange={(event: { target: { value: string } }) =>
          setInput("life_pattern", event.target.value)
        }
      >
        <Radio value="J">J</Radio>
        <Radio value="P">P</Radio>
      </RadioGroupField>
      <Button style={styles.button} onClick={addMbti}>
        Create Mbti
      </Button>
      {mbtis.map((mbti, index) => (
        <div key={mbti.id ? mbti.id : index} style={styles.todo}>
          <Text style={styles.todoName}>{mbti.name}</Text>
          <Text style={styles.todoDescription}>
            {mbti.energy}
            {mbti.recognition}
            {mbti.decision}
            {mbti.life_pattern}
          </Text>
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
