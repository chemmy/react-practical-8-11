import React, { Component } from 'react';
import Select from './forms/Select';

class Filters extends Component {
  state = {
    country: '',
    endpoint: 'top-headlines',
    search: ''
  };

  countryOptions = [
    { value: 'au', name: 'Australia' },
    { value: 'cn', name: 'China' },
    { value: 'gr', name: 'Greece' },
    { value: 'it', name: 'Italy' },
    { value: 'jp', name: 'Japan' },
    { value: 'nz', name: 'New Zealand' },
    { value: 'ph', name: 'Philippines' },
    { value: 'ru', name: 'Russia' },
    { value: 'kr', name: 'South Korea' },
    { value: 'us', name: 'United States of America' },
  ];
  endpointOptions = [
    { value: 'top-headlines', name: 'Top Headlines' },
    { value: 'everything', name: 'Everything' },
  ];

  onFieldChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    if (e.target.type === 'select-one') {
      this.onFormSubmit(e)
    }
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit({ ...this.state, [e.target.name]: e.target.value })
  }

  render() {
    return (
      <form className='ui form' onSubmit={this.onFormSubmit}>
        <div className="three fields">
          <div className="field">
            <Select 
              name='country'
              value={this.state.country}
              optionsList={this.countryOptions}
              placeholder='Select a country'
              onSelect={this.onFieldChange}
            />
          </div>
          <div className="field">
            <Select 
              name='endpoint'
              value={this.state.endpoint}
              optionsList={this.endpointOptions}
              onSelect={this.onFieldChange}
            />
          </div>
          <div className='field'>
           <input 
            type="text" name="search" 
            value={this.state.search} 
            placeholder="Search article..." 
            onChange={this.onFieldChange}
          />
           <input type="submit" style={{visibility: 'hidden'}}/>
          </div>
        </div>
      </form>
    );
  }
};

export default Filters;
