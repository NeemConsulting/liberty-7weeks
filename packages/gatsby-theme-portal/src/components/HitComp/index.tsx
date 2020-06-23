import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { Highlight, Snippet } from 'react-instantsearch-dom';

export const PostHit = clickHandler => ({ hit }) => {
  const {
    path,
    title,
    image: { asset, alt },
  } = hit;
  return (
    <article>
      <Link
        className={'ais-InfiniteHits-item__link'}
        to={path}
        onClick={clickHandler}
        aria-label={title}
      >
        <div className="image-wrapper">
          <figure>
            <Img
              fluid={asset.fluid}
              alt={alt}
              style={{ width: '360px', height: '360px' }}
            />
          </figure>
        </div>
        <div className={'ais-InfiniteHits-item__copy'}>
          <h4>
            <Highlight attribute="title" hit={hit} tagName="mark" />
          </h4>
          <p className={'ais-InfiniteHits-item__desc'}>
            <Snippet attribute="ingredientBody" hit={hit} tagName="mark" />
            <Snippet attribute="usageBody" hit={hit} tagName="mark" />
            <Snippet attribute="galleryBody" hit={hit} tagName="mark" />
            <Snippet attribute="howTobody" hit={hit} tagName="mark" />
            <Snippet attribute="featureBody" hit={hit} tagName="mark" />
            <span>{' [...]'}</span>
          </p>
        </div>
      </Link>
    </article>
  );
};
