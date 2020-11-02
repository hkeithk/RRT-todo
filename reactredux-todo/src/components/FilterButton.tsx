import React from 'react';
import { VisibilityFilters } from 'redux/actions';

interface Props {
  visibilityFilter: string;
  setFilter: (filter: string) => void;
}

const FilterButton: React.FC<Props> = ({ setFilter, visibilityFilter }) => {
  return (
    <div>
      <button onClick={() => setFilter(VisibilityFilters.SHOW_ALL)}>Show All</button>
      <button onClick={() => setFilter(VisibilityFilters.SHOW_INCOMPLETE)}>Show Active</button>
      <button onClick={() => setFilter(VisibilityFilters.SHOW_COMPLETED)}>Show Complete</button>
    </div>
  );
};

export default FilterButton;
