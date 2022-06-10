import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { GET_EVENT } from '../utils/queries';
import { useQuery } from '@apollo/client';
import { Button } from 'react-bootstrap';
import SignUpButton from '../components/Event/SignUpButton';
import auth from '../utils/auth';

function Event(props) {
  const { title } = useParams();
  const { loading, data } = useQuery(GET_EVENT, {
    variables: { title },
  });

  return loading ? (
    <div>Loading...</div>
  ) : (
    <div className="container">
      <h1>{data.event.title}</h1>
      <Link to="/Events">
        <Button>Go back to the main list!</Button>
      </Link>
      <h2>Guest list includes</h2>
      {data.event.users.map((user) => {
        return <h3>{user.username}</h3>;
      })}
      {auth.loggedIn() ? (
        <SignUpButton
          title={title}
          signedUp={data.event.users.includes(auth.getProfile().data.username)}
        />
      ) : (
        <div>You need to be logged in to sign up for this event!</div>
      )}
    </div>
  );
}

export default Event;
