import {
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
} from "@aws-amplify/ui-react";
import { TextField } from "@mui/material";
import { Decision, Energy, LifePattern, Recognition } from "../models";

interface Description {
  data: string;
  display_name: string;
}

interface Mbti {
  username: string;
  energy: Energy;
  recognition: Recognition;
  decision: Decision;
  life_style: LifePattern;
  descriptions?: string[];
}

interface MbtiTablePropsListType {
  data: Mbti[];
}

export const MbtiTable = (props: MbtiTablePropsListType) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell as="th">Name</TableCell>
        <TableCell as="th">MBTI</TableCell>
        <TableCell as="th">극단적 단점</TableCell>
        <TableCell as="th">유형별 팩폭</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {props.data.map((mbti) => {
        return (
          <TableRow key={mbti.username}>
            <TableCell>
              <TextField
                id="standard-basic"
                label="이름"
                variant="standard"
                value={mbti.username}
                // onChange={(event: { target: { value: string } }) =>
                //   setInput("username", event.target.value)
                // }
              />
            </TableCell>
            <TableCell>
              {mbti.energy}
              {mbti.recognition}
              {mbti.decision}
              {mbti.life_style}
            </TableCell>
            {mbti.descriptions &&
              mbti.descriptions.map((description) => {
                return <TableCell>{description}</TableCell>;
              })}
          </TableRow>
        );
      })}
    </TableBody>
  </Table>
);
