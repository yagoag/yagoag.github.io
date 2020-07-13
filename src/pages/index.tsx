import React from 'react';
import { PageProps, graphql } from 'gatsby';
import styled, { withTheme } from 'styled-components';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import HiIllustrationDark from '../../content/assets/HiIllustrationDark';
import GitHubIcon from '../../content/assets/GitHubIcon';
import LinkedInIcon from '../../content/assets/LinkedInIcon';
import TwitterIcon from '../../content/assets/TwitterIcon';
import { DARK_THEME } from '../components/Layout/darkTheme';

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
    color: ${({ theme }) => theme.colors.fg.base};
    margin-top: 3rem;
  }

  > * {
    flex: 1;
  }
`;

const Accent = styled.span`
  color: ${({ theme }) => theme.colors.primary.base};
  text-shadow: ${({ theme }) =>
    theme.name === DARK_THEME &&
    `-1px 0 0 ${theme.colors.fg.base},
    0 -1px 0 ${theme.colors.fg.base},
    1px 0 0 ${theme.colors.fg.base},
    0 1px 0 ${theme.colors.fg.base}`};
`;

const SocialLinkContainer = styled.div`
  > a {
    transition: opacity 400ms;

    &:not(:last-child) {
      margin-right: 24px;
    }

    &:hover {
      opacity: 0.5;
    }
  }
`;

const SocialLink = withTheme(({ link, icon: Icon, theme }) => (
  <a href={link}>
    <Icon fill={theme.colors.fg.base} width={24} />
  </a>
));

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
          <SocialLinkContainer>
            <SocialLink link="https://github.com/yagoag" icon={GitHubIcon} />
            <SocialLink
              link="https://www.linkedin.com/in/yagoag/"
              icon={LinkedInIcon}
            />
            <SocialLink link="https://twitter.com/yagoag" icon={TwitterIcon} />
          </SocialLinkContainer>
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
