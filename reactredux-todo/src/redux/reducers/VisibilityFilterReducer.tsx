import { SET_VISIBILITY_FILTER, VisibilityFilters } from 'redux/actions';
import { VisibilityState, SetVisibilityFilterAction } from 'types';

const initialState: VisibilityState = {
  filter: VisibilityFilters.SHOW_ALL,
};

function VisibilityReducer(
  state: VisibilityState = initialState,
  action: SetVisibilityFilterAction,
): VisibilityState {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return {
        filter: action.filter,
      };
    default:
      return state;
  }
}

export default VisibilityReducer;
