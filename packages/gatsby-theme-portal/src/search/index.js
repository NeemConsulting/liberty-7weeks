/* eslint-disable */
import React, { useState, createRef } from 'react';
import {
  InstantSearch,
  Index,
  connectStateResults,
  RefinementList,
  ClearRefinements,
  CurrentRefinements,
  InfiniteHits,
  SortBy,
  Panel,
  Configure,
  connectSearchBox,
} from 'react-instantsearch-dom';
import Autocomplete from './autocomplete';
import FilterDrawer from './filterDrawer';
import CustomRefinementList from './customRefinementList';
import './autocomplete.css';
import algoliasearch from 'algoliasearch/lite';
import qs from 'qs';
import Grid from '@material-ui/core/Grid';
import * as hitComps from './hitComps';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import { ReactComponent as IconList } from '../images/icons/list.svg';
import { ReactComponent as IconGrid } from '../images/icons/grid.svg';

import Styles from './styles';
const useStyles = makeStyles(Styles);

const VirtualSearchBox = connectSearchBox(() => null);

const Results = connectStateResults(
  ({ searchState, searchResults, children }) =>
    searchResults && searchResults.nbHits !== 0 ? children : null
);

const Stats = connectStateResults(
  ({ searchResults: res }) => res && res.nbHits > 0 && `${res.nbHits}`
);
export default function Search({
  indices,
  filterProducts,
  grid,
  collapse,
  hitsAsGrid,
}) {
  console.log('filterProducts', filterProducts);
  const classes = useStyles();
  const ref = createRef();
  const [query, setQuery] = useState('');
  const [focus, setFocus] = useState(false);
  const [viewType, setViewType] = useState('grid');
  const createURL = state => `?${qs.stringify(state)}`;
  const searchStateToUrl = ({ location }, searchState) =>
    searchState ? `${location.pathname}${createURL(searchState)}` : '';
  const urlToSearchState = ({ search }) => {
    return search ? qs.parse(search.slice(1)) : {};
  };
  const onSuggestionSelected = (_, { suggestion }) => {
    setQuery(suggestion.name);
  };

  const onSuggestionCleared = () => {
    setQuery('');
  };

  const DEBOUNCE_TIME = 400;
  const searchClient = algoliasearch(
    process.env['app_local_algolia_app_id'] || 'TUS0YOBD3F',
    process.env['app_local_algolia_search_api_key'] ||
      'fe16863454663937e5c39de4de666362'
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

  const handleViewType = event => {
    setViewType(event.currentTarget.dataset.view);
  };

  console.log('searchState', searchState);

  return (
    <>
      <InstantSearch
        indexName={indices[0].name}
        searchClient={searchClient}
        searchState={searchState}
        onSearchStateChange={onSearchStateChange}
        createURL={createURL}
        root={{ props: { ref } }}
      >
        <Configure hitsPerPage={5} />
        {filterProducts == 'true' ? null : (
          <Autocomplete
            onSuggestionSelected={onSuggestionSelected}
            onSuggestionCleared={onSuggestionCleared}
          />
        )}

        <div className={classes.containerWrapper}>
          <Grid container spacing={2}>
            <Grid className={classes.searchControlWrapper} item sm={12}>
              {filterProducts == 'true' ? null : (
                <>
                  <VirtualSearchBox defaultRefinement={query} />
                  <CustomRefinementList attribute="pageType" searchable />
                </>
              )}
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
                        return `(${nbHits})`;
                      },
                    }}
                  />
                </span>
              </div>
              <div className={classes.currentRefinements}>
                <CurrentRefinements clearsQuery />
              </div>
            </Grid>
            <div className={classes.filterMobile} item xs={12}>
              <Grid item xs={12}>
                <FilterDrawer
                  searchClient={searchClient}
                  searchState={searchState}
                  onSearchStateChange={onSearchStateChange}
                  filterProducts={filterProducts}
                />
              </Grid>
            </div>
            <div className={classes.filters} item sm={3}>
              <div className={classes.filterHeader}>
                <span>Filter by</span>
                <div className={classes.clearFilters} data-layout="desktop">
                  <ClearRefinements
                    clearsQuery
                    translations={{
                      reset: (
                        <>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="11"
                            height="11"
                            viewBox="0 0 11 11"
                          >
                            <g fill="none" fillRule="evenodd" opacity=".4">
                              <path d="M0 0h11v11H0z" />
                              <path
                                fill="#000"
                                fillRule="nonzero"
                                d="M8.26 2.75a3.896 3.896 0 1 0 1.102 3.262l.007-.056a.49.49 0 0 1 .485-.456c.253 0 .451.206.437.457 0 0 .012-.109-.006.061a4.813 4.813 0 1 1-1.348-3.887v-.987a.458.458 0 1 1 .917.002v2.062a.459.459 0 0 1-.459.459H7.334a.458.458 0 1 1-.002-.917h.928z"
                              />
                            </g>
                          </svg>
                          Clear filters
                        </>
                      ),
                    }}
                  />
                </div>
              </div>
              <div className="filter-wrapper">
                {filterProducts == 'true' ? (
                  <>
                    <div>
                      <Panel header="Hair & Product Types">
                        <RefinementList attribute="tags.name" showMore={true} />
                      </Panel>
                    </div>

                    <div className="filter">
                      <div>
                        <Panel header="Brand">
                          <RefinementList
                            attribute="brandName.name"
                            showMore={true}
                          />
                        </Panel>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="filter">
                      <Panel header="Tags">
                        <RefinementList attribute="tags.name" showMore={true} />
                      </Panel>
                    </div>
                    <div className="filter">
                      <div>
                        <Panel header="Category">
                          <RefinementList
                            attribute="tags.tagCategory.name"
                            showMore={true}
                            searchable={true}
                            translations={{
                              placeholder: 'Search for tags',
                            }}
                          />
                        </Panel>
                      </div>
                    </div>
                    <div className="filter">
                      <div>
                        <Panel header="Duration">
                          <RefinementList
                            attribute="duration"
                            limit={2}
                            showMoreLimit={50}
                            showMore={true}
                            transformItems={items =>
                              items.map(item => ({
                                ...item,
                                label: `${item.label} mins`,
                              }))
                            }
                          />
                        </Panel>
                      </div>
                    </div>
                    <div className="filter">
                      <div>
                        <Panel header="Difficulty">
                          <RefinementList attribute="difficulty" />
                        </Panel>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
            {/* <Grid item xs={12} sm={1}></Grid> */}
            <Grid item container xs={12} sm={9}>
              <Grid item container xs={12}>
                <div className={classes.actions}>
                  <SortBy
                    defaultRefinement="howtoArticle_publishedAt_Dsc"
                    items={[
                      { value: 'howtoArticle', label: 'Published Date Dsc' },
                      {
                        value: 'howtoArticle_publishedAt_Dsc',
                        label: 'Published Date Asc',
                      },
                    ]}
                  />
                  <button
                    type="button"
                    className={classNames(
                      classes.icon,
                      viewType === 'list' ? classes.iconActive : null
                    )}
                    data-view="list"
                    onClick={handleViewType}
                  >
                    <IconList />
                  </button>
                  <button
                    type="button"
                    className={classNames(
                      classes.icon,
                      viewType === 'grid' ? classes.iconActive : null
                    )}
                    data-view="grid"
                    onClick={handleViewType}
                  >
                    <IconGrid />
                  </button>
                </div>
              </Grid>
              <Grid item container xs={12} sm={12}>
                <div
                  className={classNames(classes.searhResultWrapper, viewType)}
                  show={query && query.length > 0 && focus}
                  asgrid={hitsAsGrid}
                >
                  {indices.map(({ name, hitComp }) => (
                    <Index key={name} indexName={name}>
                      <Results>
                        <InfiniteHits
                          showPrevious={false}
                          hitComponent={hitComps[hitComp](() =>
                            setFocus(false)
                          )}
                        />
                      </Results>
                    </Index>
                  ))}
                </div>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </InstantSearch>
    </>
  );
}
