import React, { useState, createContext } from 'react';
import { Link } from 'gatsby';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import Y from '../../../content/assets/Y';
import GatsbyIcon from '../../../content/assets/GatsbyIcon';
import darkTheme, { DARK_THEME } from './darkTheme';
import lightTheme, { LIGHT_THEME } from './lightTheme';

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.bg.base};
    font-family: 'Merriweather', Georgia, 'Times New Roman', Times, serif;
    color: ${({ theme }) => theme.colors.fg.dark || theme.colors.fg.base};
  }

  h1, h2, h3, h4, h5, h6, button {
    font-family: 'Work Sans', -apple-system, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: ${({ theme }) => theme.colors.fg.base};
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary.base};
    box-shadow: none;
    text-decoration: none;
    transition: color 400ms;

    &:hover, &:focus {
      color: ${({ theme }) => theme.colors.primary.light};
    }
  }

  button {
    letter-spacing: 0.18em;
  }
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
    color: ${({ theme }) => theme.colors.primary.base};
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
  background-color: ${({ theme }) => theme.colors.primary.base};
  padding: 6px 8px;

  &:not(:focus) {
    opacity: 0;
    z-index: -1;
  }

  &:focus {
    color: ${({ theme }) => theme.colors.fg.base};
  }
`;

const PageLink = styled.li`
  font-size: 16px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  display: block;
  padding: 0.15rem 3rem;
  margin: 0 0.5rem;
  border: ${({ active, theme }) =>
    active && `1px solid ${theme.colors.primary.base}`};
  transition: border 400ms;

  &:hover,
  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.light};
  }
`;

const StyledY = styled(Y)`
  margin-bottom: -22px;
  margin-right: 4px;
`;

export const ThemeToggleContext = createContext({ toggleTheme: () => {} });

const ThemeToggle = styled.button.attrs(({ theme }) => ({
  children: theme.name === DARK_THEME ? '☀️' : '🌙',
}))`
  background: none;
  border: none;
  font-size: ${({ theme }) => (theme.name === DARK_THEME ? '24px' : '22px')};
  margin-left: 8px;
  transition: opacity 400ms, filter 400ms;
  cursor: pointer;

  &:not(:hover) {
    opacity: ${({ theme }) => (theme.name === DARK_THEME ? 0.3 : 0.7)};
    filter: grayscale(100%);
  }
`;

const Footer = styled.footer`
  font-family: 'Work Sans', -apple-system, 'Open Sans', 'Helvetica Neue',
    sans-serif;
  text-align: right;
  margin-top: 1.5rem;
`;

const defaultTheme =
  localStorage.getItem('theme') &&
  [DARK_THEME, LIGHT_THEME].includes(localStorage.getItem('theme'))
    ? localStorage.getItem('theme')
    : window.matchMedia('(prefers-color-scheme: light)').matches
    ? LIGHT_THEME
    : DARK_THEME;

const Layout = ({ location, children }) => {
  const [theme, setTheme] = useState(defaultTheme);
  const rootPath = `${__PATH_PREFIX__}/`;

  const toggleTheme = () => {
    const newTheme = theme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME;
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <ThemeProvider theme={theme === LIGHT_THEME ? lightTheme : darkTheme}>
      <ThemeToggleContext.Provider value={{ toggleTheme }}>
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
                <StyledY role="img" aria-label="y" />
                agoag
              </Link>
              <ThemeToggle
                onClick={toggleTheme}
                aria-label={`change to ${
                  theme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME
                } theme`}
              />
            </h1>
            <ul>
              <Link to={rootPath}>
                <PageLink active={location.pathname === rootPath}>
                  Home
                </PageLink>
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
            Built with{' '}
            <a href="https://www.gatsbyjs.org">
              <GatsbyIcon
                width={18}
                fill="#94a1b2"
                style={{ marginBottom: -3 }}
              />
            </a>
          </Footer>
        </Container>
      </ThemeToggleContext.Provider>
    </ThemeProvider>
  );
};

export default Layout;
