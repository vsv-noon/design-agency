import React from 'react';
import { Link } from 'react-router';
import './Logo.scss';

const Logo = () => {
  return (
    <div className="logo">
      <Link className="logo-link" to="/">
        <svg
          width="46"
          height="48"
          viewBox="0 0 46 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_0_4)">
            <path
              d="M4.11357 17.5385L24 3.09017L43.8864 17.5385L36.2905 40.9164H11.7095L4.11357 17.5385Z"
              stroke="#EF6D58"
              strokeWidth="5"
            />
            <path
              d="M23.5 14L32.535 20.5643L29.084 31.1857H17.916L14.465 20.5643L23.5 14Z"
              fill="#EF6D58"
            />
          </g>
        </svg>
        <h4>Agency</h4>
      </Link>
    </div>
  );
};

export default Logo;
