import {
  Box,
  Button,
  Divider,
  Paper,
  Stack,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { API } from "aws-amplify";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Energy, Recognition, Decision, LifePattern } from "../models";
import { Header } from "./Header";
import MbtiTable from "./MbtiList";

interface Mbti {
  uid: string;
  username: string;
  energy: Energy;
  recognition: Recognition;
  decision: Decision;
  life_style: LifePattern;
  full_text: string;
  descriptions?: string[];
  edit_mode?: boolean;
  group_id: string;
}

interface MatchParams {
  id: string;
}

const initMbti: Mbti = {
  uid: "",
  username: "",
  energy: Energy.E,
  recognition: Recognition.N,
  decision: Decision.T,
  life_style: LifePattern.J,
  full_text: "ENTJ",
  descriptions: [],
  edit_mode: false,
  group_id: "",
};

export const Dictionary = () => {
  const [formState, setFormState] = useState(initMbti);
  const [mbtis, setMbtis] = useState([initMbti]);
  const [predefined_descriptions, setPredefinedDescriptions] = useState([]);
  const params = useParams<{ id: string }>();
  const GROUP_ID = params.id ? params.id : "";

  useEffect(function () {
    fetchMbtis(params.id);
  }, []);

  function setInput(key: string, value: string) {
    setFormState({ ...formState, [key]: value });
  }
  async function fetchMbtis(id?: string) {
    try {
      const mbtiData = await API.get("api", "/mbtis", {
        headers: {},
        body: { group_id: id },
      });
      const mbtis = mbtiData.Items;
      setMbtis(mbtis);
      fetchDescriptions(mbtis);
    } catch (err) {
      console.log("error fetching todos", err);
    }
  }

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
        mbti_item.edit_mode = false;
      });
      setMbtis(_mbtis);
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

      const data = {
        username: username,
        full_text: full_mbti,
        energy: energy,
        recognition: recognition,
        decision: decision,
        life_style: life_style,
        group_id: GROUP_ID,
      };
      const payload = {
        headers: {},
        body: data,
      };
      await API.post("api", "/mbtis", payload).then((response) => {
        var add_item_descriptions: string[] = [];
        predefined_descriptions.forEach(
          (description: { mbti: { [x: string]: string } }) => {
            add_item_descriptions?.push(description.mbti[data.full_text]);
          }
        );

        const add_item = {
          uid: response.uid,
          username: username,
          full_text: full_mbti,
          energy: energy,
          recognition: recognition,
          decision: decision,
          life_style: life_style,
          group_id: GROUP_ID,
          descriptions: add_item_descriptions,
        };

        setMbtis([...mbtis, add_item]);
      });
    } catch (err) {
      console.log("error creating mbti:", err);
    }
  }

  return (
    <>
      <Header link={`${window.location.href}`} />
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
            <MbtiTable data={mbtis} group_id={GROUP_ID} />
          </Stack>
        </Paper>
      </Box>
    </>
  );
};

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
