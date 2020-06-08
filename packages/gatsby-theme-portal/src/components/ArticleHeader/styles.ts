import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles(({ breakpoints, palette, spacing }: Theme) =>
  createStyles({
    header: {
      margin: 'auto',
      maxWidth: 750,
      [breakpoints.up('md')]: {
        marginTop: spacing(2),
        marginBottom: spacing(2),
      },
      '& svg': {
        width: 28,
        height: 28,
        fill: palette.common.black,
      },
    },
    headingPrimary: {
      [breakpoints.up('md')]: {
        marginBottom: spacing(1.875),
      },
    },
    headingSecondary: {
      fontSize: '2.5rem',
      fontWeight: 600,
      margin: 0,
      marginBottom: spacing(2.5),
    },
    textSecondary: {
      paddingBottom: spacing(1.25),
      fontSize: '.875rem',
      margin: 0,
      marginBottom: spacing(1.25),
      [breakpoints.up('md')]: {
        fontSize: '1.125rem',
        marginBottom: spacing(2),
      },
    },
    articleInfo: {
      fontSize: '.875rem',
      fontWeight: 400,
      maxWidth: 750,
      marginBottom: spacing(1.875),
      display: 'flex',

      [breakpoints.up('md')]: {
        marginBottom: 0,
      },
    },
    articleAuthor: {},
    articleDate: {},
    divider: {
      margin: 0,
      marginLeft: spacing(1.25),
      marginRight: spacing(1.25),
    },
    articleInfoWrapper: {
      display: 'flex',
      flexDirection: 'column',
      [breakpoints.up('md')]: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
    },
    heroImage: {
      marginTop: spacing(1.25),
      position: 'relative',
      '& iframe': {
        height: 263,
        [breakpoints.up('md')]: {
          height: 399,
        },
      },
      '& .preloader-icon': {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        '& svg': {
          width: 60,
          height: 60,
        },
      },
    },
    iconVideo: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: '100%',
      border: 0,
      cursor: 'pointer',
      backgroundColor: 'transparent',
      '& svg': {
        transition: 'all .5s',
        fill: palette.common.white,
        width: 60,
        height: 60,
        cursor: 'pointer',
      },
      '&:hover': {
        '& svg': {
          fill: palette.primary.main,
          transform: 'scale(1.2)',
        },
      },
    },
    textCenter: {
      [breakpoints.up('md')]: {
        textAlign: 'center',
      },
    },
    link: {
      backgroundImage: `linear-gradient(120deg,${palette.primary.main} 0%,${palette.primary.main} 100%)`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 3px',
      backgroundPosition: '0 100%',
      color: palette.common.black,
      lineHeight: 1.75,
      textDecoration: 'none',
      display: 'flex',
    },
    tutorialInfo: {
      display: 'flex',
      marginTop: spacing(2),
      marginBottom: spacing(2),
      width: '100%',
    },
    tutorialInfoBlock: {
      backgroundColor: palette.secondary.main,
      padding: spacing(1),
      fontSize: '.625rem',
      lineHeight: 1.1,
      letterSpacing: 1,
      marginRight: spacing(1.5),
      flex: '1 50%',
      display: 'flex',
      position: 'relative',
      alignItems: 'center',
      [breakpoints.up('md')]: {
        paddingTop: spacing(1.25),
        paddingBottom: spacing(1.25),
        paddingLeft: spacing(2),
        paddingRight: spacing(2),
        marginRight: spacing(2.5),
        fontSize: '.75rem',
      },
      '&:last-child': {
        marginRight: 0,
      },
      '& strong': {
        display: 'block',
        marginBottom: spacing(1),
        textTransform: 'uppercase',
      },
      '& span': {
        textTransform: 'capitalize',
      },
    },
    icon: {
      width: '100%',
      flex: 1,
      textAlign: 'right',
      '&.b-skill': {
        '& svg': {
          width: 24,
          marginLeft: 5,
          '&:first-child': {
            marginLeft: 0,
          },
          [breakpoints.up('md')]: {
            width: 44,
            height: 44,
            marginLeft: 10,
          },
        },
      },
      '& svg': {
        opacity: 0.2,
        marginLeft: 10,
        '&.active': {
          opacity: 1,
        },
        [breakpoints.up('md')]: {
          width: 44,
          height: 44,
          marginLeft: 10,
        },
      },
    },
    flex: {
      display: 'flex',
      alignItems: 'center',
      '& span': {
        marginLeft: spacing(2.5),
      },
      '& svg': {
        marginRight: spacing(1.25),
        opacity: 0.2,
        '&.active': {
          opacity: 1,
        },
      },
    },
    authorInfo: {
      display: 'flex',
      '& .gatsby-image-wrapper': {
        width: 25,
        height: 25,
        borderRadius: '50%',
        border: `2px solid ${palette.primary.main}`,
        marginRight: spacing(1.25),
      },
      '& picture img': {
        width: '25px !important',
        height: '25px !important',
        objectFit: 'contain !important',
      },
    },
  })
);
