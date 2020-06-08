import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles(({ breakpoints, palette, spacing }: Theme) =>
  createStyles({
    section: {
      marginTop: spacing(3.75),
      marginBottom: spacing(3.75),
    },
    sectionTitle: {
      fontSize: '1.875rem',
      fontWeight: 600,
      lineHeight: 1.1,
      position: 'relative',
      margin: 0,
      marginBottom: spacing(3.75),
      '&:before': {
        content: '""',
        background: palette.quaternary.main,
        position: 'absolute',
        right: 0,
        top: 0,
        width: '100vw',
        height: 20,
        zIndex: -1,
      },
    },
    gridItem: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: spacing(2.5),
    },
    icon: {
      backgroundColor: palette.secondary.main,
      borderRadius: '50%',
      width: 50,
      height: 50,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      '& svg': {
        width: 20,
        height: 20,
      },
      [breakpoints.up('md')]: {
        width: 120,
        height: 120,
        '& svg': {
          width: 50,
          height: 50,
        },
      },
    },
    gridItemCaption: {
      fontSize: '.75rem',
      fontWeight: 600,
      lineHeight: 1.1,
      margin: 0,
      marginTop: spacing(1),
      textAlign: 'center',
      [breakpoints.up('md')]: {
        fontSize: '.875rem',
      },
    },
  })
);
