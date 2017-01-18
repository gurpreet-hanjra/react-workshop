import React, { Component } from 'react';

export default class List extends Component {
  render() {
    console.log('props in list', this.props.results);
    let rows = [];

    if (this.props.results !== null) {


      let items = this.props.results.results;
      let itemsLen = items.length;

      console.log(items, itemsLen);

      for (let i=0;i<itemsLen;i++) {
        console.log('dadsad',items[i]);
        rows.push(<li key={i}>
          <span>{items[i].title}</span>
          <img src={`https://image.tmdb.org/t/p/w500/${items[i].poster_path} `}/>
          </li>)
      }



    }



    return (
      <div>{rows}</div>

    );
  }
}
