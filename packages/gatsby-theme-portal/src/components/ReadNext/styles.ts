import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    readNext: {
      marginTop: theme.spacing(3.75),
    },
    readNextTitle: {
      position: 'relative',
      fontSize: '.875rem',
      fontWeight: 600,
      lineHeight: 1.1,
      margin: 0,

      [theme.breakpoints.up('md')]: {
        fontSize: '1.125rem',
      },

      '&:before': {
        content: '""',
        height: 10,
        width: 80,
        position: 'absolute',
        zIndex: -1,
        bottom: 0,
        left: '-.625rem',
        background: theme.palette.secondary.main,
      },
    },
    readNextContent: {
      marginTop: theme.spacing(2),
      position: 'relative',
      '&:before': {
        content: '""',
        background: theme.palette.secondary.main,
        position: 'absolute',
        height: '100%',
        right: 0,
        top: 0,
        width: '100vw',
        zIndex: -1,
      },
      [theme.breakpoints.up('md')]: {
        maxHeight: 212,
      },
    },
    readNextImage: {
      overflow: 'hidden',
      [theme.breakpoints.up('md')]: {
        height: '212px',
      },
      '& img': {
        [theme.breakpoints.up('md')]: {
          maxWidth: 350,
          width: '532px !important',
          height: '345px !important',
        },
      },
    },
    readNextLink: {
      color: theme.palette.common.black,
      display: 'block',
      textDecoration: 'none',
      fontSize: '1.875rem',
      fontWeight: 600,
      paddingTop: theme.spacing(1.25),
      paddingRight: theme.spacing(1.25),
      [theme.breakpoints.up('md')]: {
        padding: 0,
      },
      '&:hover': {
        '& h3 span': {
          backgroundImage: `linear-gradient(120deg,${theme.palette.secondary.main} 0%,${theme.palette.secondary.main} 100%)`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% .1875rem',
          backgroundPosition: '0 100%',
        },
      },
    },
    readNextCopy: {
      backgroundColor: theme.palette.common.white,
      paddingTop: theme.spacing(1.25),
      paddingBottom: theme.spacing(1.25),
      paddingLeft: theme.spacing(2.5),
      paddingRight: theme.spacing(2.5),
      [theme.breakpoints.up('md')]: {
        position: 'absolute',
        maxWidth: 350,
        right: 20,
        top: 20,
      },
    },
    readNextCopyTitle: {
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.2,
      margin: 0,
      [theme.breakpoints.up('md')]: {
        fontSize: '1.875rem',
      },
    },
    readNextCopyType: {
      fontSize: '.75rem',
      fontWeight: 600,
      margin: 0,
      marginBottom: theme.spacing(1),
      marginRight: theme.spacing(1),
      textTransform: 'uppercase',
      color: theme.palette.quinary.main,
      display: 'block',
    },
  })
);
