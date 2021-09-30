import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

export function Button({texto}) {
  return (
    <Link to='sign-up'>
      <button className='btn'>{texto}</button>
    </Link>
  );
}
