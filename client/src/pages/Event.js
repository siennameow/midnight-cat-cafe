import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { GET_EVENT } from '../utils/queries';
import { useQuery, useMutation } from '@apollo/client';
import { ADD_ME_TO_EVENT, REMOVE_ME_FROM_EVENT } from '../utils/mutations';
import { Button } from 'react-bootstrap';
import auth from '../utils/auth';

function Event(props) {
  // title is the parameter to the URL
  const { title } = useParams();

  // the query for getting the information about the event
  const { loading, data } = useQuery(GET_EVENT, {
    variables: { title },
  });

  // initially this is an empty array for later use
  const [userList, setUserList] = useState([]);

  // helper function that will check if the user is signed up for the event
  const getSignedUp = () => {
    let signedUp = false;
    const profile = auth.getProfile();
    const username = profile.data.username;
    userList.forEach((element) => {
      if (element.username === username) signedUp = true;
    });
    return signedUp;
  };

  const [addTo] = useMutation(ADD_ME_TO_EVENT);
  const [removeFrom] = useMutation(REMOVE_ME_FROM_EVENT);

  // when loading finishes propgate the loaded data to the array
  useEffect(() => {
    // make sure that the list exists before setting it
    if (data) setUserList(data.event.users);
  }, [data, loading]);

  const handleAdd = async () => {
    try {
      // do the graphql mutation
      await addTo({
        variables: { title },
      });
      // if we aren't on the user list add us to it
      if (!getSignedUp()) setUserList([...userList, auth.getProfile().data]);
    } catch (err) {
      console.log(err);
    }
  };

  const handleRemove = async () => {
    try {
      // do graph ql mutation
      await removeFrom({
        variables: { title },
      });
      // if we are on the user list remove us from it
      if (getSignedUp())
        setUserList(
          userList.filter(
            (user) => user.username !== auth.getProfile().data.username
          )
        );
    } catch (err) {
      console.log(err);
    }
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
      {userList.map((user) => {
        return <h3>{user.username}</h3>;
      })}
      {auth.loggedIn() ? (
        getSignedUp() ? (
          <Button onClick={handleRemove}>Leave the event!</Button>
        ) : (
          <Button onClick={handleAdd}>Sign up for the event!</Button>
        )
      ) : (
        <div>You need to be logged in to sign up for this event!</div>
      )}
    </div>
  );
}

export default Event;
