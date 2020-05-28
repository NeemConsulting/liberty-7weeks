export default theme => ({
  sectionTitle: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: theme.spacing(1.875),
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(3),
      flexDirection: 'row',
      alignItems: 'center',
    },
  },
  sectionLink: {
    color: theme.palette.common.black,
    textDecoration: 'none',
    fontSize: '.875rem',
    fontWeight: 700,
    alignSelf: 'flex-start',
    backgroundImage: `linear-gradient(120deg,${theme.palette.primary.main} 0%,${theme.palette.primary.main} 100%)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% .1875rem',
    backgroundPosition: '0 100%',
    [theme.breakpoints.up('md')]: {
      fontSize: '1.125rem',
      marginLeft: theme.spacing(3),
      marginBottom: theme.spacing(1),
      alignSelf: 'center',
    },
    '&:hover, &:focus': {
      backgroundImage: `linear-gradient(120deg,${theme.palette.common.black} 0%,${theme.palette.common.black} 100%)`,
    },
  },
  heroImage: {
    position: 'relative',
    '& picture img': {
      transition: 'all 1.2s ease 0s !important',
    },
  },
  iconPlay: {
    width: '2.5rem',
    height: '2.5rem',
    bottom: '.5rem',
    left: '.5rem',
    backgroundColor: theme.palette.primary.main,
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 1.2s ease 0s !important',
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
    '& svg': {
      width: '1.5rem',
      height: '1.5rem',
      fill: theme.palette.common.white,
      [theme.breakpoints.up('md')]: {
        width: '2rem',
        height: '2rem',
      },
    },
    [theme.breakpoints.up('md')]: {
      width: '3.25rem',
      height: '3.25rem',
      bottom: '.6875rem',
      left: '.6875rem',
    },
  },
  slider: {
    paddingTop: theme.spacing(2.5),
    position: 'relative',
    [theme.breakpoints.up('md')]: {
      paddingTop: 0,
      paddingBottom: theme.spacing(2.5),
    },
    '& .gatsby-image-wrapper': {
      height: 180,
      [theme.breakpoints.up('md')]: {
        height: 270,
      },
    },
    '& a': {
      textDecoration: 'none',
    },
    '& .swiper-container': {
      paddingBottom: theme.spacing(2.5),
    },
    '& .swiper-button-prev, & .swiper-button-next': {
      transition: 'all .3s ease 0s',
    },
    '& .swiper-button-prev': {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'block',
        color: theme.palette.common.black,
        top: '35%',
        height: 64,
        '&:hover': {
          color: theme.palette.primary.main,
          left: 4,
        },
        '&:after': {
          height: 64,
          fontSize: '4rem',
        },
      },
    },
    '& .swiper-button-next': {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'block',
        color: theme.palette.common.black,
        top: '35%',
        height: 64,
        '&:hover': {
          color: theme.palette.primary.main,
          right: 4,
        },
        '&:after': {
          height: 64,
          fontSize: '4rem',
        },
      },
    },
    '& .swiper-scrollbar': {
      backgroundColor: 'transparent',
    },
    '& .swiper-scrollbar-drag': {
      backgroundColor: 'rgba(0,0,0,.2)',
    },
    '& .swiper-container-horizontal > .swiper-scrollbar': {
      width: '100%',
      height: 5,
      [theme.breakpoints.up('md')]: {
        height: 10,
      },
    },
    '& .swiper-slide': {
      opacity: 0.2,
    },
    '& .swiper-slide.swiper-slide-active': {
      opacity: 1,
      '& + div': {
        opacity: 1,
      },
      '& + div + div': {
        opacity: 1,
      },
      '& + div + div + div': {
        opacity: 1,
      },
    },
  },
  sliderLink: {
    display: 'block',
    '&:hover': {
      '& p > span': {
        backgroundImage: `linear-gradient(120deg,${theme.palette.secondary.main} 0%,${theme.palette.secondary.main} 100%)`,
      },
      '& .icon:before': {
        transform: 'scaleX(1)',
      },
    },
  },
  sliderTitle: {},
  sliderItemCaption: {
    fontSize: '.875rem',
    fontWeight: 600,
    color: theme.palette.common.black,
    marginTop: theme.spacing(1.875),
    marginBottom: theme.spacing(0.625),
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      fontSize: '1.125rem',
    },
    '& span': {
      transition: 'all .15s',
      backgroundImage:
        'linear-gradient(120deg,rgba(184,240,192,0) 0%,rgba(184,240,192,0) 100%)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% .1875rem',
      backgroundPosition: '0 100%',
    },
  },
  slideType: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: theme.palette.common.white,
    fontSize: '.625rem',
    fontWeight: 600,
    color: theme.palette.quinary.main,
    paddingTop: theme.spacing(0.375),
    paddingBottom: theme.spacing(0.375),
    paddingLeft: theme.spacing(0.625),
    paddingRight: theme.spacing(0.625),
    zIndex: 1,
    textTransform: 'uppercase',
    letterSpacing: 1,
    [theme.breakpoints.up('md')]: {
      fontSize: '.75rem',
      padding: theme.spacing(0.75),
    },
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
