export default theme => ({
  teaserWrapper: {
    marginTop: theme.spacing(3.75),
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(2.5),
    },
  },
  teaser: {
    marginBottom: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    position: 'relative',
  },
  teaserFirst: {
    marginBottom: theme.spacing(3),
    '& .gatsby-image-wrapper': {
      width: '100%',
      height: 206,
      marginRight: 0,
    },
    '& a > div': {
      flexDirection: 'column',
    },
    '& h3': {
      fontSize: '.875rem',
      fontWeight: 600,
      lineHeight: 1.3,
      marginTop: theme.spacing(0.625),
      [theme.breakpoints.up('md')]: {
        fontSize: '1.125rem',
      },
    },
    '& div > span': {
      position: 'absolute',
      top: 0,
      backgroundColor: theme.palette.common.white,
      color: theme.palette.quinary.main,
      fontSize: '.75rem',
      fontWeight: 600,
      letterSpacing: 1,
      marginTop: 0,

      paddingTop: theme.spacing(0.375),
      paddingBottom: theme.spacing(0.375),
      paddingLeft: theme.spacing(0.75),
      paddingRight: theme.spacing(0.75),
      [theme.breakpoints.up('md')]: {
        paddingTop: theme.spacing(0.75),
        paddingBottom: theme.spacing(0.75),
      },
    },
  },
  teaserCopy: {
    width: '100%',
    flex: 1,
  },
  teaserImage: {
    marginRight: theme.spacing(1.875),
  },
  teaserLink: {
    fontSize: '1rem',
    textDecoration: 'none',
    color: theme.palette.common.black,
    margin: 0,
    display: 'block',
    '&:hover h3': {
      '& span': {
        backgroundImage: `linear-gradient(120deg,${theme.palette.secondary.main} 0%,${theme.palette.secondary.main} 100%)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% .1875rem',
        backgroundPosition: '0 100%',
      },
    },
  },
  teaserType: {
    marginTop: theme.spacing(0.625),
    marginBottom: theme.spacing(0.625),
    display: 'block',
    textTransform: 'uppercase',
    color: theme.palette.quinary.main,
    fontSize: '.625rem',
    fontWeight: 600,
    lineHeight: 1.1,
    letterSpacing: 1,
    [theme.breakpoints.up('md')]: {
      fontSize: '.75rem',
    },
  },
  teaserTitle: {
    fontSize: '.875rem',
    fontWeight: 400,
    lineHeight: 1.1,
    margin: 0,
    [theme.breakpoints.up('md')]: {
      fontSize: '1.125rem',
      lineHeight: 1.3,
      marginTop: theme.spacing(1),
    },
  },
  flexBox: {
    display: 'flex',
    alignItems: 'stretch',
  },
  title: {
    fontSize: '1.375rem',
    lineHeight: 1.1,
    fontWeight: 600,
    margin: 0,
    marginBottom: theme.spacing(2.5),
    paddingTop: theme.spacing(1),
    position: 'relative',
    '&:before': {
      content: '""',
      background: theme.palette.secondary.main,
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100vw',
      height: 20,
      zIndex: -1,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.875rem',
      paddingTop: theme.spacing(0.625),
    },
  },
});
