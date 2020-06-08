import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles(({ breakpoints, palette, spacing }: Theme) =>
  createStyles({
    section: {
      paddingBottom: spacing(2),
      paddingTop: spacing(2),
      backgroundColor: palette.quaternary.main,
      [breakpoints.up('md')]: {
        paddingBottom: spacing(5),
        paddingTop: spacing(5),
      },
      '& h1': {
        fontSize: '1.875rem',
        fontWeight: 600,
        lineHeight: 1.1,
        marginTop: 0,
        marginBottom: 10,
        [breakpoints.up('md')]: {
          fontSize: '2.875rem',
        },
      },
      '&.textblocktypea': {
        backgroundColor: palette.common.white,
        '& p': {
          width: '80%',
          margin: 'auto',
        },
      },
    },
    sectionDescription: {
      textAlign: 'center',
      margin: 'auto',
      color: palette.grey[50],
      '& p': {
        fontSize: '.875rem',
        margin: 0,
        [breakpoints.up('md')]: {
          fontSize: '1.125rem',
        },
      },
      '& h1, & h2, & h3, & h4, & h5, & h6': {
        color: palette.common.black,
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
              color: palette.common.black,
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
          backgroundColor: palette.quaternary.main,
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
          backgroundColor: palette.primary.main,
          zIndex: 0,
        },
      },
    },
  })
);
