import { Link } from 'gatsby';
import * as React from 'react';

const IndexPage = () => {
  return (
    <div>
      <Link to="/about">About</Link>
      <p>Hello mate</p>
    </div>
  );
};

export default React.memo(IndexPage);
