export default theme => ({
  galleryWrapper: {
    textAlign: 'center',
    padding: 0,
    paddingBottom: theme.spacing(2.5),
    marginBottom: theme.spacing(2.5),
    '& .carousel-root': {
      display: 'flex',
      flexDirection: 'column',
    },
    '& .carousel': {
      order: 2,
      maxWidth: 750,
      maxHeight: 500,
      margin: 'auto',
      '& .slide': {
        background: '#f4f4f4',
      },
      '& .thumbs-wrapper': {
        display: 'none',
        [theme.breakpoints.up('md')]: {
          maxWidth: 750,
          margin: 'auto',
          display: 'block',
        },
      },
      '& .thumb': {
        transition: 'all .6s ease 0s',
        cursor: 'pointer',
        opacity: 0.2,
        '&:hover': {
          borderColor: theme.palette.primary.main,
        },
        '&.selected': {
          borderColor: theme.palette.primary.main,
          opacity: 1,
        },
      },
      '& .thumbs': {
        padding: 0,
        textAlign: 'left',
        margin: 0,
      },
    },
    '& .carousel-status': {
      background: theme.palette.common.black,
      color: theme.palette.common.white,
      textShadow: 'none',
      left: 0,
      right: 'auto',
      margin: 0,
      paddingLeft: theme.spacing(1.875),
      paddingRight: theme.spacing(1.875),
      fontSize: '1rem',
      fontWeight: 700,
      '& span': {
        fontWeight: 500,
      },
    },
    '& .carousel + .carousel': {
      order: 1,
    },
  },
  carouselArrow: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      position: 'absolute',
      zIndex: 2,
      top: 'calc(50% - 50px)',
      width: 77,
      height: 77,
      cursor: 'pointer',
      backgroundColor: 'transparent',
      border: 'none',
      display: 'block',
      right: 15,
      transition: 'all .4s ease 0s !important',
      '& svg': {
        transition: 'all .4s ease 0s !important',
      },
      '&:hover': {
        right: 10,
        '& svg': {
          fill: theme.palette.primary.main,
        },
      },
      '&:focus': {
        right: 10,
        outline: 'none',
        '& svg': {
          fill: theme.palette.primary.main,
        },
      },
    },
  },
  carouselArrowPrev: {
    left: 15,
    transform: 'rotate(180deg)',
    right: 'auto',
    '&:hover': {
      left: 10,
    },
    '&:focus': {
      left: 10,
    },
  },
});
