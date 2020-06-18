import React, { FunctionComponent, useState, createRef } from 'react';
import SEO from '../../components/Seo';
import Layout from '../../components/Layout';
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
  Panel,
} from 'react-instantsearch-dom';
import algoliasearch from 'algoliasearch/lite';
import qs from 'qs';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import * as hitComps from '../../components/HitComp';
import classNames from 'classnames';
import { ReactComponent as IconList } from '../../images/icons/list.svg';
import { ReactComponent as IconGrid } from '../../images/icons/grid.svg';
import useStyles from './styles';

const indices = [
  { name: `howtoArticle`, title: `howtoArticle`, hitComp: `PostHit` },
];
const SearchResults: FunctionComponent = () => {
  const classes = useStyles();
  const ref = createRef();
  const [focus, setFocus] = useState(false);
  const [viewType, setViewType] = useState('list');
  const createURL = state => `?${qs.stringify(state)}`;
  const searchStateToUrl = ({ location }, searchState) =>
    searchState ? `${location.pathname}${createURL(searchState)}` : '';
  const urlToSearchState = ({ search }) => {
    return search ? qs.parse(search.slice(1)) : {};
  };
  const DEBOUNCE_TIME = 400;
  const searchClient = algoliasearch(
    process.env['algolia_app_id'],
    process.env['algolia_search_api_key']
  );
  const Results = connectStateResults(
    ({ searchState, searchResults, children }) =>
      searchResults && searchResults.nbHits !== 0 ? children : null
  );

  const Stats = connectStateResults(
    ({ searchResults: res }) =>
      res &&
      res.nbHits > 0 &&
      `${res.nbHits}`
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
  return (
    <Layout>
      <SEO lang={'tl-ph'} title="" description="" keywords="" />
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
              <SearchBox searchAsYouType={true} />
            </Grid>
            <Grid className={classes.searchControlWrapper} item sm={12}>
              <div className={classes.resultsInfo}>
                <span className={classes.searchQuery}>
                  {searchState.query
                    ? `Results for ${searchState.query}`
                    : 'All Results'}
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
            <Grid className={classes.filters} item sm={3}>
              <div className={classes.filterHeader}>
                <span>Filter by</span>
                <ClearRefinements clearsQuery />
              </div>
              <div className="filter-wrapper">
                <div>
                  <Panel header="Page Type">
                    <RefinementList
                      attribute="pageType"
                      limit={2}
                      showMoreLimit={50}
                      showMore={true}
                    />
                  </Panel>
                </div>
                <div className="filter">
                  <Panel header="Tags">
                    <RefinementList
                      attribute="tags.name"
                      limit={4}
                      showMoreLimit={50}
                      showMore={true}
                    />
                  </Panel>
                </div>
                <div className="filter">
                  <div>
                    <Panel header="Category">
                      <RefinementList
                        attribute="tags.tagCategory.name"
                        limit={4}
                        showMoreLimit={50}
                        showMore={true}
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
              </div>
            </Grid>
            <Grid container item xs={12} sm={9}>
              <Grid item xs={12}>
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
                <div
                  className={classNames(classes.searhResultWrapper, viewType)}
                  show="true"
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
          </Grid>
        </Container>
      </InstantSearch>
    </Layout>
  );
};
export default SearchResults;