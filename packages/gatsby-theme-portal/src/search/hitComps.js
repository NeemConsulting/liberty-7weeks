import React from 'react';
import { Highlight, Snippet } from 'react-instantsearch-dom';
import { Link } from 'gatsby';

export const PostHit = clickHandler => ({ hit }) => {
  return (
    <>
      <Link to={`/` + hit.slug} onClick={clickHandler}>
        <div className="image-wrapper">
          <img src={hit.image.asset.url} alt={''} />
        </div>
        <h4>
          <Highlight attribute="Title" hit={hit} tagName="mark" />
        </h4>
        <p>
          <Snippet attribute="ingredientBody" hit={hit} tagName="mark" />
          <Snippet attribute="usageBody" hit={hit} tagName="mark" />
          <Snippet attribute="galleryBody" hit={hit} tagName="mark" />
          <Snippet attribute="howTobody" hit={hit} tagName="mark" />
        </p>
      </Link>
    </>
  );
};
