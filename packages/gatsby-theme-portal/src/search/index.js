/* eslint-disable */
import React, { useState, createRef } from 'react';
import {
  InstantSearch,
  Index,
  connectStateResults,
  RefinementList,
  ClearRefinements,
  CurrentRefinements,
  SearchBox,
  InfiniteHits,
  SortBy,
} from 'react-instantsearch-dom';
import algoliasearch from 'algoliasearch/lite';
import qs from 'qs';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import * as hitComps from './hitComps';
import { makeStyles } from '@material-ui/core/styles';
import { ReactComponent as Next } from '../images/icons/next.svg';

import Styles from './styles';
const useStyles = makeStyles(Styles);

const Results = connectStateResults(
  ({ searchState: state, searchResults: res, children }) =>
    res && res.nbHits > 0 ? children : null
);

const Stats = connectStateResults(
  ({ searchResults: res }) =>
    res && res.nbHits > 0 && `${res.nbHits}`
);
export default function Search({ indices, collapse, hitsAsGrid }) {
  const classes = useStyles();
  const ref = createRef();
  const [query, setQuery] = useState('');
  const [focus, setFocus] = useState(false);
  const createURL = state => `?${qs.stringify(state)}`;
  const searchStateToUrl = ({ location }, searchState) =>
    searchState ? `${location.pathname}${createURL(searchState)}` : '';
  const urlToSearchState = ({ search }) => {
    return search ? qs.parse(search.slice(1)) : {};
  };
  const DEBOUNCE_TIME = 400;
  const searchClient = algoliasearch(
    process.env['app_local_algolia_app_id'] || 'VW9INLJ17V',
    process.env['app_local_algolia_search_api_key'] ||
      'cd59e4d6a74ef20cb941bb64e8bdfe4f'
  );

  const [searchState, setSearchState] = useState(() => {
    return typeof window !== `undefined`
      ? urlToSearchState(location)
      : urlToSearchState({});
  });
  const [debouncedSetState, setDebouncedSetState] = useState(null);

  const onSearchStateChange = updatedSearchState => {
    clearTimeout(debouncedSetState);

    setDebouncedSetState(
      setTimeout(() => {
        history.pushState(
          searchStateToUrl(updatedSearchState),
          updatedSearchState
        );
      }, DEBOUNCE_TIME)
    );

    setSearchState(updatedSearchState);
  };
  return (
    <InstantSearch
      searchClient={searchClient}
      indexName={indices[0].name}
      searchState={searchState}
      onSearchStateChange={onSearchStateChange}
      createURL={createURL}
      root={{ props: { ref } }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid className={classes.searchControlWrapper} item sm={12}>
            <SearchBox searchAsYouType={true} showLoadingIndicator />
          </Grid>
          <Grid className={classes.searchControlWrapper} item sm={12}>
            <div className={classes.resultsInfo}>
              <span className={classes.searchQuery}>
                {query ? `Results for ${query}` : 'All Results'}
              </span>
              <span className={classes.resultsStats}>
                <Stats
                  translations={{
                    stats(nbHits) {
                      return `${nbHits}`;
                    },
                  }}
                />
              </span>
            </div>
            <div>
              <CurrentRefinements clearsQuery />
            </div>
          </Grid>
          <Grid className={classes.filters} item sm={3}>
            <div className="filter-wrapper">
              <ClearRefinements clearsQuery />
              <div>
                <h2>Page Type</h2>
                <RefinementList attribute="pageType" />
              </div>
              <div className="filter">
                <h2 className="filter-category">
                  <span>Tags</span>
                  <span>
                    <Next />
                  </span>
                </h2>
                <RefinementList attribute="tags.name" />
              </div>
              <div className="filter">
                <h2 className="filter-category">
                  <span>Category</span>
                  <span>
                    <Next />
                  </span>
                </h2>
                <div>
                  <RefinementList attribute="tags.tagCategory.name" />
                </div>
              </div>
              <div className="filter">
                <h2 className="filter-category">
                  <span>Duration</span>
                  <span>
                    <Next />
                  </span>
                </h2>
                <div>
                  <RefinementList attribute="duration" />
                </div>
              </div>
              <div className="filter">
                <h2 className="filter-category">
                  <span>Difficulty</span>
                  <span>
                    <Next />
                  </span>
                </h2>
                <div>
                  <RefinementList attribute="difficulty" />
                </div>
              </div>
            </div>
          </Grid>
          <Grid item container sm={9}>
            <div>
              <SortBy
                defaultRefinement="howtoArticle_publishedAt_Dsc"
                items={[
                  { value: 'howtoArticle', label: 'Published Date dsc' },
                  {
                    value: 'howtoArticle_publishedAt_Dsc',
                    label: 'Published Date asc',
                  },
                ]}
              />
            </div>
            <div
              className={classes.searhResultWrapper}
              show={query && query.length > 0 && focus}
              asgrid={hitsAsGrid}
            >
              {indices.map(({ name, hitComp }) => (
                <Index key={name} indexName={name}>
                  <Results>
                    <InfiniteHits
                      showPrevious={false}
                      hitComponent={hitComps[hitComp](() => setFocus(false))}
                    />
                  </Results>
                </Index>
              ))}
            </div>
          </Grid>
        </Grid>
      </Container>
    </InstantSearch>
  );
}
