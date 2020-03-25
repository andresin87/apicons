import React, {useRef, useCallback} from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';

const createResolution = gql`
    mutation createResolution($name: String!) {
        createResolution(name: $name) {
            _id
        }
    }
`;

const ResolutionForm = ({createResolution}) => {
  const name = useRef(null);
  const submitForm = useCallback(() => {
    createResolution({
      variables: {
        name: name.current.value
      }
    })
    .catch(error => console.log(error));
  }, [name, createResolution]);
  return (
    <div>
      <input type="text" ref={name}/>
      <button onClick={submitForm}>Submit</button>
    </div>
  );
};

export default graphql(createResolution, {
  name: 'createResolution',
  options: {
    refetchQueries: ['Resolutions']
  }
})(ResolutionForm);

