// eslint-disable-next-line no-unused-vars
import React from 'react';
import imageUrlBuilder from '@sanity/image-url';
// eslint-disable-next-line import/no-unresolved
import sanityClient from 'part:@sanity/base/client';
import styles from './TwitterCard.css';

const builder = imageUrlBuilder(sanityClient);

const urlFor = (source) => {
  return builder.image(source);
};

const author = {
  name: 'Beautyportal',
  handle: 'Beautyportal',
  // insert your twiiter brand image url below
  image: 'https://farm6.staticflickr.com/5510/14338202952_93595258ff_z.jpg',
};

const TwitterCard = ({ document, width }) => {
  const {
    title,
    slug: { current: url },
    seo,
    subheading,
    heroImage,
  } = document.displayed;
  const description = (seo && seo.metaDescription) || subheading;
  const openGraphImage  =
    (seo && seo.heroImage) || (heroImage && heroImage.image && heroImage.image);

  const websiteUrlWithoutProtocol = url.split('://')[1];

  return (
    <div className={styles.seoItem}>
      <h3>Twitter card preview</h3>
      <div className={styles.tweetWrapper} style={{ width }}>
        {author && (
          <div className={styles.tweetAuthor}>
            <img className={styles.tweetAuthorAvatar} src={author.image} />
            <span className={styles.tweetAuthorName}>{author.name}</span>
            <span className={styles.tweetAuthorHandle}>@{author.handle}</span>
          </div>
        )}

        <div className={styles.tweetText}>
          <p>The card for your website will look a little something like this!</p>
        </div>
        <a href={url} className={styles.tweetUrlWrapper}>
          <div className={styles.tweetCardPreview}>
            <div className={styles.tweetCardImage}>
              <img
                src={urlFor(heroImage)
                  .width(300)
                  .url()}
              />
            </div>
            <div className={styles.tweetCardContent}>
              <h2 className={styles.tweetCardTitle}>{title}</h2>
              {description && <div className={styles.tweetCardDescription}>{description}</div>}
              <div className={styles.tweetCardDestination}>{websiteUrlWithoutProtocol}</div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

TwitterCard.defaultProps = {
  document: null,
  width: 500,
};

export default TwitterCard;
