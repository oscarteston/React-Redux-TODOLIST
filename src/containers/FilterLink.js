// import { connect } from 'react-redux';
// import { setVisibilityFilter } from '../actions/actions';
// import Link from '../components/Link';

// const mapStateToProps = (state, ownProps) => {
//   return {
//     active: ownProps.filter === state.visibilityFilter
//   }
// };

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     onClick: () => {
//       dispatch(setVisibilityFilter(ownProps.filter))
//     }
//   }
// };

// const FilterLink = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Link);

// export default FilterLink;


import React from 'react';
import { Link } from 'react-router';

const FilterLink = ({ filter, children }) => (
  <Link
    to={filter === 'SHOW_ALL' ? '/' : filter}
    activeStyle={{
      textDecoration: 'none',
      color: 'black'
    }}
  >
    {children}
  </Link>
);

export default FilterLink;