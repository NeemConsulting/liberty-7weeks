import React, {useState, useCallback} from 'react'
import axios from 'axios'
import qs from 'qs'
import Dialog from 'part:@sanity/components/dialogs/fullscreen'
import TextInput from 'part:@sanity/components/textinputs/default'
import Button from 'part:@sanity/components/buttons/default'
import Spinner from 'part:@sanity/components/loading/spinner'

import {TabImage} from './TabImage'
import styles from './TabAssetSource.css'

const SearchInput = ({label, onChange, onEnter, value}) => {
  const onKeyPress = useCallback(
    event => {
      if (event.key === 'Enter') onEnter(event)
    },
    [onEnter]
  )

  return (
    <div className={styles['c-search']}>
      <label className={styles['c-search__label']}>
        <span className={styles['c-search__text']}>{label}</span>
        <TextInput onChange={onChange} onKeyPress={onKeyPress} value={value} />
      </label>
    </div>
  )
}

const TabImageSearch = ({onClose, onSelect}) => {
  const [searchTerms, setSearchTerms] = useState({
    assetId: '',
    search: ''
  })
  const [hasError, setHasError] = useState(false)
  const [foundAssets, setFoundAssets] = useState()
  const [loading, setLoading] = useState(false)
  const [pageNumber, setPageNumber] = useState(1)

  const onSearchTermChange = useCallback(
    key => val => {
      setSearchTerms({
        ...searchTerms,
        [key]: val.target.value
      })
    },
    [searchTerms, setSearchTerms]
  )

  const onSearch = useCallback(
    async pageToFetch => {
      const searchButtonEvent = typeof pageToFetch !== 'number'
      const page = searchButtonEvent ? 1 : pageToFetch
      try {
        setLoading(true)
        const resp = await axios.get(
          `https://qancgds6x3.execute-api.eu-west-1.amazonaws.com/staging/assets?${qs.stringify({
            ...(searchTerms.assetId && {assetID: searchTerms.assetId}),
            ...(searchTerms.search && {search: searchTerms.search}),
            pageSize: 50,
            pageNumber: page,
            //           brand: `TRESemme`,
            brand: `Simple`,
            countries: 'United Kingdom,Ireland'
          })}`,
          {
            headers: {
              'x-api-key': '6IDG0m8iocajUjD4YlKYk4WznBXZHUBNa6hIjobp'
            }
          }
        )

        if (foundAssets && !searchButtonEvent) {
          setFoundAssets({...resp.data, assets: [...foundAssets.assets, ...resp.data.assets]})
        } else {
          setFoundAssets(resp.data)
        }
      } catch (err) {
        setHasError(true)
      } finally {
        setLoading(false)
      }
    },
    [searchTerms, pageNumber, foundAssets, setFoundAssets, setHasError, setLoading]
  )

  const onIntersection = useCallback(() => {
    if (pageNumber === foundAssets.numberOfPages) return

    onSearch(pageNumber + 1)
    setPageNumber(pageNumber + 1)
  }, [onSearch, setPageNumber])

  return (
    <Dialog title='Select image from TAB' onClose={onClose} isOpen>
      <div className={styles.container}>
        <SearchInput
          onChange={onSearchTermChange('assetId')}
          onEnter={onSearch}
          value={searchTerms.assetId}
          label='Asset ID'
        />
        <p className={styles.container__divider}>Or</p>
        <SearchInput
          onChange={onSearchTermChange('search')}
          onEnter={onSearch}
          value={searchTerms.search}
          label='Keyword'
        />
        <div className={styles['c-button']}>
          <Button onClick={onSearch}>Search</Button>
        </div>
      </div>
      <div className={styles['c-results-container']}>
        {hasError && `Sorry an error has occured`}
        {foundAssets &&
          foundAssets.assets.map((asset, index) => (
            <TabImage
              key={asset.assetID}
              asset={asset}
              onSelect={onSelect}
              // Only add intersection to 2nd to last result
              onIntersection={foundAssets.assets.length - 2 === index ? onIntersection : undefined}
            />
          ))}
        {loading && <Spinner />}
      </div>
    </Dialog>
  )
}

export default TabImageSearch
