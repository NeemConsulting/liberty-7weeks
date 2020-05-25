import React from 'react';
import { Helmet } from 'react-helmet';

export const AddThis = ({ callback }: { callback: (e: Event) => void }) => {
  const widgetSrc = `${process.env['addThis_url']}#pubid=${process.env['addThis_key']}`;

  // @ts-ignore
  const handleScriptInject = ({ scriptTags }) => {
    if (scriptTags) {
      const scriptTag = scriptTags[0];
      scriptTag.onload = callback;
    }
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChangeClientState = (newState: any, addedTags: any) =>
    handleScriptInject(addedTags);

  return (
    <Helmet
      // @ts-ignore
      onChangeClientState={handleChangeClientState}
      script={[
        {
          type: 'text/javascript',
          src: widgetSrc,
          async: true,
        },
      ]}
    />
  );
};

export default AddThis;
