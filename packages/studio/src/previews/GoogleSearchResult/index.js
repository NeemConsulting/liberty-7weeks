// eslint-disable-next-line no-unused-vars
import React from 'react';
import styles from './GoogleSearchResult.css';

const GoogleSearchResult = ({ document, width }) => {
  const { headline, slug, seo, subheading } = document.displayed;
  const description = (seo && seo.description) || subheading;

  return (
    <div className={styles.seoItem}>
      <h3>Google search result preview</h3>
      <div className={styles.googleWrapper} style={{ width }}>
        <div className={styles.headline}>{headline}</div>
        <div className={styles.url}>{slug.current}</div>
        {description && <div className={styles.description}>{description}</div>}
      </div>
    </div>
  );
};

export default GoogleSearchResult;
