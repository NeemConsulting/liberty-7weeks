export default theme => ({
  section: {
    paddingBottom: theme.spacing(2.5),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
    },
  },
});
