import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import classNames from 'classnames';

import useStyles from './styles';

const RelatedArticles: FunctionComponent<RelatedArticlesInterface> = ({
  articles,
  title,
}) => {
  const classes = useStyles();

  const firstArticle = articles.shift();
  const lastArticle = articles.pop();

  const renderListItem = (article: any, imgStyle: any) => {
    return (
      <article
        className={classNames('c-teaser__item', classes.teaser)}
        key={article.id}
      >
        <Link
          to={article.path}
          className={classes.teaserLink}
          aria-label={article.headline}
        >
          <div className={classes.flexBox}>
            <div className={'c-teaser__image'}>
              <Img
                fluid={article.heroImage.asset.fluid}
                className={classes.teaserImage}
                alt={article.heroImage.alt}
                {...imgStyle}
              ></Img>
            </div>

            <div className={classNames('c-teaser__copy', classes.teaserCopy)}>
              <span className={classes.teaserType}>{article._type}</span>
              <h3 className={classes.teaserTitle}>
                <span>{article.headline}</span>
              </h3>
            </div>
          </div>
        </Link>
      </article>
    );
  };

  return (
    <>
      <div className={classes.teaserWrapper}>
        <h4 className={classes.title}>{title}</h4>
        {firstArticle && (
          <div className={classNames('c-article__first', classes.teaserFirst)}>
            {renderListItem(firstArticle, {
              imgStyle: { height: 'auto' },
              style: { maxHeight: '238px' },
            })}
          </div>
        )}
        <div className={classes.scrollArea}>
          {articles &&
            articles.slice(0, 8).map((article: any) => {
              return renderListItem(article, {});
            })}
        </div>
        {lastArticle && (
          <div className={classNames('c-article__last', classes.teaserLast)}>
            {renderListItem(lastArticle, {
              imgStyle: { height: '100%' },
            })}
          </div>
        )}
      </div>
    </>
  );
};

interface RelatedArticlesInterface {
  articles: any;
  title: string;
}

export default RelatedArticles;
