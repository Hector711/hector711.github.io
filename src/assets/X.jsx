import * as React from 'react';

export default function X(props) {
  return (
      <svg
        fill='none'
        stroke='#24292f'
        strokeWidth={1.7}
        strokeLinecap='round'
        strokeLinejoin='round'
        viewBox='1 1 22 22'
        className='icon icon-tabler icons-tabler-outline icon-tabler-brand-x'
        {...props}
      >
        <path d='M0 0h24v24H0z' stroke='none' />
        <path d='M4 4l11.733 16H20L8.267 4zM4 20l6.768-6.768m2.46-2.46L20 4' />
      </svg>
  );
}
