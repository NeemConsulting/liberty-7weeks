export const getSearchUrl = (
  url = '/search-results',
  query: string,
  queryType: string
) => {
  return `${url}?query=refinementList[${queryType}][0]=${encodeURIComponent(
    query.toLowerCase()
  )}`;
};
