import React, { Component } from 'react';
import Filters from './Filters';
import SearchResult from './SearchResult';
import newsapi from '../apis/newsapi';
import './App.css';

class App extends Component {
  state = {
    searchResult: {
      articleCount: 0,
      articles: []
    },
  };

  onSubmit =  async (data) => {
    const { country, endpoint, search } = data;
    const defaultParam = [{ key: 'q', value: search || '-' }];
    const param = endpoint === 'everything'
      ? defaultParam
      : [ ...defaultParam, { key: 'country', value: country }];

    const searchResult = await newsapi.get(`/${endpoint}`, param);
    this.setState({ ...this.state, searchResult: searchResult.data });
  };

  render() {
    return (
      <div className='app ui container'>
        <h1 className='title'>Chemmy News App</h1>
        <Filters
          onSubmit={this.onSubmit}
        />
        <SearchResult searchResult={this.state.searchResult}/>
      </div>
    )
  }
};

export default App;