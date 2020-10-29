import React from 'react';
import { Dispatch } from 'redux';
import { addTodo } from 'redux/actions';
import { connect } from 'react-redux';
import { Todo } from 'types';

interface Props {
  dispatch: Dispatch;
}

const AddTodo: React.FC<Props> = (props: Props): JSX.Element => {
  const [input, setInput] = React.useState('');
  const { dispatch } = props;

  const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    setInput(event.currentTarget.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(addTodo(input));
    setInput('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={input} onChange={(event) => handleInputChange(event)}></input>
        <button>Add Todo</button>
      </form>
    </div>
  );
};

// no subscription to store - doesnt need updates
// no dispatch needed (2nd arg) - dispatch is given automatically
export default connect()(AddTodo);
