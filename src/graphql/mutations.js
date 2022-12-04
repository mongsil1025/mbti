/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createDescription = /* GraphQL */ `
  mutation CreateDescription(
    $input: CreateDescriptionInput!
    $condition: ModelDescriptionConditionInput
  ) {
    createDescription(input: $input, condition: $condition) {
      id
      type
      mbti
      data
      display_name
      mbtis {
        items {
          id
          descriptionID
          mbtiID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateDescription = /* GraphQL */ `
  mutation UpdateDescription(
    $input: UpdateDescriptionInput!
    $condition: ModelDescriptionConditionInput
  ) {
    updateDescription(input: $input, condition: $condition) {
      id
      type
      mbti
      data
      display_name
      mbtis {
        items {
          id
          descriptionID
          mbtiID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteDescription = /* GraphQL */ `
  mutation DeleteDescription(
    $input: DeleteDescriptionInput!
    $condition: ModelDescriptionConditionInput
  ) {
    deleteDescription(input: $input, condition: $condition) {
      id
      type
      mbti
      data
      display_name
      mbtis {
        items {
          id
          descriptionID
          mbtiID
          createdAt
          updatedAt
        }
        nextToken
      }
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
      full_text
      descriptions {
        items {
          id
          descriptionID
          mbtiID
          createdAt
          updatedAt
        }
        nextToken
      }
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
      full_text
      descriptions {
        items {
          id
          descriptionID
          mbtiID
          createdAt
          updatedAt
        }
        nextToken
      }
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
      full_text
      descriptions {
        items {
          id
          descriptionID
          mbtiID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createMbtiDescriptions = /* GraphQL */ `
  mutation CreateMbtiDescriptions(
    $input: CreateMbtiDescriptionsInput!
    $condition: ModelMbtiDescriptionsConditionInput
  ) {
    createMbtiDescriptions(input: $input, condition: $condition) {
      id
      descriptionID
      mbtiID
      description {
        id
        type
        mbti
        data
        display_name
        mbtis {
          nextToken
        }
        createdAt
        updatedAt
      }
      mbti {
        id
        name
        energy
        recognition
        decision
        life_pattern
        full_text
        descriptions {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateMbtiDescriptions = /* GraphQL */ `
  mutation UpdateMbtiDescriptions(
    $input: UpdateMbtiDescriptionsInput!
    $condition: ModelMbtiDescriptionsConditionInput
  ) {
    updateMbtiDescriptions(input: $input, condition: $condition) {
      id
      descriptionID
      mbtiID
      description {
        id
        type
        mbti
        data
        display_name
        mbtis {
          nextToken
        }
        createdAt
        updatedAt
      }
      mbti {
        id
        name
        energy
        recognition
        decision
        life_pattern
        full_text
        descriptions {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteMbtiDescriptions = /* GraphQL */ `
  mutation DeleteMbtiDescriptions(
    $input: DeleteMbtiDescriptionsInput!
    $condition: ModelMbtiDescriptionsConditionInput
  ) {
    deleteMbtiDescriptions(input: $input, condition: $condition) {
      id
      descriptionID
      mbtiID
      description {
        id
        type
        mbti
        data
        display_name
        mbtis {
          nextToken
        }
        createdAt
        updatedAt
      }
      mbti {
        id
        name
        energy
        recognition
        decision
        life_pattern
        full_text
        descriptions {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
