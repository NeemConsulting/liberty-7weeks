import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles(({ breakpoints, palette, spacing }: Theme) =>
  createStyles({
    wrapper: {
      marginBottom: spacing(3.75),
      marginTop: spacing(3.75),
      textAlign: 'center',
      position: 'relative',
    },
    name: {
      fontSize: '.875rem',
      fontWeight: 700,
      maxWidth: '80%',
      margin: 'auto',
      paddingBottom: spacing(0.375),
      '& span': {
        backgroundImage: `linear-gradient(120deg,${palette.secondary.main} 0%,${palette.secondary.main} 100%)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% .1875rem',
        backgroundPosition: '0 100%',
      },
      [breakpoints.up('md')]: {
        fontSize: '1.125rem !important',
      },
    },
    tagline: {
      marginBottom: spacing(1.25),
      '& span': {
        fontSize: '1.125rem',
        fontWeight: 700,
        background: `linear-gradient(to bottom,${palette.common.white} 40%,${palette.quaternary.main} 5%,${palette.quaternary.main} 95%)`,
        display: 'inline-block',
      },
    },
    image: {
      width: 250,
      margin: 'auto',
      position: 'relative',
    },
    link: {
      display: 'block !important',
      '&:before, &:after': {
        display: 'none',
      },
    },
    buynow: {
      backgroundColor: palette.primary.main,
      color: palette.common.white,
      fontSize: '.875rem',
      fontWeight: 700,
      overflow: 'hidden',
      transform: 'perspective(1px) translateZ(0)',
      borderRadius: 3,
      transition: 'all .5s',
      marginTop: spacing(2),
      display: 'inline-block',
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
        background: palette.common.black,
        transform: 'scaleX(0)',
        transformOrigin: '0 50%',
        transitionProperty: 'transform',
        transitionDuration: '0.3s',
        transitionTimingFunction: 'ease-out',
      },
      '& svg': {
        marginRight: spacing(2),
        marginLeft: spacing(2),
        transition: 'all .5s',
      },
      '&:hover': {
        '&:before': {
          transform: 'scaleX(1)',
        },
        '& svg': {
          fill: palette.common.white,
        },
      },
    },
    animateIcon: {
      display: 'flex',
      alignItems: 'center',
      '& span': {
        backgroundColor: palette.secondary.main,
        display: 'block',
        paddingTop: spacing(1.25),
        paddingBottom: spacing(1.25),
        paddingLeft: spacing(2),
        paddingRight: spacing(2),
        color: palette.common.black,
      },
    },
  })
);
