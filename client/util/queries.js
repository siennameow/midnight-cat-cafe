import { gql } from "@apollo/client";

const GET_MY_EVENTS = gql`
  query Query {
    getMyEvents {
      title
      users {
        username
      }
    }
  }
`;

const GET_PROFILE = gql`
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
