import React from 'react';
import FilterButton from 'components/FilterButton';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppState } from 'types';
import { setVisibilityFilter } from 'redux/actions';

//interfaces for mapstate and mapdispatch
interface StateFromProps {
  visibilityFilter: string;
}

interface DispatchFromProps {
  setFilter: (filter: string) => void;
}

const mapStateToProps = (state: AppState): StateFromProps => {
  return {
    visibilityFilter: state.visibilityState.filter,
  };
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchFromProps => ({
  setFilter: (filter: string) => dispatch(setVisibilityFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterButton);
