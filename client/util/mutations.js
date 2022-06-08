import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

export const CREATE_USER = gql`
  mutation AddUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
    }
  }
`;

export const ADD_ME_TO_EVENT = gql`
  mutation Mutation($title: String!) {
    addMeToEvent(title: $title) {
      users {
        username
      }
    }
  }
`;

export const REMOVE_ME_FROM_EVENT = gql`
  mutation Mutation($title: String!) {
    removeMeFromEvent(title: $title) {
      users {
        username
      }
    }
  }
`;
