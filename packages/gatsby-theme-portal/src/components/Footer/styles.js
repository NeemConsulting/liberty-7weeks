export default theme => ({
  footer: {
    background: theme.palette.common.black,
    transition: 'color 0.25s ease-out 0s',
    fontSize: '.775rem',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    paddingTop: theme.spacing(6),
    '& .c-social': {
      marginLeft: theme.spacing(2.5),
      marginRight: theme.spacing(2.5),
    },
  },
  wrapper: {
    paddingLeft: theme.spacing(2.5),
    paddingRight: theme.spacing(2.5),
  },
  navigationItems: {
    listStyleType: 'none',
    columns: 2,
    paddingLeft: 0,
    paddingBottom: theme.spacing(2),
    marginTop: theme.spacing(3.75),
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      justifyContent: 'center',
      alignItem: 'center',
      paddingBottom: theme.spacing(6),
    },
  },
  navigationItem: {
    marginBottom: theme.spacing(1.25),
    [theme.breakpoints.up('md')]: {
      marginBottom: 0,
      marginLeft: theme.spacing(2.5),
      marginRight: theme.spacing(2.5),
    },
  },
  navigationLink: {
    color: theme.palette.common.white,
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '.875rem',
    fontWeight: 700,
    lineHeight: 1.6,
    [theme.breakpoints.up('md')]: {
      fontSize: '1.125rem',
    },
    '&:after': {
      content: '""',
      display: 'block',
      height: '.1875rem',
      transition: '.35s cubic-bezier(.215,.61,.355,1)',
      width: 0,
    },
    '&:hover:after': {
      width: '100%',
      backgroundColor: theme.palette.primary.main,
    },
  },
  footerSecondary: {
    textAlign: 'center',
    backgroundColor: theme.palette.grey[50],
    color: theme.palette.grey[200],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(5),
    },
    '& img': {
      marginRight: theme.spacing(1.25),
      opacity: 0.5,
    },
  },
});
