import React from 'react';

const PreviewCard = () => (
  <article
    className='post-card post


 '
  >
    <a className='post-card-image-link' href='/no-prize/'>
      <img
        className='post-card-image'
        src=''
        alt='No Prize for Doing It the Hard Way (2020 Retrospective)'
      />
    </a>

    <div className='post-card-content'>
      <a className='post-card-content-link' href='/no-prize/'>
        <header className='post-card-header'>
          <div className='post-card-primary-tag'>making</div>

          <h2 className='post-card-title'>
            No Prize for Doing It the Hard Way (2020 Retrospective)
          </h2>
        </header>

        <section className='post-card-excerpt'>
          <p>
            The struggles, failures, and financial realities of bootstrapping an
            indie software business in 2020.
          </p>
        </section>
      </a>

      <footer className='post-card-meta'>
        <ul className='author-list'>
          <li className='author-list-item'>
            <div className='author-name-tooltip'>Monica Lent</div>
            <div className='static-avatar author-profile-image'>
              <img src='' />
            </div>
          </li>
        </ul>
        <div className='post-card-byline-content'>
          <span>Monica Lent</span>
          <span className='post-card-byline-date'>
            <time dateTime='2020-12-28'>28 December 2020</time>
            <span className='bull'>•</span> 10 min read
          </span>
        </div>
      </footer>
    </div>
  </article>
);

export default PreviewCard;
