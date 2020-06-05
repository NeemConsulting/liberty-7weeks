import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';

import Styles from './styles';
const useStyles = makeStyles(Styles);

const RelatedArticles: FunctionComponent<RelatedArticlesInterface> = ({
  articles,
}) => {
  const classes = useStyles();

  const firstArticle = articles.shift();
  const lastArticle = articles.pop();

  const renderListItem = (article: any, imgStyle: any) => {
    return (
      <div
        className={classNames('c-teaser__item', classes.teaser)}
        key={article.id}
      >
        <Link to={article.path} className={classes.teaserLink}>
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
      </div>
    );
  };

  return (
    <>
      <div className={classes.teaserWrapper}>
        <h4 className={classes.title}>Related Articles</h4>
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
            articles.map((article: any) => {
              return renderListItem(article, {
                imgStyle: { height: '80px' },
                style: { height: '80px', width: '80px' },
              });
            })}
        </div>
        {lastArticle && (
          <div className={classNames('c-article__last', classes.teaserLast)}>
            {renderListItem(lastArticle, {
              imgStyle: { height: '100%' },
              style: { height: '174px', width: '174px' },
            })}
          </div>
        )}
      </div>
    </>
  );
};

interface RelatedArticlesInterface {
  articles: any;
}

export default RelatedArticles;
