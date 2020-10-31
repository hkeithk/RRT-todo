import { setVisibilityFilter } from 'redux/actions';
import { SET_VISIBILITY_FILTER, VisibilityFilters } from 'redux/actions';
import { VisibilityState } from 'types';

const initialState: VisibilityState = {
  filter: VisibilityFilters.SHOW_ALL,
};

export default initialState;
