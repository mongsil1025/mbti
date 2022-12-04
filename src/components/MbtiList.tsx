import {
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
} from "@aws-amplify/ui-react";
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
  descriptions?: Description[];
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
        {props.data.map((mbti) => {
          return (
            <>
              {mbti.descriptions &&
                mbti.descriptions.map((description) => {
                  return (
                    <TableCell as="th">{description.display_name}</TableCell>
                  );
                })}
            </>
          );
        })}
      </TableRow>
    </TableHead>
    <TableBody>
      {props.data.map((mbti) => {
        return (
          <TableRow key={mbti.username}>
            <TableCell>{mbti.username}</TableCell>
            <TableCell>
              {mbti.energy}
              {mbti.recognition}
              {mbti.decision}
              {mbti.life_style}
            </TableCell>
            {mbti.descriptions &&
              mbti.descriptions.map((description) => {
                return <TableCell>{description.data}</TableCell>;
              })}
          </TableRow>
        );
      })}
    </TableBody>
  </Table>
);
