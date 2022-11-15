import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

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
      <Link to="/">{data?.site?.siteMetadata?.title}</Link>
      <p>About page</p>
    </div>
  );
};

export default React.memo(About);
