import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    section: {
      marginTop: theme.spacing(3.75),
      marginBottom: theme.spacing(3.75),
      position: 'relative',
      '&:before': {
        content: '""',
        background: theme.palette.quaternary.main,
        position: 'absolute',
        right: 0,
        bottom: 0,
        width: '100vw',
        height: 10,
        zIndex: -1,
      },
    },
    sectionTitle: {
      fontSize: '1.875rem',
      fontWeight: 600,
      lineHeight: 1.1,
      position: 'relative',
      margin: 0,
      marginBottom: theme.spacing(3.75),
      '&:before': {
        content: '""',
        background: theme.palette.quaternary.main,
        position: 'absolute',
        right: 0,
        top: 0,
        width: '100vw',
        height: 20,
        zIndex: -1,
      },
    },
    productTitle: {
      fontSize: '.875rem',
      fontWeight: 600,
      lineHeight: 1.4,
      margin: 0,
      marginTop: theme.spacing(1),
      textAlign: 'center',
    },
    image: {
      maxWidth: 140,
      maxHeight: 140,
      margin: 'auto',
    },
    gridContainer: {
      paddingBottom: theme.spacing(1.25),
    },
    gridItem: {
      padding: 0,
      marginBottom: theme.spacing(2.5),
    },
  })
);
