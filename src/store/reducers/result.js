import * as actionTypes from '../actions';

const initialState = {
  results: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        // results: state.results.concat({ id: new Date(), value: state.counter })
        // results: state.results.concat({ id: new Date(), value: state.ctr.counter })
        results: state.results.concat({ id: new Date(), value: action.result })
      }
    case actionTypes.DELETE_RESULT:
      const id = 2;
      let newArray = state.results.filter(result => result.id !== action.resultElId)
      console.log(action.resultElId)
      // newArray.splice(id, 1)
      return {
        ...state,
        results: newArray
      }
  }
  return state;
};

export default reducer;