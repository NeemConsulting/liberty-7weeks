import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  wrapper: {
    paddingTop: 12,
    paddingBottom: 12,
    [theme.breakpoints.up('md')]: {
      paddingTop: 20,
      paddingBottom: 20,
    },
  },
  items: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
  },
  item: {
    fontSize: '.75rem',
    paddingLeft: 8,
    whiteSpace: 'nowrap',
    '&::before': {
      display: 'inline-block',
      paddingRight: '.5rem',
      color: '#666',
      content: "'/'",
    },
    '&:first-child': {
      paddingLeft: 4,
      display: 'block',
      '&:before': {
        display: 'none',
      },
    },
    '&:last-child': {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'block',
      },
    },
  },
  link: {
    color: theme.palette.common.black,
    textDecoration: 'none',
  },
  active: {
    color: '#666',
  },
}));

const Breadcrumb: FunctionComponent<BreadcrumbInterface> = ({
  tag,
  pageTitle,
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
            <li className={classes.item}>
              <Link to={`/${tag.tagCategory.name}`} className={classes.link}
              >
                {tag.tagCategory.name}
              </Link>
            </li>
            <li className={classes.item}>
              <Link to={`${tag.name}`} className={classes.link}>
                {tag.name}
              </Link>
            </li>
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
  tag: any;
  pageTitle: string;
}

export default Breadcrumb;
