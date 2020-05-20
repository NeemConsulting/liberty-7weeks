// eslint-disable-next-line no-unused-vars
import React from 'react';
import GoogleSearchResult from '../GoogleSearchResult';
import TwitterCard from '../TwitterCard';
import FacebookShare from '../FacebookShare';

const SeoPreviews = ({ document }) => (
  <>
    <GoogleSearchResult document={document} />
    <TwitterCard document={document} />
    <FacebookShare document={document} />
  </>
);

export default SeoPreviews;
