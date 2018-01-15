import React from 'react';

const Shopitem = ({ name, inCart }) => <li className={inCart ? 'inCart' : ''}>{name}</li>;

export default Shopitem;
