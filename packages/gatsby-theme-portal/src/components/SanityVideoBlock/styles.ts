import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles(({ breakpoints, palette, spacing }: Theme) =>
  createStyles({
    section: {
      backgroundColor: palette.tertiary.main,
      paddingTop: 0,
      paddingBottom: spacing(2),
      [breakpoints.up('md')]: {
        paddingTop: 0,
        paddingBottom: 0,
      },
    },
    sectionTitle: {
      [breakpoints.up('md')]: {
        marginBottom: spacing(2.5),
      },
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      [breakpoints.up('md')]: {
        flexDirection: 'row',
      },
      '& iframe': {
        [breakpoints.up('md')]: {
          order: 2,
          height: 380,
        },
      },
    },
    copyText: {
      padding: spacing(2.25),
      background: palette.common.white,
      order: 2,
      [breakpoints.up('md')]: {
        order: 1,
        alignSelf: 'center',
        padding: spacing(3),
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
