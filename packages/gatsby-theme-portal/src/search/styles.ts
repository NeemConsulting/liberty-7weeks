import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles(({ breakpoints, palette, spacing }: Theme) =>
  createStyles({
    searchControlWrapper: {
      width: '100%',
      '& form': {
        display: 'flex',
        flexWrap: 'wrap',
        margin: '20px auto',
        position: 'relative',
        [breakpoints.up('md')]: {
          margin: '60px auto 30px',
        },
        '& input': {
          outline: 'none',
          padding: '5px 10px',
          border: '1px solid #999',
          width: '100%',
          flex: 1,
          fontSize: '1.25rem',
          lineHeight: '48px',
          color: palette.common.black,
          borderRight: 'none',
          [breakpoints.up('md')]: {
            fontSize: '1.875rem',
            padding: '10px 20px',
          },
        },
        '& button': {
          padding: '10px 0',
          width: 80,
          backgroundColor: '#fff',
          borderLeft: 'none',
          border: '1px solid #999',
          textAlign: 'center',
          cursor: 'pointer',
          '&:hover svg': {
            fill: palette.common.black,
          },
        },
        '& svg': {
          width: 28,
          height: 28,
          fill: palette.primary.main,
          transition: 'all .3s ease-in',
        },
        '& .ais-SearchBox-loadingIndicator': {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        },
      },
    },
    resultsInfo: {
      fontSize: '1.125rem',
      lineHeight: 1.1,
      fontWeight: 400,
      marginBottom: spacing(1),
      display: 'flex',
      alignItems: 'flex-end',
      [breakpoints.up('md')]: {
        fontSize: '1.125rem',
      },
    },
    searchQuery: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.1,
      marginRight: spacing(1),
      [breakpoints.up('md')]: {
        fontSize: '2.5rem',
      },
      '& + span': {
        fontSize: '1.5rem',
        fontWeight: 600,
        lineHeight: 1.1,
        marginRight: spacing(1),
        color: palette.primary.main,
        [breakpoints.up('md')]: {
          fontSize: '1.5rem',
          marginBottom: spacing(0.5),
        },
      },
    },
    currentRefinements: {
      display: 'none',
      [breakpoints.up('md')]: {
        display: 'block',
      },
      '& .ais-CurrentRefinements-list': {
        marginTop: 0,
        marginBottom: 0,
        padding: 0,
        paddingTop: spacing(2),
        minHeight: 47,
        listStyleType: 'none',
        display: 'flex',
        flexWrap: 'wrap',
      },
      '& .ais-CurrentRefinements-category, & .ais-CurrentRefinements-label': {
        marginRight: 10,
        padding: spacing(0.75),
        fontSize: '.875rem',
        backgroundColor: palette.secondary.main,
        color: palette.common.black,
        marginBottom: spacing(1.25),
        display: 'inline-block',
      },
      '& .ais-CurrentRefinements-label': {
        backgroundColor: palette.common.black,
        color: palette.common.white,
        marginRight: 0,
      },
      '& .ais-CurrentRefinements-delete': {
        backgroundColor: palette.common.white,
        border: 0,
        marginLeft: spacing(0.5),
        padding: spacing(0.25),
        paddingTop: spacing(0),
        paddingBottom: spacing(0),
        cursor: 'pointer',
        '&:focus': {
          outline: 0,
        },
      },
    },
    searhResultWrapper: {
      width: '100%',
      [breakpoints.up('md')]: {
        paddingLeft: spacing(6),
        marginBottom: spacing(6),
      },
      '& .preloader-icon': {
        display: 'flex',
        margin: '30px auto',
      },
      '&.list': {
        '& .image-wrapper': {
          '& img': {
            width: 80,
            height: 80,
            [breakpoints.up('md')]: {
              width: 140,
              height: 140,
            },
          },
        },
      },
      '&.grid': {
        '& .ais-InfiniteHits-list': {
          listStyleType: 'none',
          padding: 0,
          margin: '0 -10px',
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'flex-start',
          alignContent: 'stretch',
        },
        '& .ais-InfiniteHits-item': {
          justifyContent: 'space-between',
          flex: '0 0 auto',
          width: 'calc(100%/2.30)',
          margin: '0 10px',
          marginBottom: 10,
          [breakpoints.up('md')]: {
            width: 'calc(100%/3.5)',
            margin: '0 20px',
            marginBottom: 30,
          },
          '&:hover': {
            backgroundColor: 'transparent',
          },
        },
        '& .ais-InfiniteHits-item__link': {
          borderBottom: 'none',
          display: 'block',
          padding: 0,
          '&:hover span': {
            backgroundColor: 'transparent',
            backgroundImage: `linear-gradient(120deg,${palette.secondary.main} 0%,${palette.secondary.main} 100%)`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% .1875rem',
            backgroundPosition: '0 100%',
          },
          '& h4': {
            fontSize: '.875rem',
            lineHeight: 1.1,
            [breakpoints.up('md')]: {
              fontSize: '1.125rem',
            },
          },
        },
        '& .ais-InfiniteHits-item__copy': {
          paddingLeft: 0,
          [breakpoints.up('md')]: {
            textAlign: 'center',
          },
        },
        '& .ais-InfiniteHits-item__desc': {
          display: 'none',
        },
        '& .image-wrapper': {
          width: 'auto',
          height: 'auto',
          '& img': {
            width: '100%',
          },
        },
      },
      '& .ais-InfiniteHits-list': {
        listStyleType: 'none',
        margin: 0,
        padding: 0,
      },
      '& .ais-InfiniteHits-item': {
        transition: 'all .5s',
        '&:hover': {
          backgroundColor: '#f5fdf6',
        },
        '&:last-child a': {
          borderBottom: 0,
        },
      },
      '& .ais-InfiniteHits-item__link': {
        borderBottom: `1px solid #f4f4f4`,
        color: palette.common.black,
        display: 'flex',
        padding: spacing(1.5),
        textDecoration: 'none',
        [breakpoints.up('md')]: {
          padding: spacing(2.5),
        },
        '& h4': {
          marginTop: 10,
          marginBottom: 8,
          display: 'inline-block',
          fontSize: '.875rem',
          lineHeight: 1.1,
          [breakpoints.up('md')]: {
            fontSize: '1.5rem',
            textDecoration: 'none',
          },
        },
      },
      '& .ais-InfiniteHits-item__copy': {
        width: '100%',
        flex: 1,
        paddingLeft: 30,
      },
      '& .ais-InfiniteHits-item__desc': {
        fontSize: '0.75rem',
        marginTop: 0,
        '& + p': {
          margin: 0,
        },
        [breakpoints.up('md')]: {
          fontSize: '0.925rem',
        },
      },
      '& .ais-InfiniteHits-loadMore': {
        fontSize: '.875rem',
        fontWeight: 700,
        backgroundColor: palette.primary.main,
        color: palette.common.black,
        paddingTop: spacing(1.25),
        paddingBottom: spacing(1.25),
        paddingLeft: spacing(2),
        paddingRight: spacing(2),
        textDecoration: 'none',
        position: 'relative',
        display: 'flex',
        margin: 'auto',
        marginTop: spacing(4),
        marginBottom: spacing(4),
        border: 'none',
        cursor: 'pointer',
        transition: 'all .3s',
        transform: 'perspective(1px) translateZ(0)',
        '&:before': {
          content: '""',
          position: 'absolute',
          zIndex: -1,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: palette.common.black,
          transform: 'scaleY(0)',
          transformOrigin: '50% 0',
          transitionProperty: 'transform',
          transitionDuration: '0.3s',
          transitionTimingFunction: 'ease-out',
        },
        '&:hover': {
          color: palette.common.white,
          '&:before': {
            transform: 'scaleY(1)',
          },
        },
        '&:focus': {
          transform: 'perspective(1px) translateZ(0)',
        },
        [breakpoints.up('md')]: {
          fontSize: '1.125rem',
          paddingTop: spacing(1.75),
          paddingBottom: spacing(1.75),
          paddingLeft: spacing(2.5),
          paddingRight: spacing(2.5),
        },
      },
    },
    filters: {
      display: 'none',
      [breakpoints.up('md')]: {
        display: 'block',
        marginBottom: spacing(8),
      },
      '& .ais-Panel': {
        marginTop: spacing(2),
        marginBottom: spacing(2),
      },
      '& .ais-Panel-header': {
        fontSize: '.875rem',
        fontWeight: 600,
      },
      '& .filter-wrapper': {
        paddingRight: 20,
        position: 'relative',
      },
      '& .ais-RefinementList': {
        marginTop: spacing(1),
      },
      '& .ais-RefinementList-item': {
        transition: 'all .5s',
      },
      '& .ais-RefinementList-item--selected': {
        '& .ais-RefinementList-labelText': {
          fontWeight: 600,
        },
      },
      '& .filter': {
        borderBottom: '1px solid #f4f4f4',
        borderTop: '1px solid #f4f4f4',
      },
      '& .filter-category': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',

        '& svg': {
          width: 16,
          height: 16,
          transform: 'rotate(-90deg)',
          transition: 'all .3s ease-out',
        },
      },
      '& ul': {
        listStyleType: 'none',
        padding: 0,
        marginTop: 0,
        marginBottom: 0,
        '& li': {
          marginRight: spacing(1),
          marginBottom: spacing(1),
        },
        '& label': {
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          cursor: 'pointer',
          fontSize: '0.875rem',
          userSelect: 'none',
        },
        '& .ais-RefinementList-labelText, & .ais-RefinementList-count': {
          marginLeft: 5,
          display: 'inline-block',
        },
        '& input': {
          margin: 0,
        },
        '& .ais-RefinementList-count': {
          backgroundColor: 'rgba(197,201,224,.2)',
          padding: '1px 8px',
          borderRadius: 2,
          display: 'inline-block',
          fontSize: '.650rem',
          marginLeft: '5px',
          color: '#333',
        },
      },
      '& .ais-RefinementList-showMore': {
        backgroundColor: palette.common.white,
        border: 0,
        padding: 0,
        paddingBottom: spacing(0.5),
        marginTop: spacing(1),
        color: palette.grey[100],
        cursor: 'pointer',
        backgroundImage: `linear-gradient(120deg,${palette.secondary.main} 0%,${palette.secondary.main} 100%)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% .1875rem',
        backgroundPosition: '0 100%',
        transition: 'all .4s',
        fontSize: '.75rem',
        '&:hover': {
          outline: 0,
          backgroundImage: `linear-gradient(120deg,${palette.primary.main} 0%,${palette.primary.main} 100%)`,
        },
        '&:focus': {
          outline: 0,
        },
      },
    },
    filterHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '1px solid #ddd',
      paddingBottom: spacing(1.25),
      '& > span': {
        fontSize: '1.125rem',
        fontWeight: 600,
      },
      '& .ais-ClearRefinements': {
        '& button': {
          border: 'none',
          backgroundColor: 'transparent',
          cursor: 'pointer',
          padding: 0,
          '&:hover': {
            borderBottom: `2px solid ${palette.secondary.main}`,
          },
          '&:disabled': {
            cursor: 'not-allowed',
            '&:hover': {
              border: 'none',
            },
          },
        },
      },
    },
    searchForm: {
      display: 'flex',
      flexWrap: 'wrap',
      margin: '0 auto',
    },
    searchInput: {
      outline: 'none',
      padding: '10px 20px',
      border: '1px solid #999',
      width: '100%',
      flex: 1,
      fontSize: 30,
      lineHeight: '48px',
      color: palette.common.black,
      borderRight: 'none',
    },
    searchButton: {
      padding: '10px 0',
      width: 60,
      backgroundColor: '#fff',
      borderLeft: 'none',
      borderColor: '#999',
      textAlign: 'center',
      cursor: 'pointer',
    },
    actions: {
      display: 'none',

      [breakpoints.up('md')]: {
        justifyContent: 'flex-end',
        display: 'flex',
        alignItems: 'center',
        paddingBottom: spacing(2),
        marginBottom: spacing(2),
        width: '100%',
        alignSelf: 'flex-start',
      },
      '& .ais-SortBy-select': {
        padding: spacing(0.75),
        paddingTop: spacing(0.75),
        paddingBottom: spacing(0.75),
        marginRight: spacing(1),
        border: 'none',
        fontSize: '1rem',
        color: palette.grey[100],
        backgroundColor: '#f4f4f4',
        borderRadius: 4,
      },
    },
    icon: {
      background: 'transparent',
      border: 0,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      '&:focus': {
        outline: `1px dashed ${palette.primary.main}`,
      },
      '& svg': {
        width: 28,
        height: 28,
        fill: palette.common.black,
      },
    },
    iconActive: {
      '& svg': {
        fill: palette.primary.main,
      },
    },
  })
);
