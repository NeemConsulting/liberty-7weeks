import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    NavigationToggleButton: {
      background: 'transparent',
      border: 0,
      cursor: 'pointer',
      '&.is-active': {
        '& div': {
          '& span': {
            '&:first-child': {
              top: '.6875rem',
              width: 0,
              left: '50%',
            },
            '&:nth-child(4)': {
              top: '.6875rem',
              width: 0,
              left: '50%',
            },
            '&:nth-child(3)': {
              transform: 'rotate(-45deg)',
              width: '120%',
              marginLeft: '-10%',
            },
            '&:nth-child(2)': {
              transform: 'rotate(45deg)',
              width: '120%',
              marginLeft: '-10%',
            },
          },
        },
      },
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    NavigationToggleButtonIcon: {
      width: '1.5rem',
      height: '1.5rem',
      transition: '1s ease-in-out',
      cursor: 'pointer',
      position: 'relative',
    },
    NavigationToggleButtonIconBar: {
      transition: '.3s ease-in-out',
      display: 'block',
      position: 'absolute',
      height: '.0625rem',
      width: '100%',
      backgroundColor: theme.palette.common.white,
      opacity: 1,
      left: 0,
      top: '-.3125rem',
      '&:first-child': {
        top: '.0625rem',
      },
      '&:nth-child(2)': {
        top: '50%',
        transform: 'translateY(-50%)',
      },
      '&:nth-child(3)': {
        top: '50%',
        transform: 'translateY(-50%)',
      },
      '&:nth-child(4)': {
        top: '1.375rem',
      },
    },
    screenReaderOnly: {
      border: 0,
      clip: 'rect(0 0 0 0)',
      clipPath: 'polygon(0 0, 0 0, 0 0)',
      height: '.0625rem',
      margin: '-.0625rem',
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      width: '.0625rem',
      whiteSpace: 'nowrap',
    },
    navigation: {
      position: 'fixed',
      top: '60px',
      left: 0,
      right: 0,
      bottom: 0,
      background: theme.palette.common.black,
      zIndex: 1,
      height: 0,
      transition: 'height .3s ease-in-out',
      [theme.breakpoints.up('md')]: {
        display: 'block',
        position: 'static',
        height: 'auto',
      },
    },
    activeNavigation: {
      height: 'auto',
    },
    navigationInnerWrapper: {
      overflow: 'auto',
      height: '100%',
      [theme.breakpoints.up('md')]: {
        height: 'auto',
        display: 'block',
        overflow: 'visible',
      },
    },
    navigationList: {
      display: 'flex',
      flexDirection: 'column',
      padding: 0,
      paddingTop: theme.spacing(1.25),
      paddingBottom: theme.spacing(1.25),
      listStyleType: 'none',
      margin: 0,

      [theme.breakpoints.up('md')]: {
        alignItems: 'center',
        flexDirection: 'row',
        borderTop: 'none',
        padding: 0,
      },
    },
    navigationListItem: {
      position: 'relative',
      '&:hover > a, &:focus-within': {
        backgroundColor: theme.palette.primary.main,
      },
      '&:hover > div': {
        height: 'auto',
      },
    },
    navigationLink: {
      fontSize: '1rem',
      color: theme.palette.common.white,
      padding: theme.spacing(1.875),
      textDecoration: 'none',
      width: '100%',
      textAlign: 'left',
      position: 'relative',
      display: 'flex',
      justifyContent: 'space-between',
      border: 'none',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      textTransform: 'capitalize',
      '&:hover + div': {
        height: 'auto',
      },

      [theme.breakpoints.up('md')]: {
        padding: 0,
        paddingLeft: theme.spacing(1.25),
        paddingRight: theme.spacing(1.25),
        fontWeight: '700',
        width: 'auto',
        display: 'flex',
        alignItems: 'center',
        height: '59px',
        '&:hover, &:focus': {
          backgroundColor: theme.palette.primary.main,
        },
        '&:focus + div': {
          height: 'auto',
        },
      },

      [theme.breakpoints.up('lg')]: {
        paddingLeft: theme.spacing(2.5),
        paddingRight: theme.spacing(2.5),
        fontSize: '1.125rem',
      },
    },
    dropdownMenuIcon: {
      [theme.breakpoints.up('md')]: {
        position: 'static',
        marginLeft: theme.spacing(1.25),
      },
    },
    dropdownMenuIconSVG: {
      width: '.75rem',
      height: '.75rem',
      fill: 'white',
      display: 'block',
    },
    subNavigation: {
      overflow: 'hidden',
      transition: 'height .3s ease-in-out',
      height: 0,

      [theme.breakpoints.up('md')]: {
        position: 'absolute',
        top: '100%',
        left: 0,
        overflow: 'auto',
        height: 0,
        background: theme.palette.common.black,
        minWidth: '200px',
        '&:focus-within': {
          height: 'auto',
        },
      },
    },
    subNavigationList: {
      listStyleType: 'none',
      padding: 0,
      [theme.breakpoints.up('md')]: {
        paddingTop: theme.spacing(1.25),
        paddingBottom: theme.spacing(1.25),
        borderTop: `4px solid ${theme.palette.primary.main}`,
      },
    },
    subNavigationListItem: {},
    subNavigationLink: {
      padding: theme.spacing(1.875),
      fontSize: '1rem',
      color: 'white',
      textDecoration: 'none',
      width: '100%',
      textAlign: 'left',
      position: 'relative',
      display: 'block',
      '&:hover': {
        backgroundColor: theme.palette.grey[50],
      },
    },
  })
);
