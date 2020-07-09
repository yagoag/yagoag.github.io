import React from 'react';
import { Link } from 'gatsby';
import styled, { createGlobalStyle } from 'styled-components';
import Y from '../../content/assets/Y';

const GlobalStyles = createGlobalStyle`
  body {
    background-color: #16161a;
    font-family: 'Merriweather', Georgia, 'Times New Roman', Times, serif;
    color: #94a1b2;
  }

  h1, h2, h3, h4, h5, h6, button {
    font-family: 'Work Sans', -apple-system, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #fffffe;
  }

  a {
    text-decoration: none;
    color: #7f5af0;
    box-shadow: none;
    text-decoration: none;
    transition: color 400ms;

    &:hover, &:focus {
      color: #b299ff;
    }
  }

  button {
    letter-spacing: 0.18em;
  }

  /*
  Dark palette
  https://www.happyhues.co/palettes/4
  Background: #16161a
  Secondary background shade: #242629
  Main text: #fffffe
  Secondary text: #94a1b2
  Dark accent: #010101
  Element background/highlight: #7f5af0
  Color accents (tertiary color): #2cb67d
  */

  /*
  Light palette
  https://www.happyhues.co/palettes/6
  Background: #fffffe
  Secondary background shade: #d1d1e9
  Text: #2b2c34
  Dark accent: #2b2c34
  Element background/highlight: #6246ea
  Color accents (tertiary color): #e45858
  */
`;

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 1.5rem 3rem;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  font-family: 'Work Sans', -apple-system, 'Open Sans', 'Helvetica Neue',
    sans-serif;

  h1 {
    color: #7f5af0;
    font-size: 36;
    margin: 0 0 22px 0;
  }

  ul {
    list-style: none;
    display: flex;
    margin-top: 0.5rem;
  }
`;

const SkipNavLink = styled.a`
  position: absolute;
  top: 10px;
  background-color: #7f5af0;
  color: #fffffe;
  padding: 6px 8px;

  &:not(:focus) {
    opacity: 0;
    z-index: -1;
  }

  &:focus {
    color: #fffffe;
  }
`;

const PageLink = styled.li`
  font-size: 16px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  display: block;
  padding: 0.15rem 3rem;
  margin: 0 0.5rem;
  border: ${({ active }) => active && '1px solid #7f5af0'};
  transition: border 400ms;

  &:hover,
  &:active {
    border-color: #b299ff;
  }
`;

const StyledY = styled(Y)`
  margin-bottom: -22px;
  margin-right: 4px;
`;

const Footer = styled.footer`
  font-family: 'Work Sans', -apple-system, 'Open Sans', 'Helvetica Neue',
    sans-serif;
  text-align: right;
  margin-top: 1.5rem;
`;

const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;

  return (
    // TODO: add theme provider
    <>
      <link
        href="https://fonts.googleapis.com/css?family=Merriweather:400,400i&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Work Sans:400,600&display=swap"
        rel="stylesheet"
      />
      <GlobalStyles />
      <Container>
        <Header>
          <SkipNavLink href="#main-content">Skip to content</SkipNavLink>
          <h1>
            <Link to={'/'}>
              <StyledY role="img" label="y" />
              agoag
            </Link>
          </h1>
          <ul>
            <Link to={rootPath}>
              <PageLink active={location.pathname === rootPath}>Home</PageLink>
            </Link>
            <Link to={`${rootPath}blog`}>
              <PageLink active={location.pathname.includes('/blog')}>
                Blog
              </PageLink>
            </Link>
          </ul>
        </Header>
        <main id="main-content">{children}</main>
        <Footer>
          Built with <a href="https://www.gatsbyjs.org">Gatsby</a>.
        </Footer>
      </Container>
    </>
  );
};

export default Layout;
