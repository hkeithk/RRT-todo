import React from 'react';
import { VisibilityFilters } from 'redux/actions';

interface Props {
  visibilityFilter: string;
  setVisibilityFilter: (filter: string) => void;
}

const FilterButton: React.FC<Props> = ({ setVisibilityFilter, visibilityFilter }) => {
  // const filterHandler = (value: number) => {
  //   switch(value){
  //     case 1:
  //       setVisibilityFilter('SHOW_ALL')
  //     case 2:
  //       setVisibilityFilter('C')
  //   }
  // }
  return (
    <div>
      {/* <button onClick={setVisibilityFilter(VisibilityFilters.SHOW_ALL)}>Show All</button> */}
      <button>Show Active</button>
      <button>Show Complete</button>
    </div>
  );
};

export default FilterButton;
