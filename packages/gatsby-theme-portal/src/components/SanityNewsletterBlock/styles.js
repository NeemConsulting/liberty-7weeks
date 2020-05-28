export default theme => ({
  newsletter: {
    position: 'relative',
    paddingBottom: theme.spacing(4),
    paddingTop: theme.spacing(4),
    textAlign: 'center',
  },
  newsletterContent: {
    position: 'relative',
    zIndex: 1,
    maxWidth: 760,
    margin: 'auto',
    paddingLeft: theme.spacing(2.5),
    paddingRight: theme.spacing(2.5),
  },
  newsletterTitle: {
    fontSize: '1.125rem',
    lineHeight: 1.3,
    margin: 0,
    [theme.breakpoints.up('md')]: {
      fontSize: '1.875rem',
      marginBottom: theme.spacing(3.75),
    },
    '& p': {
      margin: 0,
    },
  },
  form: {
    marginTop: theme.spacing(2.5),
    width: '90%',
    margin: 'auto',
    [theme.breakpoints.up('md')]: {
      width: '70%',
      marginTop: theme.spacing(1.25),
    },
  },
  formGroup: {
    display: 'flex',
    alignItems: 'center',
  },
  formLabel: {
    display: 'none',
  },
  formControl: {
    width: '100%',
    flex: 1,
    paddingTop: theme.spacing(1.25),
    paddingBottom: theme.spacing(1.25),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    height: 50,
    fontSize: '1.125rem',
    '&:focus': {
      outline: 0,
    },
  },
  formButton: {
    fontSize: '1.125rem',
    fontWeight: 700,
    width: 160,
    height: 50,
    marginLeft: -1,
    cursor: 'pointer',
    backgroundColor: theme.palette.primary.main,
    border: `1px solid ${theme.palette.primary.main}`,
    color: theme.palette.common.white,
    position: 'relative',
    transform: 'perspective(1px) translateZ(0)',
    '&:before': {
      content: '""',
      position: 'absolute',
      zIndex: -1,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: theme.palette.common.black,
      transform: 'scaleX(0)',
      transformOrigin: '0 50%',
      transitionProperty: 'transform',
      transitionDuration: '0.3s',
      transitionTimingFunction: 'ease-out',
    },
    '&:hover': {
      borderColor: theme.palette.common.black,
      '&:before': {
        transform: 'scaleX(1)',
      },
    },
    '&:focus': {
      outline: 'none',
    },
  },
});
