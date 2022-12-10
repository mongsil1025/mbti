import React, { useEffect, useState } from "react";
import { Amplify, API } from "aws-amplify";
import awsExports from "./aws-exports";

import "@aws-amplify/ui-react/styles.css";
import "./App.css";
import { MbtiTable } from "./components/MbtiList";
import {
  Decision,
  Energy,
  getKeyByValue,
  LifePattern,
  MbtiEnum,
  Recognition,
} from "./models";
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
import {
  addDescriptions,
  descriptions,
} from "./models/predefined_descriptions";

Amplify.configure(awsExports);

interface Mbti {
  username: string;
  energy: Energy;
  recognition: Recognition;
  decision: Decision;
  life_style: LifePattern;
  full_text: string;
  descriptions?: string[];
}

interface Description {
  display_name: string;
  mbti: { [key: string]: string };
}

const initMbti: Mbti = {
  username: "",
  energy: Energy.E,
  recognition: Recognition.N,
  decision: Decision.T,
  life_style: LifePattern.J,
  full_text: "ENTJ",
  descriptions: [],
};

function App() {
  const [formState, setFormState] = useState(initMbti);
  const [mbtis, setMbtis] = useState([initMbti]);
  const [predefined_descriptions, setPredefinedDescriptions] = useState([]);
  const [dictionary_name, setDictionaryName] = useState("");

  function setInput(key: string, value: string) {
    setFormState({ ...formState, [key]: value });
  }

  useEffect(() => {
    addDescriptions();
    fetchMbtis();
  }, []);

  async function fetchDescriptions(_mbtis: Mbti[]) {
    try {
      const descriptionData = await API.get("api", "/descriptions", {
        headers: {},
      });
      const descriptions = descriptionData.Items;
      setPredefinedDescriptions(descriptions);

      _mbtis.forEach((mbti_item) => {
        mbti_item.descriptions = [];
        descriptions.forEach(
          (description: { mbti: { [x: string]: string } }) => {
            mbti_item.descriptions?.push(description.mbti[mbti_item.full_text]);
          }
        );
      });
      setMbtis(_mbtis);
    } catch (err) {
      console.log("error fetching todos", err);
    }
  }

  // function fetchMbtis() {
  //   API.get("api", "/mbtis", {
  //     headers: {},
  //   })
  //     .then((response) => {
  //       fetchDescriptions(response.Items);
  //     })
  //     .catch((error) => {
  //       console.log("error fetching mbtis", error);
  //     });
  // }

  async function fetchMbtis() {
    try {
      const mbtiData = await API.get("api", "/mbtis", { headers: {} });
      const mbtis = mbtiData.Items;
      setMbtis(mbtis);
      fetchDescriptions(mbtis);
    } catch (err) {
      console.log("error fetching todos", err);
    }
  }

  async function addMbti() {
    try {
      const { username, energy, recognition, decision, life_style } = {
        ...formState,
      };
      if (!username || !energy || !recognition || !decision || !life_style)
        return;
      const full_mbti: string = energy + recognition + decision + life_style;
      type FullMbtiType = "ENTJ";

      const data = {
        username: username,
        full_text: full_mbti,
        energy: energy,
        recognition: recognition,
        decision: decision,
        life_style: life_style,
      };
      const payload = {
        headers: {},
        body: data,
      };
      await API.post("api", "/mbtis", payload).then((response) => {
        mbtis.push(data);
        setMbtis(mbtis);
      });
    } catch (err) {
      console.log("error creating mbti:", err);
    }
  }

  async function addDictionary() {
    try {
      const payload = {
        headers: {},
        body: {
          username: dictionary_name,
        },
      };
      await API.post("api", "/users", payload).then((response) => {
        console.log(response);
      });
    } catch (err) {
      console.log("error creating dictionary:", err);
    }
  }

  return (
    <div className="App">
      <Box
        sx={{
          marginBottom: 5,
        }}
      >
        <Paper variant="outlined" square sx={{ padding: 5 }}>
          <Stack spacing={5}>
            <Typography variant="h5" gutterBottom>
              📔 나만의 Mbti 사전
            </Typography>
            <TextField
              id="standard-basic"
              label="(필수) 사전이름을 입력해주세요"
              variant="standard"
              value={dictionary_name}
              onChange={(event: { target: { value: string } }) =>
                setDictionaryName(event.target.value)
              }
            />
            <Button variant="contained" onClick={addDictionary}>
              추가
            </Button>
          </Stack>
        </Paper>
      </Box>
      <Box
        sx={{
          marginTop: 5,
          marginBottom: 5,
        }}
      >
        <Paper variant="outlined" square sx={{ padding: 5 }}>
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
                  setInput("username", event.target.value)
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
                  sx={{ width: "100%" }}
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
                  sx={{ width: "100%" }}
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
                  sx={{ width: "100%" }}
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
                  value={formState.life_style}
                  color="primary"
                  exclusive
                  onChange={(
                    event: React.MouseEvent<HTMLElement>,
                    value: string
                  ) => {
                    setInput("life_style", value);
                  }}
                  aria-label="Platform"
                  sx={{ width: "100%" }}
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
            <Button variant="contained" onClick={addMbti}>
              친구 추가
            </Button>
          </Stack>
        </Paper>
      </Box>
      <Box
        sx={{
          marginBottom: 5,
        }}
      >
        <Paper variant="outlined" square sx={{ padding: 5 }}>
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
    marginBottom: 10,
    padding: 8,
    fontSize: 18,
  },
  mbtiRadio: {
    width: 100,
  } as React.CSSProperties,
};

export default App;
