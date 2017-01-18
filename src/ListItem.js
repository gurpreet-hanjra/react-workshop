import React from 'react';

const ListItem = props => {
  console.log(props);
  return (
    <li>
    <span>{props.item.original_title}</span>
    <img src={`https://image.tmdb.org/t/p/w500/${props.item.poster_path}`} />
    </li>

  )
}

ListItem.propTypes = {
  item: React.PropTypes.object.isRequired
}

export default ListItem;
