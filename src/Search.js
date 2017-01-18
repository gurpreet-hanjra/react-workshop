import React, { Component } from 'react';
import tmdbHelper from './helpers/tmdbHelper';

const terms = ['dangal', 'befikre'];

export default class Search extends Component {



  handleSearch = (e) => {
    //console.log('handleSearch', e.currentTarget.type);

    let movie;

    if (e.currentTarget.type === 'submit') {
      movie = this.refs.searchInputText.value;
    } else {
      movie = e.currentTarget.innerHTML;
    }

    //console.log(movie);
    tmdbHelper.getMovies(movie)
              .then(res => {
                //console.log(res.data.results);
                this.props.updateSearch(res.data.results);
              })
  }
  render() {
    return (
      <div>
        <input type="text" placeholder="Search for a movie" ref="searchInputText"/>
        <button type="Submit" onClick={this.handleSearch}>Search</button>

        <ul>
          {terms.map(function(term, i){
            return <li onClick={this.handleSearch} key={i}>{term}</li>
          }.bind(this))}
        </ul>
      </div>
    );
  }
}
