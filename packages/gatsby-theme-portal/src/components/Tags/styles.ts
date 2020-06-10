import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles(({ breakpoints, palette, spacing }: Theme) =>
  createStyles({
    tags: {
      marginTop: spacing(3.75),
      marginBottom: spacing(2.5),
      [breakpoints.up('md')]: {
        marginBottom: spacing(3.75),
      },
    },
    tagsTitle: {
      fontSize: '1.375rem',
      lineHeight: 1.1,
      fontWeight: 600,
      position: 'relative',
      margin: 0,
      marginBottom: spacing(2),
      paddingTop: spacing(1),
      '&:before': {
        content: '""',
        background: palette.secondary.main,
        position: 'absolute',
        right: 0,
        top: 0,
        width: '100vw',
        height: 20,
        zIndex: -1,
      },
      [breakpoints.up('md')]: {
        fontSize: '2.5rem',
        paddingTop: spacing(0.625),
        marginBottom: spacing(3.75),
      },
    },
    tagList: {
      listStyleType: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexWrap: 'wrap',
    },
    tagListItem: {
      marginRight: spacing(1.25),
      marginBottom: spacing(1.25),
    },
    tagsListLink: {
      color: palette.common.black,
      display: 'inline-block',
      textDecoration: 'none',
      fontSize: '.875rem',
      fontWeight: 700,
      lineHeight: 1.1,
      backgroundImage: `linear-gradient(120deg,${palette.secondary.main} 0%,${palette.secondary.main} 100%)`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% .1875rem',
      backgroundPosition: '0 100%',
      [breakpoints.up('md')]: {
        fontSize: '1.125rem',
      },
    },
  })
);
