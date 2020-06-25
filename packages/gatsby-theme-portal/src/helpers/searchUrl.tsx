const searchUrl = '/search-results';

export const getSearchUrl = (
  url = searchUrl,
  query: string,
  queryType: string
) => {
  return `${url}?refinementList[${queryType}][0]=${encodeURIComponent(query)}`;
};

export const getSearchQueryUrl = (query: string, url = searchUrl) => {
  return `${url}?query=${query}`;
};

// Generate search URL with TagNames Array including Tag Categories
export const getSearchUrlWithTagsAndCategory = tags => {
  const query = tags
    .map((tag, index) => {
      return `refinementList[tags.name][${index}]=${encodeURIComponent(
        tag.name
      )}`;
    })
    .join('&');

  return '/search-results?' + query;
};
