import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    social: {
      [theme.breakpoints.up('md')]: {
        alignSelf: 'center',
      },

      '& ul': {
        listStyleType: 'none',
        display: 'flex',
        margin: 0,
        padding: 0,
      },

      '& li': {
        marginRight: theme.spacing(2.5),
        '&:last-child': {
          marginRight: 0,
        },
      },

      '& a:hover svg': {
        fill: theme.palette.primary.main,
      },

      '& svg': {
        width: 32,
        height: 32,
        fill: theme.palette.common.white,
        transition: 'all .3s',
      },
    },
    srOnly: {
      border: 0,
      clip: 'rect(0 0 0 0)',
      clipPath: 'polygon(0 0,0 0,0 0)',
      height: '.0625rem',
      margin: '-.0625rem',
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      width: '.0625rem',
      whiteSpace: 'nowrap',
    },
  })
);
