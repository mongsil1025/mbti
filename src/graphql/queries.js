/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMbti = /* GraphQL */ `
  query GetMbti($id: ID!) {
    getMbti(id: $id) {
      id
      name
      energy
      recognition
      decision
      life_pattern
      createdAt
      updatedAt
    }
  }
`;
export const listMbtis = /* GraphQL */ `
  query ListMbtis(
    $filter: ModelMbtiFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMbtis(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        energy
        recognition
        decision
        life_pattern
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
