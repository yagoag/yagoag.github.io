import React from 'react';
import y from '../assets/y.svg';
import './styles.scss';

export default () => {
  return (
    <div>
      <section className="initial">
        <img src={y} alt="yagoag" className="logo" />
        <div className="scroll-icon">
          <p>Scroll Down</p>
          <div className="arrow"></div>
        </div>
      </section>
      <section className="description">
        <img src={y} alt="yagoag" className="logo" />
        <div className="description-container">
          <div className="title">Hi, I'm Yago!!</div>
          <div className="description-box">
            <p>A software engineer based in Belém, Pará, Brazil</p>
            <p>
              I love web development, from front to back-end. I am experienced
              in software development and quality assurance. I have some
              projects described in the website and I hope you'll find them
              interesting.
            </p>
            <p>
              I am an inline-bracket kind of person, but I can handle working on
              projects which use or with my friends who prefer the bracket in
              the next line (although I don't understand why). I like both
              camelCase and snake_case.
            </p>
            <p>Do not hesitate to send me a message with any questions!</p>
          </div>
        </div>
      </section>
    </div>
  );
};
