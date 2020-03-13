import React from 'react';
import ArticleItem from './ArticleItem';

const ArticlesList = (props) => {
  const { list } = props;
  return (
    <div className='ui items'>
      {
        list.map((item, idx) => <ArticleItem 
          key={idx}
          article={item}
        />)
      }
    </div>
  )
}

export default ArticlesList;
