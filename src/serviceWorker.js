import { createStore } from "redux";

//STORE -> GLOBOLIZED STATE

//ACTION INCREMENT -> DESCRIBE WHAT WE GONNA DO -> CALLED
// action is a func which returns an object
const increment = () => {
  return {
    type: 'INCREMENT',
  };
};
const decrement = () => {
  return {
    type: 'DECREMENT',
  };
};
//REDUCER -> DESCRIBES HOW ACTIONS TRANSFORM THE STATE INTO THE NEXT STATE -> CHECK WHICH ACTION WE DID AND THEN UPDATE STATE
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state + 1;
  }
};

let store = createStore(counter);

//display in console
store.subscribe(() => console.log(store.getState()));

//DISPATCH -> SEND ACTION INTO REDUCER
store.dispatch(increment());