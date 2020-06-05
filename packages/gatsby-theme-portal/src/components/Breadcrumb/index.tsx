import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { getSearchUrl } from '../../helpers/searchUrl';
import Styles from './styles';
const useStyles = makeStyles(Styles);

const Breadcrumb: FunctionComponent<BreadcrumbInterface> = ({
  tag,
  pageTitle,
  searchResultPath,
}) => {
  const classes = useStyles();

  return (
    <section className={classes.wrapper}>
      <Container maxWidth="lg">
        <div className="">
          <ul className={classes.items}>
            <li className={classes.item}>
              <Link to={'/'} className={classes.link}>
                Home
              </Link>
            </li>
            {tag && (
              <>
                <li className={classes.item}>
                  <Link
                    to={getSearchUrl(
                      searchResultPath,
                      tag.tagCategory.name,
                      'tags.tagCategory.name'
                    )}
                    className={classes.link}
                  >
                    {tag.tagCategory.name}
                  </Link>
                </li>
                <li className={classes.item}>
                  <Link
                    to={getSearchUrl(searchResultPath, tag.name, 'tags.name')}
                    className={classes.link}
                  >
                    {tag.name}
                  </Link>
                </li>
              </>
            )}
            <li className={classNames(classes.item, classes.active)}>
              {pageTitle}
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
};

interface BreadcrumbInterface {
  tag?: any;
  pageTitle: string;
  searchResultPath?: string;
}

export default Breadcrumb;
