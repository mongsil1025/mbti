/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDescription = /* GraphQL */ `
  query GetDescription($id: ID!) {
    getDescription(id: $id) {
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
export const listDescriptions = /* GraphQL */ `
  query ListDescriptions(
    $filter: ModelDescriptionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDescriptions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        full_text
        descriptions {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMbtiDescriptions = /* GraphQL */ `
  query GetMbtiDescriptions($id: ID!) {
    getMbtiDescriptions(id: $id) {
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
export const listMbtiDescriptions = /* GraphQL */ `
  query ListMbtiDescriptions(
    $filter: ModelMbtiDescriptionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMbtiDescriptions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        descriptionID
        mbtiID
        description {
          id
          type
          mbti
          data
          display_name
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
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
