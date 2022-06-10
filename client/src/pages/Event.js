import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { GET_EVENT } from '../utils/queries';
import { ADD_ME_TO_EVENT, REMOVE_ME_FROM_EVENT } from '../utils/mutations';
import { useQuery, useMutation } from '@apollo/client';
import { Button } from 'react-bootstrap';

const handleAdd = () => {
  // TODO; use mutation
};

function Event(props) {
  const { title } = useParams();
  const { loading, data } = useQuery(GET_EVENT, {
    variables: { title },
  });

  return loading ? (
    <div>Loading...</div>
  ) : (
    <div className="container">
      {console.log(data)}
      <h1>{data.event.title}</h1>
      <Link to="/Events">
        <Button>Go back to the main list!</Button>
      </Link>
      <h2>Guest list includes</h2>
      {data.event.users.map((user) => {
        return <h3>{user.username}</h3>;
      })}
      <Button>Add me to the event!</Button>
    </div>
  );
}

export default Event;
