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
import { MbtiTable } from "./components/MbtiList";
import { Decision, Energy, LifePattern, Recognition } from "./models";

Amplify.configure(awsExports);

interface Mbti {
  id: string;
  name: string;
  energy: Energy;
  recognition: Recognition;
  decision: Decision;
  life_pattern: LifePattern;
}

const initMbti: Mbti = {
  id: "",
  name: "",
  energy: Energy.E,
  recognition: Recognition.N,
  decision: Decision.T,
  life_pattern: LifePattern.J,
};

function App({ signOut, user }: WithAuthenticatorProps) {
  const [formState, setFormState] = useState(initMbti);
  const [mbtis, setMbtis] = useState([initMbti]);

  useEffect(() => {
    fetchMbtis();
  }, []);

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

  return (
    <div style={styles.container}>
      <AlertHeadingExample email={user?.attributes?.email} />
      <Button onClick={signOut}>Sign out</Button>

      <MbtiCreateForm />
      <MbtiTable data={mbtis} />
    </div>
  );
}

const styles = {
  container: {
    width: 1000,
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
