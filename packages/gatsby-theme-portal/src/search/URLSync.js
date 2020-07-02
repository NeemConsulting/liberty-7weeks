import React, { Component } from 'react';
import qs from 'qs';

const updateAfter = 700;

const routeStateDefaultValues = {
  query: '',
  page: '1',
  pageTypes: undefined,
  duration: undefined,
  tag: undefined,
  sortBy: 'howtoArticle',
  hitsPerPage: '9',
};

const searchStateToURL = searchState => {
  const routeState = {
    query: searchState.query,
    page: String(searchState.page),
    pageTypes:
      searchState.refinementList && searchState.refinementList.pageType,
    duration: searchState.refinementList && searchState.refinementList.duration,
    tag: searchState.refinementList && searchState.refinementList.tag,
    sortBy: searchState.sortBy,
    hitsPerPage:
      (searchState.hitsPerPage && String(searchState.hitsPerPage)) || undefined,
  };

  const { protocol, hostname, port = '', pathname, hash } =
    typeof window !== 'undefined' && window.location;
  const portWithPrefix = port === '' ? '' : `:${port}`;
  const urlParts =
    (typeof window !== 'undefined' &&
      window.location.href.match(/^(.*?)\/search-results/)) ||
    window.location.href.match(/^(.*?)\/products-showcase/);
  const baseUrl =
    (urlParts && urlParts[0]) ||
    `${protocol}//${hostname}${portWithPrefix}${pathname}search-results` ||
    `${protocol}//${hostname}${portWithPrefix}${pathname}products-showcase`;

  console.log('baseUrl', baseUrl);

  const queryParameters = {};

  if (routeState.query && routeState.query !== routeStateDefaultValues.query) {
    queryParameters.query = encodeURIComponent(routeState.query);
  }
  if (routeState.page && routeState.page !== routeStateDefaultValues.page) {
    queryParameters.page = routeState.page;
  }
  if (
    routeState.pageTypes &&
    routeState.pageTypes !== routeStateDefaultValues.pageTypes
  ) {
    queryParameters.pageTypes = routeState.pageTypes.map(encodeURIComponent);
  }
  if (
    routeState.duration &&
    routeState.duration !== routeStateDefaultValues.duration
  ) {
    queryParameters.duration = routeState.duration.map(encodeURIComponent);
  }
  if (routeState.tag && routeState.tag !== routeStateDefaultValues.tag) {
    queryParameters.tag = routeState.tag.map(encodeURIComponent);
  }
  if (
    routeState.sortBy &&
    routeState.sortBy !== routeStateDefaultValues.sortBy
  ) {
    queryParameters.sortBy = routeState.sortBy;
  }
  if (
    routeState.hitsPerPage &&
    routeState.hitsPerPage !== routeStateDefaultValues.hitsPerPage
  ) {
    queryParameters.hitsPerPage = routeState.hitsPerPage;
  }

  const queryString = qs.stringify(queryParameters, {
    addQueryPrefix: true,
    arrayFormat: 'repeat',
  });

  return `${baseUrl}/${queryString}${hash}`;
};

const urlToSearchState = location => {
  const queryParameters = qs.parse(
    typeof window !== 'undefined' && location.search.slice(1)
  );
  const {
    query = '',
    page = 1,
    pageTypes = [],
    duration = [],
    tag = [],
    hitsPerPage,
    sortBy,
  } = queryParameters;
  // `qs` does not return an array when there's a single value.
  const allPageTypes = Array.isArray(pageTypes)
    ? pageTypes
    : [pageTypes].filter(Boolean);
  const allDuration = Array.isArray(duration)
    ? duration
    : [duration].filter(Boolean);
  const allTags = Array.isArray(tag) ? tag : [tag].filter(Boolean);

  const searchState = { range: {} };

  if (query) {
    searchState.query = decodeURIComponent(query);
  }
  if (page) {
    searchState.page = page;
  }
  if (allPageTypes.length) {
    searchState.refinementList = {
      pageType: allPageTypes.map(decodeURIComponent),
    };
  }
  if (allDuration.length) {
    searchState.refinementList = {
      duration: allDuration.map(decodeURIComponent),
    };
  }
  if (allTags.length) {
    searchState.refinementList = {
      tag: allTags.map(decodeURIComponent),
    };
  }
  if (sortBy) {
    searchState.sortBy = sortBy;
  }

  if (hitsPerPage) {
    searchState.hitsPerPage = hitsPerPage;
  }

  return searchState;
};

const withURLSync = Search =>
  class WithURLSync extends Component {
    state = {
      searchState: urlToSearchState(
        typeof window !== 'undefined' && window.location
      ),
    };

    componentDidMount() {
      typeof window !== 'undefined' &&
        window.addEventListener('popstate', this.onPopState);
    }

    componentWillUnmount() {
      clearTimeout(this.debouncedSetState);
      typeof window !== 'undefined' &&
        window.removeEventListener('popstate', this.onPopState);
    }

    onPopState = ({ state }) =>
      this.setState({
        searchState: state || {},
      });

    onSearchStateChange = searchState => {
      clearTimeout(this.debouncedSetState);

      this.debouncedSetState = setTimeout(() => {
        typeof window !== 'undefined' &&
          window.history.pushState(
            searchState,
            null,
            searchStateToURL(searchState)
          );
      }, updateAfter);

      this.setState({ searchState });
    };

    render() {
      const { searchState } = this.state;
      console.log('searchState', searchState);

      return (
        <Search
          {...this.props}
          searchState={searchState}
          onSearchStateChange={this.onSearchStateChange}
          createURL={searchStateToURL}
        />
      );
    }
  };

export default withURLSync;
