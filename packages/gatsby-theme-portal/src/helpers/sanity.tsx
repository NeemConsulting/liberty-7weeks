import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { getFluidGatsbyImage } from 'gatsby-source-sanity';
import BlockContent from '@sanity/block-content-to-react';
import Video from '../components/Video';
import Product from '../components/Product';
import classNames from 'classnames';

const sanityConfig = {
  projectId: PROJECT_ID,
  dataset: DATASET_ID,
};

export const blockTypeDefaultSerializers = {
  types: {
    figure: ({ node }) => {
      const fluidProps = getFluidGatsbyImage(
        node.asset._id,
        { maxWidth: 720, maxHeight: 800 },
        sanityConfig
      );

      return (
        <div className={'c-image'}>
          <Img
            fluid={fluidProps}
            alt={node.alt}
            style={{ maxWidth: '720px', maxHeight: '800px' }}
            imgStyle={{ width: 'auto', height: 'auto', maxWidth: '100%' }}
          />
          <div className={'c-image__credit'}>
            <span>{node.imageCaption}</span>
            <span>{node.imageCredit}</span>
          </div>
        </div>
      );
    },
    step: ({
      node: { directions, imageName, instructionName, stepNumber },
    }) => {
      const fluidProps = getFluidGatsbyImage(
        imageName.asset._id,
        { maxWidth: 540 },
        sanityConfig
      );

      return (
        <div className={classNames(stepNumber ? 'c-step__reset' : 'c-step')}>
          <BlockContent blocks={instructionName} />
          <BlockContent blocks={directions} />
          <figure>
            <Img fluid={fluidProps} alt={imageName.alt} />
          </figure>
        </div>
      );
    },
    productReference: props => {
      const node = props.node;

      if (!node.product) {
        return null;
      }

      const fluidProps = getFluidGatsbyImage(
        node.product.image.asset._id,
        { maxWidth: 250 },
        sanityConfig
      );
      return <Product image={fluidProps} metadata={node.product} />;
    },
    // eslint-disable-next-line react/display-name
    youTube: props => {
      return <Video videoMetaData={props} sanityConfig={sanityConfig} />;
    },
    block: props => {
      const { style = 'normal' } = props.node;
      if (style === 'blockquote') {
        return (
          <blockquote>
            <p>
              {props.children.map(element => {
                return <span key={element}>{element}</span>;
              })}
            </p>
          </blockquote>
        );
      }

      // Fall back to default handling
      return BlockContent.defaultSerializers.types.block(props);
    },
  },
};
