import React, { useReducer } from 'react';
import { data } from '../../data';
import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from './actions';
import reducer from './reducer';

const defaultState = {
  people: data,
  isLoading: false,
};

function UseReducer() {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: { id } });
  };

  const clearList = () => {
    dispatch({ type: CLEAR_LIST });
  };

  const resetList = () => {
    dispatch({ type: RESET_LIST });
  };

  return (
    <>
      <div>
        {state.people.map((person) => {
          const { id, name } = person;
          return (
            <div key={id}>
              <h4>{name}</h4>
              <button type='button' onClick={() => removeItem(id)}>
                remove
              </button>
            </div>
          );
        })}
        {state.people.length < 1 ? (
          <button onClick={resetList}>reset</button>
        ) : (
          <button onClick={clearList}>clear all</button>
        )}
      </div>
    </>
  );
}

export default UseReducer;
