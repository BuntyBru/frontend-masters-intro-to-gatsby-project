import { Link } from 'gatsby';
import * as React from 'react';
import { Seo } from '../components/seo';

const IndexPage = () => {
  return (
    <div>
      <Seo />
      <Link to="/about">About</Link>
      <p>Hello mate</p>
    </div>
  );
};

export default React.memo(IndexPage);
