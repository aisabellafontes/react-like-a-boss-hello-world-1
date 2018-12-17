import _ from 'lodash';
import React from 'react';

import Category from './Category';
import Item from './Item';

const Data = props => {
  const { data } = props;

  const categorized = _.groupBy(data, x => x.category);
  const content = [];

  const separate = _.forEach(categorized, (value, key) =>
    content.push(
      <Category key={key} title={key}>
        {console.log(value)}
        {value.map(item => (
          <Item key={item.name} name={item.name} price={item.price} />
        ))}
      </Category>
    )
  );

  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
        {content.map(item => item)}
      </tbody>
    </table>
  );
};

export default Data;
