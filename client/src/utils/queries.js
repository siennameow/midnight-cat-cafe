import { gql } from "@apollo/client";

// returns an array of events that the user has joined
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

// returns the user's infomration and all their events
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

// returns the titles and times of all the events
export const GET_EVENTS = gql`
  query Query {
    events {
      title
      time
      image
    }
  }
`;

// gets the information from a single event and the guest list
export const GET_EVENT = gql`
  query Query($title: String!) {
    event(title: $title) {
      title
      time
      users {
        username
      }
    }
  }
`;
