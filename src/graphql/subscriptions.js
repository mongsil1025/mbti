/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateDescription = /* GraphQL */ `
  subscription OnCreateDescription(
    $filter: ModelSubscriptionDescriptionFilterInput
  ) {
    onCreateDescription(filter: $filter) {
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
export const onUpdateDescription = /* GraphQL */ `
  subscription OnUpdateDescription(
    $filter: ModelSubscriptionDescriptionFilterInput
  ) {
    onUpdateDescription(filter: $filter) {
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
export const onDeleteDescription = /* GraphQL */ `
  subscription OnDeleteDescription(
    $filter: ModelSubscriptionDescriptionFilterInput
  ) {
    onDeleteDescription(filter: $filter) {
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
export const onCreateMbti = /* GraphQL */ `
  subscription OnCreateMbti($filter: ModelSubscriptionMbtiFilterInput) {
    onCreateMbti(filter: $filter) {
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
export const onUpdateMbti = /* GraphQL */ `
  subscription OnUpdateMbti($filter: ModelSubscriptionMbtiFilterInput) {
    onUpdateMbti(filter: $filter) {
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
export const onDeleteMbti = /* GraphQL */ `
  subscription OnDeleteMbti($filter: ModelSubscriptionMbtiFilterInput) {
    onDeleteMbti(filter: $filter) {
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
export const onCreateMbtiDescriptions = /* GraphQL */ `
  subscription OnCreateMbtiDescriptions(
    $filter: ModelSubscriptionMbtiDescriptionsFilterInput
  ) {
    onCreateMbtiDescriptions(filter: $filter) {
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
export const onUpdateMbtiDescriptions = /* GraphQL */ `
  subscription OnUpdateMbtiDescriptions(
    $filter: ModelSubscriptionMbtiDescriptionsFilterInput
  ) {
    onUpdateMbtiDescriptions(filter: $filter) {
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
export const onDeleteMbtiDescriptions = /* GraphQL */ `
  subscription OnDeleteMbtiDescriptions(
    $filter: ModelSubscriptionMbtiDescriptionsFilterInput
  ) {
    onDeleteMbtiDescriptions(filter: $filter) {
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
