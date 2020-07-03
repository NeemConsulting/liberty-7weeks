import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles(({ breakpoints, palette, spacing }: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      paddingTop: spacing(2.5),
      paddingBottom: spacing(2.5),
      position: 'relative',
      [breakpoints.up('md')]: {
        paddingTop: spacing(5),
        paddingBottom: spacing(5),
      },
    },
    sectionTitle: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: spacing(1.875),
      [breakpoints.up('md')]: {
        marginBottom: spacing(2),
        flexDirection: 'row',
        alignItems: 'center',
      },
    },
    tile: {
      position: 'relative',
    },
    sectionLink: {
      color: palette.common.black,
      textDecoration: 'none',
      fontSize: '.875rem',
      fontWeight: 700,
      alignSelf: 'flex-start',
      backgroundImage: `linear-gradient(120deg,${palette.primary.main} 0%,${palette.primary.main} 100%)`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% .1875rem',
      backgroundPosition: '0 100%',
      [breakpoints.up('md')]: {
        fontSize: '1.125rem',
        marginLeft: spacing(3),
        marginBottom: spacing(1),
        alignSelf: 'center',
      },
      '&:hover, &:focus': {
        backgroundImage: `linear-gradient(120deg,${palette.common.black} 0%,${palette.common.black} 100%)`,
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
      backgroundColor: palette.primary.main,
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
        background: palette.common.black,
        transform: 'scaleX(0)',
        transformOrigin: '0 50%',
        transitionProperty: 'transform',
        transitionDuration: '0.3s',
        transitionTimingFunction: 'ease-out',
      },
      '& svg': {
        width: '1.5rem',
        height: '1.5rem',
        fill: palette.common.white,
        [breakpoints.up('md')]: {
          width: '2rem',
          height: '2rem',
        },
      },
      [breakpoints.up('md')]: {
        width: '3.25rem',
        height: '3.25rem',
        bottom: '.6875rem',
        left: '.6875rem',
      },
    },

    sliderLink: {
      display: 'block',
      textDecoration: 'none',
      '&:hover': {
        '& h3 > span': {
          backgroundImage: `linear-gradient(120deg,${palette.secondary.main} 0%,${palette.secondary.main} 100%)`,
        },
        '& .icon:before': {
          transform: 'scaleX(1)',
        },
        '& picture img': {
          transform: 'scale(1.2)',
        },
      },
    },
    sliderTitle: {},
    sliderItemCaption: {
      fontSize: '.875rem',
      fontWeight: 600,
      color: palette.common.black,
      margin: 0,
      padding: spacing(2),
      backgroundColor: palette.common.white,
      [breakpoints.up('md')]: {
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
      backgroundColor: palette.common.white,
      fontSize: '.625rem',
      fontWeight: 600,
      lineHeight: 1.1,
      color: palette.quinary.main,
      paddingTop: spacing(0.375),
      paddingBottom: spacing(0.375),
      paddingLeft: spacing(0.625),
      paddingRight: spacing(0.625),
      zIndex: 1,
      textTransform: 'uppercase',
      letterSpacing: 1,
      [breakpoints.up('md')]: {
        fontSize: '.75rem',
        padding: spacing(0.75),
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
