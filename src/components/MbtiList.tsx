import {
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
} from "@aws-amplify/ui-react";
import { Mbti } from "../models";

interface MbtiTablePropsListType {
  data: Mbti[];
}

export const MbtiTable = (props: MbtiTablePropsListType) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell as="th">Name</TableCell>
        <TableCell as="th">MBTI</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {props.data.map((mbti) => {
        return (
          <TableRow key={mbti.id}>
            <TableCell>{mbti.name}</TableCell>
            <TableCell>
              {mbti.energy}
              {mbti.recognition}
              {mbti.decision}
              {mbti.life_pattern}
            </TableCell>
          </TableRow>
        );
      })}
    </TableBody>
  </Table>
);
