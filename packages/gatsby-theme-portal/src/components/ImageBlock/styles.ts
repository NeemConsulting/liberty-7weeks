import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles(({ breakpoints, palette, spacing }: Theme) =>
  createStyles({
    section: {
      backgroundColor: palette.tertiary.main,
      paddingTop: 0,
      '&.imageblocktypeb': {
        '& .c-image_wrapper': {
          [breakpoints.up('md')]: {
            order: 1,
          },
        },
        '& .c-image_text': {
          right: 10,
        },
      },
    },
    sectionTitle: {
      color: palette.common.black,
      marginTop: spacing(1.25),
      marginBottom: spacing(0.625),
      lineHeight: 1.2,
      '& span': {
        transition: '.15s',
        display: 'inline',
        backgroundImage: `linear-gradient(120deg,rgba(184,240,192,0) 0%,rgba(184,240,192,0) 100%)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% .1875rem',
        backgroundPosition: '0 100%',
      },
      [breakpoints.up('md')]: {
        marginBottom: spacing(2.5),
      },
    },
    link: {
      textDecoration: 'none',
      display: 'block',
      '&:hover': {
        '& h2 span': {
          backgroundImage: `linear-gradient(120deg,${palette.secondary.main} 0%,${palette.secondary.main} 100%)`,
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
      [breakpoints.up('md')]: {
        flexDirection: 'row',
      },
    },
    imageWrapper: {
      marginLeft: -16,
      marginRight: -16,
      height: 220,
      overflow: 'hidden',
      '& img': {
        height: '100% !important',
        transition: 'all 500ms ease 0s !important',
      },
      [breakpoints.up('md')]: {
        order: 2,
        width: 752,
        height: 400,
      },
    },
    copyText: {
      padding: spacing(2.25),
      background: palette.common.white,
      color: palette.common.black,
      order: 2,
      top: spacing(-2.25),
      position: 'relative',

      [breakpoints.up('md')]: {
        order: 1,
        alignSelf: 'center',
        padding: spacing(3),
        right: -20,
        top: 0,
        maxWidth: 500,
      },
      '& p': {
        margin: 0,
        fontSize: '.875rem',
        [breakpoints.up('md')]: {
          fontSize: '1.125rem',
        },
      },
    },
  })
);
