import React, { useCallback, useRef } from 'react';

import styles from './TabAssetSource.css';

export const TabImage = ({ asset, onSelect, onIntersection }) => {
  const buttonRef = useRef();
  const observer = useRef();
  const onClick = useCallback(() => {
    onSelect([
      {
        kind: 'url',
        value: asset.OriginalURL,
        assetDocumentProps: {
          originalFilename: `${asset.title[0]}.tif`,
          source: {
            name: 'tab-api',
            id: asset.assetID,
          },
        },
      },
    ]);
  });
  const setObserver = useCallback(() => {
    if (onIntersection) {
      observer.current = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          onIntersection();
          observer.current.disconnect();
        }
      });

      observer.current.observe(buttonRef.current);
    }
  }, [onIntersection, observer]);

  return (
    <button ref={buttonRef} className={styles['c-tab-image']} onClick={onClick}>
      <img
        className={styles['c-tab-image--image']}
        src={asset.ThumbNailURL}
        loading="lazy"
        onLoad={setObserver}
      />
    </button>
  );
};
