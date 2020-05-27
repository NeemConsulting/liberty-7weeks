export default theme => ({
  sectionTitle: {
    fontSize: '2.5rem',
    fontWeight: 600,
    margin: 0,
    marginBottom: theme.spacing(3),
    marginRight: theme.spacing(3),
  },
  sliderWrapper: {
    marginLeft: theme.spacing(-2),
    marginRight: theme.spacing(-2),
    position: 'relative',
    [theme.breakpoints.up('md')]: {
      margin: 0,
    },
    '& .swiper-pagination': {
      display: 'flex',
      justifyContent: 'center',
      position: 'static',
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      [theme.breakpoints.up('md')]: {
        marginTop: theme.spacing(2.5),
        marginBottom: theme.spacing(2.5),
      },
    },
    '& .swiper-pagination-bullet': {
      backgroundColor: theme.palette.grey[20],
      width: 10,
      height: 10,
      [theme.breakpoints.up('md')]: {
        width: 20,
        height: 20,
      },
    },

    '& .swiper-pagination-bullet-active': {
      backgroundColor: theme.palette.common.black,
    },

    '& picture img': {
      maxWidth: 800,
    },
  },
  copy: {
    backgroundColor: theme.palette.common.white,
    maxWidth: '96%',
    marginTop: theme.spacing(-1.875),
    marginBottom: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
    zIndex: 1,
    position: 'relative',
    [theme.breakpoints.up('md')]: {
      position: 'absolute',
      top: '50%',
      right: 0,
      transform: 'translateY(-50%)',
      zIndex: 1,
      maxWidth: 462,
      width: 462,
    },
  },
  heading: {
    marginBottom: theme.spacing(1.875),
  },
  copyInner: {
    padding: theme.spacing(2.5),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(3),
    },
  },
  callToAction: {
    fontSize: '.875rem',
    fontWeight: 700,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    paddingTop: theme.spacing(1.25),
    paddingBottom: theme.spacing(1.25),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    display: 'inline-block',
    textDecoration: 'none',
    position: 'relative',
    transform: 'perspective(1px) translateZ(0)',
    '&:before': {
      content: '""',
      position: 'absolute',
      zIndex: -1,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: theme.palette.common.black,
      transform: 'scaleX(0)',
      transformOrigin: '0 50%',
      transitionProperty: 'transform',
      transitionDuration: '0.3s',
      transitionTimingFunction: 'ease-out',
    },
    '&:hover:before': {
      transform: 'scaleX(1)',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.125rem',
      paddingTop: theme.spacing(1.75),
      paddingBottom: theme.spacing(1.75),
      paddingLeft: theme.spacing(2.5),
      paddingRight: theme.spacing(2.5),
    },
  },
  carouselArrow: {
    position: 'absolute',
    zIndex: 2,
    top: 'calc(50% - 50px)',
    width: 77,
    height: 77,
    cursor: 'pointer',
    backgroundColor: 'transparent',
    border: 'none',
  },
  navigationButton: {
    position: 'absolute',
    top: '30%',
    transform: 'translateY(-50%)',
    zIndex: 2,
    background: 'transparent',
    border: 'none',
    padding: 0,
    margin: 0,
    width: 43,
    height: 80,
    cursor: 'pointer',
    '& svg': {
      width: 75,
      height: 80,
      transition: 'all .3s ease-in',
    },
    [theme.breakpoints.up('md')]: {
      top: '45%',
    },
    '&:disabled': {
      opacity: 0.2,
      cursor: 'not-allowed',
    },
    '&:hover, &:focus': {
      outline: 'none',
    },
  },
  nextButton: {
    right: -60,
    '& svg': {
      marginLeft: -15,
    },
    '&:not(:disabled):hover': {
      '& svg': {
        fill: theme.palette.primary.main,
        marginLeft: -10,
      },
    },
  },
  prevButton: {
    left: -60,
    '& svg': {
      marginLeft: -15,
      transform: 'rotate(180deg)',
    },
    '&:not(:disabled):hover': {
      '& svg': {
        fill: theme.palette.primary.main,
        marginLeft: -20,
      },
    },
  },
  srOnly: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    clipPath: 'polygon(0 0,0 0,0 0)',
    height: '.0625rem',
    margin: '-.0625rem',
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    width: '.0625rem',
    whiteSpace: 'nowrap',
  },
});
