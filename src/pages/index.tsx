import React from 'react';
import { PageProps, graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import HiIllustrationDark from '../../content/assets/HiIllustrationDark';
import GitHubIcon from '../../content/assets/GitHubIcon';
import LinkedInIcon from '../../content/assets/LinkedInIcon';
import TwitterIcon from '../../content/assets/TwitterIcon';

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
  text-align: right;

  > div > p {
    font-family: 'Work Sans', -apple-system, 'Open Sans', 'Helvetica Neue',
      sans-serif;
    font-size: 64px;
    font-weight: 600;
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

const SocialLinks = styled.div`
  > a {
    transition: opacity 400ms;

    &:not(:last-child) {
      margin-right: 24px;
    }

    &:hover {
      opacity: 0.7;
    }
  }
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
          aria-label="illustration of Yago waving hi behind a laptop, next to a cup of coffee"
        />
        <div>
          <p>
            Hi, I am Yago and I <Accent>love</Accent> front-end development
          </p>
          <SocialLinks>
            <a href="https://github.com/yagoag">
              <GitHubIcon fill="#fffffe" width={24} />
            </a>
            <a href="https://www.linkedin.com/in/yagoag/">
              <LinkedInIcon fill="#fffffe" width={24} />
            </a>
            <a href="https://twitter.com/yagoag`">
              <TwitterIcon fill="#fffffe" width={24} />
            </a>
          </SocialLinks>
        </div>
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
