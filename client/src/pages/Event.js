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

  const getSignedUp = () => {
    let signedUp = false;
    const profile = auth.getProfile();
    const username = profile.data.username;
    data.event.users.forEach((element) => {
      console.log('checking if the username matches: ', element.username);
      console.log('profile:  ', profile);
      if (element.username === username) signedUp = true;
    });
    return signedUp;
  };

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
        <SignUpButton title={title} signedUp={getSignedUp()} />
      ) : (
        <div>You need to be logged in to sign up for this event!</div>
      )}
    </div>
  );
}

export default Event;
