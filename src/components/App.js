import React, { Fragment, Component } from 'react';
import Filters from './Filters';
import newsapi from '../apis/newsapi';

class App extends Component {
  state = {
    filters: {
      country: '',
      endpoint: '',
      search: '',
    },
  };

  onSubmit = (data) => {
    const { country, endpoint, search='bitcoin' } = data;
    if (endpoint === 'everything') {
      const params = { q: 'bitcoin' };
      const searchResult = newsapi.get('/everything', params);
      console.log(searchResult);
    }
  };

  render() {
    return (
      <Fragment>
        <h1>Chemmy News App</h1>
        <Filters
          onSubmit={this.onSubmit}
        />
      </Fragment>
    )
  }
};

export default App;