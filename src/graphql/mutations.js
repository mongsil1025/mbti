/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const createMbti = /* GraphQL */ `
  mutation CreateMbti(
    $input: CreateMbtiInput!
    $condition: ModelMbtiConditionInput
  ) {
    createMbti(input: $input, condition: $condition) {
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
export const updateMbti = /* GraphQL */ `
  mutation UpdateMbti(
    $input: UpdateMbtiInput!
    $condition: ModelMbtiConditionInput
  ) {
    updateMbti(input: $input, condition: $condition) {
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
export const deleteMbti = /* GraphQL */ `
  mutation DeleteMbti(
    $input: DeleteMbtiInput!
    $condition: ModelMbtiConditionInput
  ) {
    deleteMbti(input: $input, condition: $condition) {
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
