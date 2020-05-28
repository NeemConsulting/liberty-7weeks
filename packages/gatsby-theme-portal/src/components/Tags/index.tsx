import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';

import Styles from './styles';
const useStyles = makeStyles(Styles);

const Tags: FunctionComponent<TagsInterface> = ({ data }) => {
  const classes = useStyles();

  const uniqueCategories = data.reduce((tag: any, current: any) => {
    const category = tag.find(
      (item: any) => item.name.tagCategoryName === current.name.tagCategoryName
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
          <li className={classes.tagListItem} key={tag.name}>
            <Link
              className={classes.tagsListLink}
              to={`/${tag.name.tagCategoryName}`}
            >
              {tag.name.tagCategoryName}
            </Link>
          </li>
        ))}
        {data.map(tag => (
          <li className={classes.tagListItem} key={tag.name}>
            <Link className={classes.tagsListLink} to={`/${tag.name}`}>
              {tag.name}
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
