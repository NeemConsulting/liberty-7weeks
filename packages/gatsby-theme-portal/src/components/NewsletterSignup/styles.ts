import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles(({ spacing, breakpoints, palette }: Theme) =>
  createStyles({
    wrapper: {
      '& a': {
        color: palette.common.black,
        backgroundImage: `linear-gradient(120deg,${palette.secondary.main} 0%,${palette.secondary.main} 100%)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% .1875rem',
        backgroundPosition: '0 100%',
        textDecoration: 'none',
        display: 'inline-block',
        transition: 'all .3s ease-out',
        '&:hover': {
          backgroundImage: `linear-gradient(120deg,${palette.primary.main} 0%,${palette.primary.main} 100%)`,
        },
      },
    },
    banner: {
      backgroundColor: palette.secondary.main,
    },
    container: {
      margin: 'auto',
      maxWidth: 700,
      position: 'relative',
    },
    heading: {
      maxWidth: 660,
      backgroundColor: palette.common.white,
      padding: spacing(3),
      marginTop: spacing(-3),
      position: 'relative',
      '& h1': {
        margin: 0,
        lineHeight: 1.1,
      },
    },
    imageWrapper: {},
    pageTitle: {
      marginTop: 0,
      marginBottom: spacing(1.5),
      fontSize: '2rem',
      fontWeight: 400,
      textAlign: 'center',
      [breakpoints.up('md')]: {
        fontSize: '3rem',
      },
    },
    pageDescription: {
      fontSize: '.875rem',
      fontWeight: 400,
      textAlign: 'center',
      [breakpoints.up('md')]: {
        fontSize: '1.125rem',
      },
    },
    button: {
      fontSize: '1.125rem',
      fontWeight: 700,
      width: 160,
      height: 50,
      cursor: 'pointer',
      backgroundColor: palette.primary.main,
      border: `1px solid ${palette.primary.main}`,
      color: palette.common.white,
      position: 'relative',
      transition: 'all .3s ease-out',
      marginTop: spacing(3),

      '&:hover': {
        borderColor: palette.common.black,
        backgroundColor: palette.common.black,
        color: palette.common.white,
      },
    },
    thankyou: {
      textAlign: 'center',
      position: 'absolute',
      left: 20,
      right: 20,
      maxWidth: 660,
      backgroundColor: palette.common.white,
      padding: spacing(2),
      bottom: '100%',
      '& h2': {
        fontSize: '2rem',
        fontWeight: 400,
        textAlign: 'center',
        margin: 0,
        [breakpoints.up('md')]: {
          fontSize: '3rem',
        },
      },
      '& svg': {
        animation: '$jiggle ease-in-out 400ms infinite',
      },
    },
    '@keyframes jiggle': {
      '0%': {
        transform: 'none',
      },
      '25%': {
        transform: 'rotateZ(5deg)',
      },

      '75%': {
        transform: 'rotateZ(-5deg)',
      },
      '100%': {
        transform: 'none',
      },
    },
  })
);
