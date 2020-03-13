import React, { Fragment, Component } from 'react';
import SearchSummary from './SearchSummary';
import ArticlesList from './ArticlesList';

class SearchResult extends Component {
  state = {
    articleCount: 0,
    articles: [],
  };

  componentDidUpdate(prevProps) {
    if (this.props.searchResult !== prevProps.searchResult) {
      const { searchResult } = this.props;
      const articleCount = (searchResult && searchResult.totalResults) || 0;
      const articles = (searchResult && searchResult.articles) || [];
      this.setState({ ...this.setState, articleCount });
      this.setState({ ...this.setState, articles });
    }
  }

  render() {
    return (
      <Fragment>
        <SearchSummary articleCount={this.state.articleCount} />
        <ArticlesList list={this.state.articles} />
      </Fragment>
    )
  }
};

export default SearchResult;