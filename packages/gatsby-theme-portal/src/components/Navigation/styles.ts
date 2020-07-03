import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles(({ breakpoints, palette, spacing }: Theme) =>
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
      [breakpoints.up('md')]: {
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
      backgroundColor: palette.common.white,
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
      background: palette.common.black,
      zIndex: 1,
      height: 0,
      transition: 'height .3s ease-in-out',
      [breakpoints.up('md')]: {
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
      [breakpoints.up('md')]: {
        height: 'auto',
        display: 'block',
        overflow: 'visible',
      },
    },
    navigationList: {
      display: 'flex',
      flexDirection: 'column',
      padding: 0,
      paddingTop: spacing(1.25),
      paddingBottom: spacing(1.25),
      listStyleType: 'none',
      margin: 0,

      [breakpoints.up('md')]: {
        alignItems: 'center',
        flexDirection: 'row',
        borderTop: 'none',
        padding: 0,
      },
    },
    navigationListItem: {
      position: 'relative',
      '&:hover > a, &:focus-within': {
        backgroundColor: palette.primary.main,
      },
      '&:hover > div': {
        height: 'auto',
      },
    },
    navigationLink: {
      fontSize: '1rem',
      color: palette.common.white,
      padding: spacing(1.875),
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

      [breakpoints.up('md')]: {
        padding: 0,
        paddingLeft: spacing(1.25),
        paddingRight: spacing(1.25),
        fontWeight: '700',
        width: 'auto',
        display: 'flex',
        alignItems: 'center',
        height: '59px',
        '&:hover, &:focus': {
          backgroundColor: palette.primary.main,
        },
        '&:focus + div': {
          height: 'auto',
        },
      },

      [breakpoints.up('lg')]: {
        paddingLeft: spacing(2.5),
        paddingRight: spacing(2.5),
        fontSize: '1.125rem',
      },
    },
    dropdownMenuIcon: {
      [breakpoints.up('md')]: {
        position: 'static',
        marginLeft: spacing(1.25),
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

      [breakpoints.up('md')]: {
        position: 'absolute',
        top: '100%',
        left: 0,
        overflow: 'auto',
        height: 0,
        background: palette.common.black,
        minWidth: '200px',
        '&:focus-within': {
          height: 'auto',
        },
      },
    },
    subNavigationList: {
      listStyleType: 'none',
      padding: 0,
      [breakpoints.up('md')]: {
        paddingTop: spacing(1.25),
        paddingBottom: spacing(1.25),
        borderTop: `4px solid ${palette.primary.main}`,
      },
    },
    subNavigationListItem: {},
    subNavigationLink: {
      padding: spacing(1.875),
      fontSize: '1rem',
      color: 'white',
      textDecoration: 'none',
      width: '100%',
      textAlign: 'left',
      position: 'relative',
      display: 'block',
      '&:hover': {
        backgroundColor: palette.grey[50],
      },
    },
  })
);
