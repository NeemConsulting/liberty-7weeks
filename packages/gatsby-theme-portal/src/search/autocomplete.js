import React, { Component } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { Highlight, connectAutoComplete } from 'react-instantsearch-dom';
import AutoSuggest from 'react-autosuggest';

class AutoComplete extends Component {
  static propTypes = {
    hits: PropTypes.arrayOf(PropTypes.object).isRequired,
    currentRefinement: PropTypes.string.isRequired,
    refine: PropTypes.func.isRequired,
    onSuggestionSelected: PropTypes.func.isRequired,
    onSuggestionCleared: PropTypes.func.isRequired,
  };

  state = {
    value: this.props.currentRefinement,
  };

  onChange = (_, { newValue }) => {
    if (!newValue) {
      this.props.onSuggestionCleared();
    }

    this.setState({
      value: typeof newValue !== 'undefined' ? newValue : '',
    });
  };

  renderInputComponent = inputProps => (
    <div className="inputContainer">
      <svg
        className="icon"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 768 768"
      >
        <title></title>
        <g id="icomoon-ignore"></g>
        <path
          fill="#000"
          d="M304.5 448.5q60 0 102-42t42-102-42-102-102-42-102 42-42 102 42 102 102 42zM496.5 448.5l159 159-48 48-159-159v-25.5l-9-9q-57 49.5-135 49.5-87 0-147.75-60t-60.75-147 60.75-147.75 147.75-60.75 147 60.75 60 147.75q0 31.5-15 71.25t-34.5 63.75l9 9h25.5z"
        ></path>
      </svg>
      <input {...inputProps} />
    </div>
  );

  onSuggestionsFetchRequested = ({ value }) => {
    this.props.refine(value);
  };

  onSuggestionsClearRequested = () => {
    this.props.refine();
  };

  getSuggestionValue(hit) {
    return hit.name;
  }

  renderSuggestion(hit) {
    return (
      <Link className={'ais-InfiniteHits-item__link'} to={`/${hit.path}`}>
        {/* <div className="image-wrapper">
          <img
            className={'ais-InfiniteHits-item__image'}
            src={`${hit.image.asset.url}?w=240&h=240&fit=crop&fm=webp`}
            alt={hit.image.alt}
          />
        </div> */}
        <Highlight attribute="Title" hit={hit} tagName="mark" />
      </Link>
    );
  }

  render() {
    const { hits, onSuggestionSelected } = this.props;
    const { value } = this.state;

    const inputProps = {
      placeholder: 'Search for articles, products or brands...',
      onChange: this.onChange,
      value,
    };

    return (
      <AutoSuggest
        suggestions={hits}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        onSuggestionSelected={onSuggestionSelected}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        inputProps={inputProps}
        renderInputComponent={this.renderInputComponent}
      />
    );
  }
}

export default connectAutoComplete(AutoComplete);
