import React from 'react';
import { Button } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { ADD_ME_TO_EVENT, REMOVE_ME_FROM_EVENT } from '../../utils/mutations';

function SignUpButton({ title, signedUp }) {
  const [addTo, { error: addError, loading: addLoading }] =
    useMutation(ADD_ME_TO_EVENT);
  const [removeFrom, { error: removeError }] =
    useMutation(REMOVE_ME_FROM_EVENT);

  const handleAdd = async () => {
    try {
      console.log('adding to event: ', title);
      await addTo({
        variables: { title },
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleRemove = async () => {
    try {
      console.log('removing from event: ', title);
      await removeFrom({
        variables: { title },
      });
    } catch (err) {
      console.log(err);
    }
  };

  return signedUp ? (
    <>
      <Button onClick={handleRemove}>Leave the event</Button>
      {removeError && <div>Error with removing you</div>}
    </>
  ) : (
    <>
      <Button onClick={handleAdd}>Join the event!</Button>
      {addError && <div>Error with adding you</div>}
    </>
  );
}

export default SignUpButton;
