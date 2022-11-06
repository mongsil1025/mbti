// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Todo, Mbti } = initSchema(schema);

export {
  Todo,
  Mbti
};