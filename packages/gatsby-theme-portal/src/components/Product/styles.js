export default theme => ({
  wrapper: {
    marginBottom: theme.spacing(3.75),
    marginTop: theme.spacing(3.75),
    textAlign: 'center',
    position: 'relative',
  },
  name: {
    fontSize: '.875rem',
    fontWeight: 700,
    maxWidth: '80%',
    margin: 'auto',
    paddingBottom: theme.spacing(0.375),
    '& span': {
      backgroundImage: `linear-gradient(120deg,${theme.palette.secondary.main} 0%,${theme.palette.secondary.main} 100%)`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% .1875rem',
      backgroundPosition: '0 100%',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.125rem !important',
    },
  },
  tagline: {
    marginBottom: theme.spacing(1.25),
    '& span': {
      fontSize: '1.125rem',
      fontWeight: 700,
      background: `linear-gradient(to bottom,${theme.palette.common.white} 40%,${theme.palette.quaternary.main} 5%,${theme.palette.quaternary.main} 95%)`,
      display: 'inline-block',
    },
  },
  image: {
    width: 250,
    margin: 'auto',
    position: 'relative',
  },
  link: {
    '&:before, &:after': {
      display: 'none',
    },
  },
  buynow: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    fontSize: '.875rem',
    fontWeight: 700,
    overflow: 'hidden',
    transform: 'perspective(1px) translateZ(0)',
    borderRadius: 3,
    transition: 'all .5s',
    marginTop: theme.spacing(2),
    '&:after': {
      display: 'none',
    },
    '&:before': {
      content: '""',
      position: 'absolute',
      zIndex: -1,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      height: 'auto',
      background: theme.palette.common.black,
      transform: 'scaleX(0)',
      transformOrigin: '0 50%',
      transitionProperty: 'transform',
      transitionDuration: '0.3s',
      transitionTimingFunction: 'ease-out',
    },
    '& svg': {
      marginRight: theme.spacing(2),
      marginLeft: theme.spacing(2),
      transition: 'all .5s',
    },
    '&:hover': {
      '&:before': {
        transform: 'scaleX(1)',
      },
      '& svg': {
        fill: theme.palette.common.white,
      },
    },
  },
  animateIcon: {
    display: 'flex',
    alignItems: 'center',
    '& span': {
      backgroundColor: theme.palette.secondary.main,
      display: 'block',
      paddingTop: theme.spacing(1.25),
      paddingBottom: theme.spacing(1.25),
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      color: theme.palette.common.black,
    },
  },
});
