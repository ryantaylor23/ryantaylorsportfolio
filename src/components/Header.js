import React from 'react';

const Header = () => {
  return (
    <div
      className="container-fluid text-center bg-image p-5"
      style={{
        backgroundImage:
          'url("https://cdn.pixabay.com/photo/2016/11/03/14/06/wood-1794340_1280.jpg")',
        backgroundSize: 'cover',
      }}
    >
      <h1 style={{ color: '#65342b' }}>
        <a href="/">
          <img
            style={{ float: 'left', height: 75, paddingBottom: 15 }}
            src="https://stackblitz.com/storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNkNqQ1E9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--c50ec712fb3891ed2f5afd956b68ef5586979700/home-link.png"
            alt="Home-Link"
          />
        </a>
        Ryan Taylor's Portfolio
      </h1>
    </div>
  );
};

export default Header;
