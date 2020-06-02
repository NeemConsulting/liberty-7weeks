import React, { FunctionComponent } from 'react';
import { LandingSectionRendererInterface } from './models';
import SanityArticleSlider from '../SanityArticleSlider';
import SanityProductSlider from '../SanityProductSlider';
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

  return React.createElement(getComponent(sanityType), { ...section });
};

export default LandingSectionRenderer;
