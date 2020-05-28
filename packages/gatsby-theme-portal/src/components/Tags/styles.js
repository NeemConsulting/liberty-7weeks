export default theme => ({
  tags: {
    marginTop: theme.spacing(3.75),
    marginBottom: theme.spacing(2.5),
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(3.75),
    },
  },
  tagsTitle: {
    fontSize: '1.375rem',
    lineHeight: 1.1,
    fontWeight: 600,
    position: 'relative',
    margin: 0,
    marginBottom: theme.spacing(2),
    paddingTop: theme.spacing(1),
    '&:before': {
      content: '""',
      background: theme.palette.secondary.main,
      position: 'absolute',
      right: 0,
      top: 0,
      width: '100vw',
      height: 20,
      zIndex: -1,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2.5rem',
      paddingTop: theme.spacing(0.625),
      marginBottom: theme.spacing(3.75),
    },
  },
  tagList: {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
  },
  tagListItem: {
    marginRight: theme.spacing(1.25),
    marginBottom: theme.spacing(1.25),
  },
  tagsListLink: {
    color: theme.palette.common.black,
    display: 'inline-block',
    textDecoration: 'none',
    fontSize: '.875rem',
    fontWeight: 700,
    lineHeight: 1.1,
    backgroundImage: `linear-gradient(120deg,${theme.palette.secondary.main} 0%,${theme.palette.secondary.main} 100%)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% .1875rem',
    backgroundPosition: '0 100%',
    [theme.breakpoints.up('md')]: {
      fontSize: '1.125rem',
    },
  },
});
