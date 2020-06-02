export default theme => ({
  section: {
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(2),
    backgroundColor: theme.palette.quaternary.main,
    [theme.breakpoints.up('md')]: {
      paddingBottom: theme.spacing(5),
      paddingTop: theme.spacing(5),
    },
    '& h1': {
      fontSize: '1.875rem',
      fontWeight: 600,
      lineHeight: 1.1,
      marginTop: 0,
      marginBottom: 10,
      [theme.breakpoints.up('md')]: {
        fontSize: '2.875rem',
      },
    },
    '&.textblocktypea': {
      backgroundColor: theme.palette.common.white,
      '& p': {
        width: '80%',
        margin: 'auto',
      },
    },
  },
  sectionDescription: {
    textAlign: 'center',
    margin: 'auto',
    color: theme.palette.grey[50],
    '& p': {
      fontSize: '.875rem',
      margin: 0,
      [theme.breakpoints.up('md')]: {
        fontSize: '1.125rem',
      },
    },
    '& h1, & h2, & h3, & h4, & h5, & h6': {
      color: theme.palette.common.black,
    },
    '& h2': {
      fontSize: '1.5rem',
    },
    '& blockquote': {
      position: 'relative',
      paddingTop: 40,
      width: '80%',
      margin: 'auto',
      '& p': {
        fontStyle: 'italic',
        fontSize: '1.75rem',
        position: 'relative',
        fontWeight: 400,
        zIndex: 1,
        '& span': {
          '&:last-child': {
            fontSize: '1rem',
            opacity: 0.5,
            color: theme.palette.common.black,
          },
        },
      },
      '&:before': {
        position: 'absolute',
        top: -10,
        left: '50%',
        content: '""',
        backgroundImage: props => `url(${props.icon})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '30px 30px',
        backgroundPosition: 'center center',
        backgroundColor: theme.palette.quaternary.main,
        height: 40,
        width: 40,
        transform: 'translateX(-50%)',
        zIndex: 1,
      },
      '&:after': {
        position: 'absolute',
        content: '""',
        top: 8,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 200,
        height: 2,
        backgroundColor: theme.palette.primary.main,
        zIndex: 0,
      },
    },
  },
});
