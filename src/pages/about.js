import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';

const About = () => {
  const data = useStaticQuery(graphql`
    query getSiteTitle {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Layout title="About this site" description="more about this site">
      <p>About page</p>
    </Layout>
  );
};

export default React.memo(About);
