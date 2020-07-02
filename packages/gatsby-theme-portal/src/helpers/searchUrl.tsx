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

export const getProductShowcaseUrl = (
  url = '/products-showcase',
  query: string,
  queryType: string
) => {
  return `${url}?refinementList[${queryType}][0]=${encodeURIComponent(query)}`;
};

export const getProductShowcaseQueryUrl = (
  query: string,
  url = '/products-showcase'
) => {
  return `${url}?query=${query}`;
};
