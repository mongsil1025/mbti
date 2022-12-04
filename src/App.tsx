import React, { useEffect, useState } from "react";
import { Amplify, API, graphqlOperation } from "aws-amplify";
import { createMbti } from "./graphql/mutations";
import { listMbtiDescriptions, listMbtis } from "./graphql/queries";
import {
  withAuthenticator,
  WithAuthenticatorProps,
} from "@aws-amplify/ui-react";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import "@aws-amplify/ui-react/styles.css";
import { Radio, RadioGroupField } from "@aws-amplify/ui-react";

import awsExports from "./aws-exports";

import { AlertHeadingExample } from "./components/Header";
import { MbtiTable } from "./components/MbtiList";
import { Decision, Energy, LifePattern, Recognition } from "./models";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {
  Box,
  Divider,
  Paper,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";

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

  function setInput(key: string, value: string) {
    setFormState({ ...formState, [key]: value });
  }

  useEffect(() => {
    // fetchMbtis();
    fetchMbtiDescriptions();
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

  async function fetchMbtiDescriptions() {
    try {
      const mbtiDescriptionList: GraphQLResult<any> = await API.graphql(
        graphqlOperation(listMbtiDescriptions)
      );
      const mbtis = mbtiDescriptionList.data.listMbtiDescriptions.items;
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
      <Button variant="contained" onClick={signOut}>
        로그아웃
      </Button>

      <Box
        sx={{
          marginTop: 5,
          marginBottom: 5,
        }}
      >
        <Paper elevation={3} sx={{ padding: 5 }}>
          <Stack spacing={5}>
            <div>
              <Typography variant="h5" gutterBottom>
                🧡 그룹에 추가할 친구의 이름을 적어주세요
              </Typography>
              <TextField
                id="standard-basic"
                label="이름"
                variant="standard"
                onChange={(event: { target: { value: string } }) =>
                  setInput("name", event.target.value)
                }
              />
            </div>
            <div>
              <Typography variant="h5" gutterBottom>
                💛 친구의 MBTI 를 입력해주세요
              </Typography>
              <Stack
                direction="row"
                spacing={2}
                divider={<Divider orientation="vertical" flexItem />}
              >
                {/* E/I */}
                <ToggleButtonGroup
                  value={formState.energy}
                  color="primary"
                  exclusive
                  onChange={(
                    event: React.MouseEvent<HTMLElement>,
                    value: string
                  ) => {
                    setInput("energy", value);
                  }}
                  aria-label="Platform"
                >
                  <ToggleButton value="E" sx={styles.mbtiRadio}>
                    E
                  </ToggleButton>
                  <ToggleButton value="I" sx={styles.mbtiRadio}>
                    I
                  </ToggleButton>
                </ToggleButtonGroup>
                {/* N/S */}
                <ToggleButtonGroup
                  value={formState.recognition}
                  color="primary"
                  exclusive
                  onChange={(
                    event: React.MouseEvent<HTMLElement>,
                    value: string
                  ) => {
                    setInput("recognition", value);
                  }}
                  aria-label="Platform"
                >
                  <ToggleButton value="N" sx={styles.mbtiRadio}>
                    N
                  </ToggleButton>
                  <ToggleButton value="S" sx={styles.mbtiRadio}>
                    S
                  </ToggleButton>
                </ToggleButtonGroup>
                {/* T/F */}
                <ToggleButtonGroup
                  value={formState.decision}
                  color="primary"
                  exclusive
                  onChange={(
                    event: React.MouseEvent<HTMLElement>,
                    value: string
                  ) => {
                    setInput("decision", value);
                  }}
                  aria-label="Platform"
                >
                  <ToggleButton value="T" sx={styles.mbtiRadio}>
                    T
                  </ToggleButton>
                  <ToggleButton value="F" sx={styles.mbtiRadio}>
                    F
                  </ToggleButton>
                </ToggleButtonGroup>
                {/* J/P */}
                <ToggleButtonGroup
                  value={formState.life_pattern}
                  color="primary"
                  exclusive
                  onChange={(
                    event: React.MouseEvent<HTMLElement>,
                    value: string
                  ) => {
                    setInput("life_pattern", value);
                  }}
                  aria-label="Platform"
                >
                  <ToggleButton value="J" sx={styles.mbtiRadio}>
                    J
                  </ToggleButton>
                  <ToggleButton value="P" sx={styles.mbtiRadio}>
                    P
                  </ToggleButton>
                </ToggleButtonGroup>
              </Stack>
            </div>
            <Button onClick={addMbti}>친구 추가</Button>
          </Stack>
        </Paper>
      </Box>
      <Box
        sx={{
          marginBottom: 5,
        }}
      >
        <Paper elevation={3} sx={{ padding: 5 }}>
          <Stack spacing={5}>
            <Typography variant="h5" gutterBottom>
              💜 친구 리스트
            </Typography>
            <MbtiTable data={mbtis} />
          </Stack>
        </Paper>
      </Box>
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
  mbtiRadio: {
    width: 100,
  } as React.CSSProperties,
};

export default withAuthenticator(App);
