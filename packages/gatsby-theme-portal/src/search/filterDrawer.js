import React from 'react';
import {
  InstantSearch,
  RefinementList,
  ClearRefinements,
  connectRefinementList,
} from 'react-instantsearch-dom';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Divider from '@material-ui/core/Divider';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './filterDrawer.css';
import Styles from './styles';
const useStyles = makeStyles(Styles);

const VirtualTagNames = connectRefinementList(() => null);
const VirtualTagCategories = connectRefinementList(() => null);
const VirtualDuration = connectRefinementList(() => null);
const VirtualDifficulty = connectRefinementList(() => null);
const VirtualBrands = connectRefinementList(() => null);

export default function FilterDrawer({
  searchState,
  searchClient,
  onSearchStateChange,
  filterProducts,
}) {
  const classes = useStyles();
  const [isHidden, setIsHidden] = React.useState(true);
  const [state, setState] = React.useState({
    bottom: false,
  });

  const onScroll = () => {
    const top = window.pageYOffset || document.documentElement.scrollTop;
    setIsHidden(top <= 50);
  };

  React.useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [isHidden]);

  const toggleDrawer = (anchor, open) => event => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = anchor => (
    <>
      <VirtualTagNames attributeName="tags.name" />
      <VirtualTagCategories attributeName="tags.tagCategory.name" />
      <VirtualDuration attributeName="duration" />
      <VirtualDifficulty attributeName="difficulty" />
      <VirtualBrands attributeName="brandName.name" />
      <div
        className={classes.list}
        role="presentation"
        onClick={toggleDrawer(anchor, true)}
        onKeyDown={toggleDrawer(anchor, true)}
      >
        <div className={classes.filterHeader}>
          <span>Filter by</span>
          <div className={classes.clearFilters} data-layout="mobile">
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
          <InstantSearch
            searchClient={searchClient}
            indexName="howtoArticle"
            searchState={searchState}
            onSearchStateChange={onSearchStateChange}
          >
            {filterProducts == 'true' ? (
              <>
                <div className="filter">
                  <ExpansionPanel>
                    <ExpansionPanelSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      Hair & Product Types
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <RefinementList attribute="tags.name" showMore={true} />
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                </div>
                <Divider />

                <div className="filter">
                  <ExpansionPanel>
                    <ExpansionPanelSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      Brands
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <RefinementList
                        attribute="brandName.name"
                        showMore={true}
                      />
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                </div>
              </>
            ) : (
              <>
                <div className="filter">
                  <ExpansionPanel>
                    <ExpansionPanelSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      Tags
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <RefinementList attribute="tags.name" showMore={true} />
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                </div>
                <Divider />
                <div className="filter">
                  <ExpansionPanel>
                    <ExpansionPanelSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      Category
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <RefinementList
                        attribute="tags.tagCategory.name"
                        showMore={true}
                      />
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                </div>
                <Divider />
                <div className="filter">
                  <ExpansionPanel>
                    <ExpansionPanelSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      Duration
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <RefinementList
                        attribute="duration"
                        limit={2}
                        showMoreLimit={50}
                        showMore={true}
                      />
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                </div>
                <Divider />
                <div className="filter">
                  <ExpansionPanel>
                    <ExpansionPanelSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      Difficulty
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <RefinementList attribute="difficulty" />
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                </div>
              </>
            )}
          </InstantSearch>
        </div>
      </div>
    </>
  );

  return (
    <div>
      {['bottom'].map(anchor => (
        <React.Fragment key={anchor}>
          <aside data-layout="mobile">
            <button
              className="filters-button"
              onClick={toggleDrawer(anchor, true)}
            >
              <svg xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15 1H1l5.6 6.3v4.37L9.4 13V7.3z"
                  stroke="#fff"
                  strokeWidth="1.29"
                  fill="none"
                  fillRule="evenodd"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Filters
            </button>
          </aside>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
