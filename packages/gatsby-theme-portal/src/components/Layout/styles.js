export default theme => ({
  mainContentWrapper: {
    marginTop: theme.spacing(7.5),
    overflow: 'hidden',
    '&.home-page': {
      paddingTop: 0,
    },
  },
  mode: {
    position: 'fixed',
    top: 10,
    left: 20,
    zIndex: 3,
    display: 'none',
    '& .MuiSwitch-track': {
      backgroundColor: theme.palette.common.white,
    },
    [theme.breakpoints.up('lg')]: {
      display: 'block',
    },
  },
  skipLink: {
    position: 'absolute',
    padding: theme.spacing(0.5),
    zIndex: 4,
    color: theme.palette.common.black,
    background: theme.palette.common.white,
    border: `.0625rem solid ${theme.palette.common.black}`,
    whiteSpace: 'nowrap',
    '&:not(:focus)': {
      width: 1,
      height: 1,
      padding: 0,
      margin: -1,
      overflow: 'hidden',
      clip: 'rect(0, 0, 0, 0)',
      border: 0,
      pointerEvents: 'none',
    },
  },
});
