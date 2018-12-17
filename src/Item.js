import React from 'react';

const Item = props => {
  const { price, name } = props;
  return (
    <tr>
      <td>{name}</td>
      <td>{price}</td>
    </tr>
  );
};

export default Item;
