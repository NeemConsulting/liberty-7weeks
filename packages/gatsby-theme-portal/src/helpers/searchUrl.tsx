export const getSearchUrl = (
  url = '/search-results',
  query: string,
  queryType: string
) => {
  return `${url}?refinementList[${queryType}][0]=${encodeURIComponent(query)}`;
};

export const getSearchQueryUrl = (query: string, url = '/search-results') => {
  return `${url}?query=${query}`;
};
