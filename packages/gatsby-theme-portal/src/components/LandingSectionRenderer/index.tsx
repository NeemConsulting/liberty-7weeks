import React, { FunctionComponent } from 'react';
import { LandingSectionRendererInterface } from './models';
import { makeStyles } from '@material-ui/core/styles';
import SanityArticleSlider from '../SanityArticleSlider';
import SanityProductSlider from '../SanityProductSlider';
import SanityTextBlock from '../SanityTextBlock';
import SanityNewsletterBlock from '../SanityNewsletterBlock';
import SanityVideoBlock from '../SanityVideoBlock';
const useStyles = makeStyles(theme => {});

const componentsMap = {
  SanityArticleSlider: SanityArticleSlider,
  SanityProductSlider: SanityProductSlider,
  SanityTextBlock: SanityTextBlock,
  SanityNewsletterBlock: SanityNewsletterBlock,
  SanityVideoBlock: SanityVideoBlock,
};

const LandingSectionRenderer: FunctionComponent<LandingSectionRendererInterface> = ({
  section,
}) => {
  const sanityType = section.__typename;
  const getComponent = sanityType =>
    componentsMap[sanityType || 'SanityTextBlock'];

  return React.createElement(getComponent(sanityType), { ...section });
};

export default LandingSectionRenderer;
