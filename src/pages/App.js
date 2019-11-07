import React from 'react';
import y from '../assets/y.svg';
import sameLinePls from '../assets/same-line-pls.png';
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
          <div className="title">Hi, I'm Yago!</div>
          <div className="description-box">
            <p>A software engineer based in Belém, Pará, Brazil</p>
            <p>
              I solve problems no matter what technology, but I have a special
              place in my heart for web development, especially front-end
              development.
            </p>
          </div>
        </div>
      </section>
      <section className="description">
        <div className="description-container">
          <div className="description-box">
            <p>
              I am an inline-bracket kind of person, but I can handle working on
              projects which use or with colleagues who prefer the bracket in
              the next line (although I don't understand why).
            </p>
            <p>
              I like both <code>camelCase</code> and <code>snake_case</code>,
              and I'd rather use <code>'single quotes'</code> than{' '}
              <code>"double ones"</code>.
            </p>
            <p>
              By the way, here's a <a href="#">.prettierrc</a> file with my
              personal preferences.
            </p>
          </div>
        </div>
        <img
          src={sameLinePls}
          alt="same line please meme"
          className="same-line-meme"
        />
      </section>
    </div>
  );
};
