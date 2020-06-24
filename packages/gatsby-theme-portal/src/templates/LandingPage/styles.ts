import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles(({ spacing, breakpoints }: Theme) =>
  createStyles({
    pageContext: {
      textAlign: 'center',
      margin: 'auto',
      paddingBottom: spacing(2),
      fontSize: '.875rem',
      [breakpoints.up('md')]: {
        fontSize: '1.125rem',
      },
      '& p': {
        margin: 0,
      },
    },
    headline: {
      fontSize: '1.875rem',
      fontWeight: 700,
      lineHeight: 1.1,
      margin: 0,
      marginBottom: spacing(1.25),
      [breakpoints.up('md')]: {
        fontSize: '2.875rem',
      },
    },
  })
);
