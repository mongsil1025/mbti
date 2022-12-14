import {
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { API } from "aws-amplify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Dictionary {
  id: string;
  dictionary_name: string;
}

export const Main = () => {
  const [dictionary_name, setDictionaryName] = useState("");
  const navigate = useNavigate();

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
        navigate(`/dictionary/${response.id}`);
      });
    } catch (err) {
      console.log("error creating dictionary:", err);
    }
  }

  return (
    <>
      <Box
        sx={{
          marginBottom: 5,
        }}
      >
        <Paper variant="outlined" square sx={{ padding: 5 }}>
          <Stack spacing={5}>
            <Typography variant="h5" gutterBottom>
              π λλ§μ Mbti μ¬μ 
            </Typography>
            <TextField
              id="standard-basic"
              label="(νμ) μ¬μ μ΄λ¦μ μλ ₯ν΄μ£ΌμΈμ"
              variant="standard"
              value={dictionary_name}
              onChange={(event: { target: { value: string } }) =>
                setDictionaryName(event.target.value)
              }
            />
            <Button variant="contained" onClick={addDictionary}>
              μΆκ°
            </Button>
          </Stack>
        </Paper>
      </Box>
    </>
  );
};
