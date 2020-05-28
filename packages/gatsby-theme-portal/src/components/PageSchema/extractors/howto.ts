import blocksToHtml from '@sanity/block-content-to-html';
import timeConverter from '../timeConverter';

const removeHtmlTags = (str: string) => str.replace(/(<([^>]+)>)/gi, '');

const extractSteps = (pageHref, richTextBlocks) => {
  return richTextBlocks
    .filter(block => block._type === 'step')
    .map(stepBlock => {
      const stepHtmlBlock = blocksToHtml({
        blocks: stepBlock.instructionName,
      });

      const directions = stepBlock.directions
        .map(dblock => ({
          '@type': 'HowToDirection',
          text: removeHtmlTags(blocksToHtml({ blocks: dblock })),
        }))
        .filter(block => block.text);

      return {
        '@type': 'HowToStep',
        url: pageHref,
        name: removeHtmlTags(stepHtmlBlock),
        itemListElement: directions,
        image: {
          '@type': 'ImageObject',
          url: stepBlock.imageName.asset.url,
          height: stepBlock.imageName.asset.metadata.dimensions.height.toString(),
          width: stepBlock.imageName.asset.metadata.dimensions.width.toString(),
        },
      };
    });
};

const extractor = (pageHref: string, data: any, brandInfo: any) => {
  const supply =
    data.productList &&
    data.productList.map(product => ({
      '@type': 'HowToSupply',
      name: product.name,
      image: product.image ? product.image.asset.url : null,
      url: `${pageHref}/${product.slug ? product.slug.current : null}`,
    }));
  const video = data.heroVideo && {
    '@type': 'VideoObject',
    name: data.heroVideo.youTubeCaption || data.headline,
    contentUrl: pageHref,
    thumbnailUrl: data.heroImage.asset.url,
    embedUrl: data.heroVideo.url,
    description: data.subheading,
    uploadDate: data.publishedAt,
  };
  const tool =
    data.toolList &&
    data.toolList.map(tool => ({
      '@type': 'HowToTool',
      name: tool.name,
    }));

  const resp = {
    step: extractSteps(pageHref, data._rawHowTobody),
    totalTime: timeConverter(data.time),
  };

  supply && (resp.supply = supply);
  video && (resp.video = video);
  tool && (resp.tool = tool);

  return resp;
};

interface HowtoInterface {
  step: [Record<string, any>];
  tool: [Record<string, any>];
  video: Record<string, any>;
  totalTime: string;
}
export default extractor;
