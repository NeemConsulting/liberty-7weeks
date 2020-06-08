import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles(({ breakpoints, palette, spacing }: Theme) =>
  createStyles({
    wrapper: {
      paddingTop: spacing(1.5),
      paddingBottom: spacing(1.5),
      [breakpoints.up('md')]: {
        paddingTop: spacing(2.5),
        paddingBottom: spacing(2.5),
      },
    },
    items: {
      listStyleType: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
    },
    item: {
      fontSize: '.75rem',
      paddingLeft: spacing(1),
      whiteSpace: 'nowrap',
      '&::before': {
        display: 'inline-block',
        paddingRight: spacing(1),
        color: palette.grey[50],
        content: "'/'",
      },
      '&:first-child': {
        paddingLeft: spacing(0.5),
        display: 'block',
        '&:before': {
          display: 'none',
        },
      },
      '& + li + li + li': {
        display: 'none',
        [breakpoints.up('md')]: {
          display: 'block',
        },
      },
    },
    link: {
      color: palette.common.black,
      textDecoration: 'none',
    },
    active: {
      color: palette.grey[100],
    },
  })
);
