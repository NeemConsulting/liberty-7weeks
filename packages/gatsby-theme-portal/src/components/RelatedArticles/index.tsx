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
  return (
    <div className={classes.teaserWrapper}>
      <h4 className={classes.title}>Related Articles</h4>
      {articles.map((article: any, index: any) => (
        <div
          className={classNames(
            classes.teaser,
            index === 0 ? classes.teaserFirst : null
          )}
          key={article.id}
        >
          <Link to={article.slug.current} className={classes.teaserLink}>
            <div className={classes.flexBox}>
              <Img
                fluid={article.heroImage.asset.fluid}
                className={classes.teaserImage}
                alt={article.heroImage.alt}
                imgStyle={{ height: index === 0 ? 'auto' : '80px' }}
                style={{
                  height: index === 0 ? '238px' : '80px',
                  width: index === 0 ? null : '80px',
                }}
              ></Img>

              <div className={classes.teaserCopy}>
                <span className={classes.teaserType}>{article._type}</span>
                <h3 className={classes.teaserTitle}>
                  <span>{article.headline}</span>
                </h3>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

interface RelatedArticlesInterface {
  articles: any;
}

export default RelatedArticles;
