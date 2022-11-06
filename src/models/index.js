// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const LifePattern = {
  "J": "J",
  "P": "P"
};

const Decision = {
  "T": "T",
  "F": "F"
};

const Recognition = {
  "N": "N",
  "S": "S"
};

const Energy = {
  "E": "E",
  "I": "I"
};

const { Mbti } = initSchema(schema);

export {
  Mbti,
  LifePattern,
  Decision,
  Recognition,
  Energy
};