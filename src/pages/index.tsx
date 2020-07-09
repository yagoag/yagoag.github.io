import React from 'react';
import { PageProps, graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import HiIllustrationDark from '../../content/assets/HiIllustrationDark';

type Data = {
  site: {
    siteMetadata: {
      title: string;
    };
  };
  allMarkdownRemark: {
    edges: {
      node: {
        excerpt: string;
        frontmatter: {
          title: string;
          date: string;
          description: string;
        };
        fields: {
          slug: string;
        };
      };
    }[];
  };
};

const Presentation = styled.div`
  display: flex;

  > p {
    font-family: 'Work Sans', -apple-system, 'Open Sans', 'Helvetica Neue',
      sans-serif;
    font-size: 64px;
    font-weight: 600;
    text-align: right;
    letter-spacing: 0.05rem;
    line-height: 1.25;
    color: #fffffe;
    margin-top: 3rem;
  }

  > * {
    flex: 1;
  }
`;

const Accent = styled.span`
  color: #7f5af0;
  text-shadow: -1px 0 0 #fffffe, 0 -1px 0 #fffffe, 1px 0 0 #fffffe,
    0 1px 0 #fffffe;
`;

const Index = ({ data, location }: PageProps<Data>) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location}>
      <SEO title={siteTitle} />
      <Presentation>
        {/* TODO: switch to light version when theme changes (lights off) */}
        <HiIllustrationDark
          role="img"
          label="illustration of Yago waving hi behind a laptop, next to a cup of coffee"
        />
        <p>
          Hi, I am Yago and I <Accent>love</Accent> front-end development
        </p>
      </Presentation>
    </Layout>
  );
};

export default Index;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
