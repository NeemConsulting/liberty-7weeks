import React from 'react';
import { Link } from 'gatsby';
import { Highlight, Snippet } from 'react-instantsearch-dom';

export const PostHit = clickHandler => ({ hit }) => {
  return (
    <Link
      className={'ais-InfiniteHits-item__link'}
      to={`/${hit.path}`}
      onClick={clickHandler}
    >
      <div className="image-wrapper">
        <img
          className={'ais-InfiniteHits-item__image'}
          src={`${hit.image.asset.url}?w=240&h=240&fit=crop&fm=webp`}
          alt={hit.image.alt}
        />
      </div>
      <div className={'ais-InfiniteHits-item__copy'}>
        <h4>
          <Highlight attribute="Title" hit={hit} tagName="mark" />
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
  );
};
