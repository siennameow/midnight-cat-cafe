import { gql } from "@apollo/client";

export const GET_MY_EVENTS = gql`
  query Query {
    getMyEvents {
      title
      users {
        username
      }
    }
  }
`;

export const GET_PROFILE = gql`
  query Query {
    getMyEvents {
      title
      users {
        username
      }
    }
    me {
      username
      email
    }
  }
`;
