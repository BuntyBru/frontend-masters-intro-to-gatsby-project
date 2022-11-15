import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { Seo } from '../components/seo';

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
    <div>
      <Seo title="About this site" description="more about this site" />
      <Link to="/">{data?.site?.siteMetadata?.title}</Link>
      <p>About page</p>
    </div>
  );
};

export default React.memo(About);
