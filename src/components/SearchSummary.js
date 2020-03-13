import React from 'react';

const SearchSummary = (props) => {
  return (
    <div className='ui segment'>
      <b>Search Results!</b>
      <p>Found {props.articleCount} articles</p>
    </div>
  )
};

export default SearchSummary;
