import React, { FunctionComponent } from 'react';
import loadable from '@loadable/component';
import { LandingSectionRendererInterface } from './models';
const SanityArticleSlider = loadable(() => import('../SanityArticleSlider'), {
  fallback: <div style={{ height: 500 }}>loading...</div>,
});
const SanityProductSlider = loadable(() => import('../SanityProductSlider'), {
  fallback: <div style={{ height: 500 }}>loading...</div>,
});
import SanityTextBlock from '../SanityTextBlock';
import SanityNewsletterBlock from '../SanityNewsletterBlock';
import SanityVideoBlock from '../SanityVideoBlock';
import ImageBlock from '../ImageBlock';

const componentsMap = {
  SanityArticleSlider: SanityArticleSlider,
  SanityProductSlider: SanityProductSlider,
  SanityTextBlock: SanityTextBlock,
  SanityNewsletterBlock: SanityNewsletterBlock,
  SanityVideoBlock: SanityVideoBlock,
  SanityImageBlock: ImageBlock,
};

const LandingSectionRenderer: FunctionComponent<LandingSectionRendererInterface> = ({
  section,
  preferPerformance = false,
}) => {
  const sanityType = section.__typename;
  const getComponent = sanityType => {
    const component = componentsMap[sanityType];

    if (component) {
      return component;
    } else {
      console.info('Unknown block for landing page: ', sanityType);

      return componentsMap['SanityTextBlock'];
    }
  };

  return React.createElement(getComponent(sanityType), {
    ...section,
    preferPerformance,
  });
};

export default LandingSectionRenderer;
