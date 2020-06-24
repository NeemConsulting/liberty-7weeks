import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';

import { getSearchUrl } from '../../helpers/searchUrl';
import useStyles from './styles';

const Tags: FunctionComponent<TagsInterface> = ({
  data,
  searchResultPath,
  title,
}) => {
  const classes = useStyles();

  const uniqueValues = (array: [], filter: string) => {
    return array.reduce((tag: any, current: any) => {
      const category = tag.find((item: any) =>
        filter === 'category'
          ? item.tagCategory.name === current.tagCategory.name
          : item.name === current.name
      );
      if (!category) {
        return tag.concat([current]);
      } else {
        return tag;
      }
    }, []);
  };

  return (
    <section className={classes.tags}>
      <h3 className={classes.tagsTitle}>{title}</h3>
      <ul className={classes.tagList}>
        {uniqueValues(data, 'category').map((tag: any) => (
          <li className={classes.tagListItem} key={tag.tagCategory.name}>
            <Link
              className={classes.tagsListLink}
              to={getSearchUrl(
                searchResultPath,
                tag.tagCategory.name,
                'tags.tagCategory.name'
              )}
            >
              {tag.tagCategory.name}
            </Link>
          </li>
        ))}
        {uniqueValues(data, 'tag').map((tag: any) => (
          <li className={classes.tagListItem} key={tag.name}>
            <Link
              className={classes.tagsListLink}
              to={getSearchUrl(searchResultPath, tag.name, 'tags.name')}
            >
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
  searchResultPath?: string;
  title: string;
}
export default Tags;
