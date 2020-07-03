import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles(({ breakpoints, palette, spacing }: Theme) =>
  createStyles({
    sectionTitle: {
      fontSize: '2.5rem',
      fontWeight: 600,
      margin: 0,
      marginBottom: spacing(3),
      marginRight: spacing(3),
    },
    sliderWrapper: {
      marginLeft: spacing(-2),
      marginRight: spacing(-2),
      position: 'relative',
      [breakpoints.up('md')]: {
        margin: 0,
      },
      '& picture': {
        display: 'block',
        maxWidth: 752,
      },
      '& .swiper-pagination': {
        display: 'flex',
        justifyContent: 'center',
        position: 'static',
        marginTop: spacing(2),
        marginBottom: spacing(2),
        [breakpoints.up('md')]: {
          marginTop: spacing(2.5),
          marginBottom: spacing(2.5),
        },
      },
      '& .swiper-pagination-bullet': {
        backgroundColor: palette.grey[20],
        width: 10,
        height: 10,
        [breakpoints.up('md')]: {
          width: 20,
          height: 20,
        },
      },

      '& .swiper-pagination-bullet-active': {
        backgroundColor: palette.common.black,
      },

      '& figure': {
        margin: 0,
      },

      '& picture img': {
        width: '100%',
        height: '100%',
      },
    },
    copy: {
      backgroundColor: palette.common.white,
      maxWidth: '96%',
      marginTop: spacing(-1.875),
      marginBottom: 0,
      marginLeft: 'auto',
      marginRight: 'auto',
      zIndex: 1,
      position: 'relative',
      [breakpoints.up('md')]: {
        position: 'absolute',
        top: '50%',
        right: 30,
        transform: 'translateY(-50%)',
        zIndex: 1,
        maxWidth: 462,
        width: 462,
      },
    },
    heading: {
      marginBottom: spacing(1.875),
    },
    copyInner: {
      padding: spacing(2.5),
      [breakpoints.up('md')]: {
        padding: spacing(3),
      },
    },
    slideType: {
      marginBottom: spacing(1),
      textTransform: 'uppercase',
      letterSpacing: 2,
      color: palette.quinary.main,
      fontSize: '.75rem',
      fontWeight: 700,
    },
    callToAction: {
      fontSize: '.875rem',
      fontWeight: 700,
      backgroundColor: palette.primary.main,
      color: palette.common.black,
      paddingTop: spacing(1.25),
      paddingBottom: spacing(1.25),
      paddingLeft: spacing(2),
      paddingRight: spacing(2),
      display: 'inline-block',
      textDecoration: 'none',
      position: 'relative',
      transition: 'all .3s ease-out',
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
        transform: 'scaleX(0)',
        transformOrigin: '0 50%',
        transitionProperty: 'transform',
        transitionDuration: '0.3s',
        transitionTimingFunction: 'ease-out',
      },
      '&:hover': {
        color: palette.common.white,
        '&:before': {
          transform: 'scaleX(1)',
        },
      },
      [breakpoints.up('md')]: {
        fontSize: '1.125rem',
        paddingTop: spacing(1.75),
        paddingBottom: spacing(1.75),
        paddingLeft: spacing(2.5),
        paddingRight: spacing(2.5),
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
      width: 26,
      height: 50,
      cursor: 'pointer',
      '& svg': {
        transition: 'all .3s ease-in',
      },
      [breakpoints.up('md')]: {
        top: '45%',
        height: 80,
        width: 45,
        '& svg': {
          transition: 'all .3s ease-in',
        },
      },
      '&:disabled': {
        opacity: 0.2,
        cursor: 'not-allowed',
      },
    },
    nextButton: {
      right: 10,
      '&:not(:disabled):hover': {
        '& svg': {
          fill: palette.primary.main,
        },
      },
      [breakpoints.up('md')]: {
        right: -60,
      },
    },
    prevButton: {
      left: 10,
      '& svg': {
        transform: 'rotate(180deg)',
      },
      '&:not(:disabled):hover': {
        '& svg': {
          fill: palette.primary.main,
        },
      },
      [breakpoints.up('md')]: {
        left: -60,
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
  })
);
