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

import { MbtiCreateForm } from "./ui-components";
import { AlertHeadingExample } from "./components/Header";

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
      console.log("error fetching todos", err);
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
      <AlertHeadingExample email={user?.attributes?.email} />
      <Button onClick={signOut}>Sign out</Button>

      <MbtiCreateForm />
      {mbtis.map((mbti, index) => (
        <div key={mbti.id ? mbti.id : index}>
          <Text>{mbti.name}</Text>
          <Text>
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
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 20,
  } as React.CSSProperties,
  input: {
    border: "none",
    backgroundColor: "#ddd",
    marginBottom: 10,
    padding: 8,
    fontSize: 18,
  },
};

export default withAuthenticator(App);
