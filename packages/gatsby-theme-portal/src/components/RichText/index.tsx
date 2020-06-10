import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import BlockContent from '@sanity/block-content-to-react';
import { blockTypeDefaultSerializers } from '../../helpers/sanity';

import useStyles from './styles';

const ArticleBodyBlockContent: FunctionComponent<ArticleBodyBlockContentProps> = ({
  data,
}) => {
  const classes = useStyles();

  return (
    <section className={classNames('c-richtext', classes.richText)}>
      <BlockContent
        blocks={data}
        serializers={blockTypeDefaultSerializers}
        className={'hello'}
      />
    </section>
  );
};

export default ArticleBodyBlockContent;

interface ArticleBodyBlockContentProps {
  data: any;
}
