import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  tags: {
    marginTop: 30,
    marginBottom: 20,
    [theme.breakpoints.up('md')]: {
      marginBottom: 30,
    },
  },
  tagsTitle: {
    fontSize: '1.375rem',
    lineHeight: 1.1,
    fontWeight: 600,
    position: 'relative',
    margin: 0,
    marginBottom: 16,
    paddingTop: 8,
    '&:before': {
      content: '""',
      background: '#b8f0c0',
      position: 'absolute',
      right: 0,
      top: 0,
      width: '100vw',
      height: 20,
      zIndex: -1,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2.5rem',
      paddingTop: 5,
      marginBottom: 30,
    },
  },
  tagList: {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
  },
  tagListItem: {
    marginRight: 10,
    marginBottom: 10,
  },
  tagsListLink: {
    color: theme.palette.common.black,
    display: 'inline-block',
    textDecoration: 'none',
    fontSize: '.875rem',
    fontWeight: 700,
    lineHeight: 1.1,
    backgroundImage: 'linear-gradient(120deg,#b8f0c0 0%,#b8f0c0 100%)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% .1875rem',
    backgroundPosition: '0 100%',
    [theme.breakpoints.up('md')]: {
      fontSize: '1.125rem',
    },
  },
}));

const Tags: FunctionComponent<TagsInterface> = ({ data }) => {
  const classes = useStyles();

  const uniqueCategories = data.reduce((tag: any, current: any) => {
    const category = tag.find(
      (item: any) =>
        item.categoryName.tagCategoryName ===
        current.categoryName.tagCategoryName
    );
    if (!category) {
      return tag.concat([current]);
    } else {
      return tag;
    }
  }, []);

  return (
    <section className={classes.tags}>
      <h3 className={classes.tagsTitle}>Related Topics</h3>
      <ul className={classes.tagList}>
        {uniqueCategories.map(tag => (
          <li className={classes.tagListItem} key={tag.tagName}>
            <Link
              className={classes.tagsListLink}
              to={`/${tag.categoryName.tagCategoryName}`}
            >
              {tag.categoryName.tagCategoryName}
            </Link>
          </li>
        ))}
        {data.map(tag => (
          <li className={classes.tagListItem} key={tag.tagName}>
            <Link className={classes.tagsListLink} to={`/${tag.tagName}`}>
              {tag.tagName}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

interface TagsInterface {
  data: any;
}
export default Tags;
