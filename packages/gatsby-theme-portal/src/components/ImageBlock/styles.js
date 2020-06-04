export default theme => ({
  section: {
    backgroundColor: theme.palette.tertiary.main,
    paddingTop: 0,
    '&.imageblocktypeb': {
      '& .c-image_wrapper': {
        [theme.breakpoints.up('md')]: {
          order: 1,
        },
      },
      '& .c-image_text': {
        right: 10,
      },
    },
  },
  sectionTitle: {
    color: theme.palette.common.black,
    marginTop: theme.spacing(1.25),
    marginBottom: theme.spacing(0.625),
    lineHeight: 1.2,
    '& span': {
      transition: '.15s',
      display: 'inline',
      backgroundImage: `linear-gradient(120deg,rgba(184,240,192,0) 0%,rgba(184,240,192,0) 100%)`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% .1875rem',
      backgroundPosition: '0 100%',
    },
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(2.5),
    },
  },
  link: {
    textDecoration: 'none',
    display: 'block',
    '&:hover': {
      '& h2 span': {
        backgroundImage: `linear-gradient(120deg,${theme.palette.secondary.main} 0%,${theme.palette.secondary.main} 100%)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% .1875rem',
        backgroundPosition: '0 100%',
      },
      '& img': {
        transform: 'scale(1.1)',
      },
    },
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    },
  },
  imageWrapper: {
    marginLeft: -16,
    marginRight: -16,
    overflow: 'hidden',
    '& img': {
      height: '100% !important',
      transition: 'all 500ms ease 0s !important',
    },
    [theme.breakpoints.up('md')]: {
      order: 2,
      width: 752,
    },
  },
  copyText: {
    padding: theme.spacing(2.25),
    background: theme.palette.common.white,
    color: theme.palette.common.black,
    order: 2,
    top: theme.spacing(-2.25),
    position: 'relative',

    [theme.breakpoints.up('md')]: {
      order: 1,
      alignSelf: 'center',
      padding: theme.spacing(3),
      right: -20,
      top: 0,
      maxWidth: 500,
    },
    '& p': {
      margin: 0,
      fontSize: '.875rem',
      [theme.breakpoints.up('md')]: {
        fontSize: '1.125rem',
      },
    },
  },
});
