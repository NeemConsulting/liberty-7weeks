import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    section: {
      backgroundColor: theme.palette.tertiary.main,
      paddingTop: 0,
      paddingBottom: theme.spacing(2),
      [theme.breakpoints.up('md')]: {
        paddingTop: 0,
        paddingBottom: 0,
      },
    },
    sectionTitle: {
      [theme.breakpoints.up('md')]: {
        marginBottom: theme.spacing(2.5),
      },
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      [theme.breakpoints.up('md')]: {
        flexDirection: 'row',
      },
      '& iframe': {
        [theme.breakpoints.up('md')]: {
          order: 2,
          height: 380,
        },
      },
    },
    copyText: {
      padding: theme.spacing(2.25),
      background: theme.palette.common.white,
      order: 2,
      [theme.breakpoints.up('md')]: {
        order: 1,
        alignSelf: 'center',
        padding: theme.spacing(3),
        position: 'relative',
        right: -20,
      },
      '& p': {
        margin: 0,
        fontSize: '1.125rem',
      },
    },
  })
);
