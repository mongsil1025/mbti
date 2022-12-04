import { Amplify, API, graphqlOperation } from "aws-amplify";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import {
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
} from "@aws-amplify/ui-react";
import { Mbti } from "../models";
import { listMbtiDescriptions } from "../graphql/queries";

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
            <TableCell>극단적 단점</TableCell>
          </TableRow>
        );
      })}
    </TableBody>
  </Table>
);
