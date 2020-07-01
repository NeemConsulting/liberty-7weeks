import React from 'react';
import { Highlight, connectRefinementList } from 'react-instantsearch-dom';
import './customRefinementList.css';

const RefinementList = ({
  items,
  isFromSearch,
  refine,
  searchForItems,
  createURL,
}) => (
  <>
    <div className="search-tags">
      <div className="search-tags-container">
        {items.map(item => (
          <span
            key={item.label}
            className={item.isRefined ? 'active' : ''}
            style={{ color: item.isRefined ? '#fefefe' : '' }}
          >
            <a
              href={createURL(item.value)}
              onClick={event => {
                event.preventDefault();
                refine(item.value);
              }}
            >
              {isFromSearch ? (
                <Highlight attribute="label" hit={item} />
              ) : (
                item.label
              )}
              {'-'}({item.count})
            </a>
          </span>
        ))}
      </div>
    </div>
  </>
);

const CustomRefinementList = connectRefinementList(RefinementList);
export default CustomRefinementList;
