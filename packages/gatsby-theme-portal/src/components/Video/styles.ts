import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles(({ breakpoints, palette, spacing }: Theme) =>
  createStyles({
    wrapper: {
      '& .preloader-icon': {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      },
    },
    title: {
      margin: 0,
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
    loader: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50% -50%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })
);
