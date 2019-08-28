import React, { useReducer } from 'react';

const initialState = {
    count: 0
};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

export default function UseReducerExample(props) {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div className="container">
            <p>This is the useReducer example</p>
            <p>You clicked {state.count} times</p>
            <button onClick={() => dispatch({type: 'increment'})}>+</button>
            <button onClick={() => dispatch({type: 'decrement'})}>-</button>
        </div>
    );
}