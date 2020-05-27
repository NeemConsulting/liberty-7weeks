export default theme => ({
  wrapper: {
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(2.5),
      paddingBottom: theme.spacing(2.5),
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
    paddingLeft: theme.spacing(1),
    whiteSpace: 'nowrap',
    '&::before': {
      display: 'inline-block',
      paddingRight: theme.spacing(1),
      color: theme.palette.grey[50],
      content: "'/'",
    },
    '&:first-child': {
      paddingLeft: theme.spacing(0.5),
      display: 'block',
      '&:before': {
        display: 'none',
      },
    },
    '& + li + li + li': {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'block',
      },
    },
  },
  link: {
    color: theme.palette.common.black,
    textDecoration: 'none',
  },
  active: {
    color: theme.palette.grey[100],
  },
});
