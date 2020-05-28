import { getFluidGatsbyImage } from 'gatsby-source-sanity';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import BlockContent from '@sanity/block-content-to-react';
import { getYouTubeId } from './youtube';

const sanityConfig = { projectId: 'e1mdz151', dataset: 'production' };

export const blockTypeDefaultSerializers = {
  types: {
    figure: ({ node }) => {
      const fluidProps = getFluidGatsbyImage(
        node.asset._id,
        { maxWidth: 800 },
        sanityConfig
      );

      return (
        <figure>
          <Img fluid={fluidProps} alt={node.alt} />
          {node.caption && <figcaption>{node.caption}</figcaption>}
        </figure>
      );
    },
    step: ({ node: { directions, imageName, instructionName } }) => {
      const fluidProps = getFluidGatsbyImage(
        imageName.asset._id,
        { maxWidth: 800 },
        sanityConfig
      );

      return (
        <>
          <BlockContent blocks={instructionName} />
          <BlockContent blocks={directions} />
          <figure>
            <Img fluid={fluidProps} alt={''} />
          </figure>
        </>
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
      return (
        <div className="c-product">
          <Link
            className="c-product__link"
            to={(node.product.slug && node.product.slug.current) || '/'}
          >
            <div className="c-product__image">
              <figure>
                <Img fluid={fluidProps} alt={''} />
              </figure>
            </div>
            <p className="c-product__tagline">
              <span>{node.product && node.product.tagLine}</span>
            </p>
            <h3 className="c-product__name">
              {node.product && node.product.name}
            </h3>
          </Link>
        </div>
      );
    },
    youTube: ({ node: { youTubeCaption, url } }) => {
      return (
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${getYouTubeId(url)}`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      );
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
