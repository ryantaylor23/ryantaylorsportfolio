import React from 'react';

const Footer = () => {
  return (
    <div
      className="container-fluid bg-image p-5"
      style={{
        backgroundImage:
          'url("https://cdn.pixabay.com/photo/2016/11/03/14/06/wood-1794340_1280.jpg")',
        backgroundSize: 'cover',
      }}
    >
      <h4 className="text-center" style={{ color: '#65342b' }}>
        <a
          href="https://github.com/ryantaylor23/ryantaylor23.github.io"
          target="_blank"
        >
          <img
            src="https://stackblitz.com/storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBeEdZQ1E9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--6f734fd10ed3dff279d676b58c94a3284ae04f78/github-link.png"
            alt="github-link"
          />
        </a>{' '}
        {''}
        <a
          href="https://www.linkedin.com/in/ryan-taylor-91490b316/"
          target="_blank"
        >
          <img
            src="https://stackblitz.com/storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNktqQ1E9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--f1a333a61b118e15803ffc7841de941f84f15175/linkin-link.png"
            alt="linkedin-link"
          />
        </a>
        <br />
        Contact me by Email:{' '}
        <a
          className="footer-links"
          href="mailto:ryctaylor1@gmail.com"
          target="_blank"
        >
          ryctaylor1@gmail.com
        </a>
        <br />
        or by Phone:{' '}
        <a className="footer-links" href="tel:+12089604849" target="_blank">
          +1(208)-960-4849
        </a>
      </h4>
    </div>
  );
};

export default Footer;
