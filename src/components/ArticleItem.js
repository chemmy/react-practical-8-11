import React from 'react'

const ArticleItem = (props) => {
  const { article } = props;
  return (
    <div className='item'>
      <div className="image">
        <img 
          className="image left floated" 
          src={article.urlToImage}
          alt={article.title}
        />
      </div>
      <div className="content">
        <a href={article.url} target='_blank' rel='noreferrer noopener' className="header">{article.title}</a>
        <div className="description">{article.description}</div>
      </div>
    </div>
  )
}

export default ArticleItem;
