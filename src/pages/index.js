import { Link } from 'gatsby';
import * as React from 'react';
import Layout from '../components/layout';

const IndexPage = () => {
  return (
    <Layout>
      <p>Hello mate</p>
    </Layout>
  );
};

export default React.memo(IndexPage);
