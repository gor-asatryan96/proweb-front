import React from 'react';

const FavouritsGroup = ({ children, date }) => (
  <li className="favourite__item">
    <div className="favourite__itemDate">Added in
      <time datetime="2020-11-10"> {date}</time>
    </div>
    <ul className="resetList favourite__itemFields">
      {children}
    </ul>
  </li>
);

export default FavouritsGroup;
