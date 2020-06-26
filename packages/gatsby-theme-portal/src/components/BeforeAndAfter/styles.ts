import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles(({ spacing }: Theme) =>
  createStyles({
    wrapper: {
      width: '100%',
      height: 505,
      maxWidth: 700,
      margin: 'auto',
      marginTop: spacing(6),
      '& [data-rcs="main-handle-container"] > div': {
        '&:before': {
          content: '""',
          position: 'absolute',
          width: 40,
          height: 40,
          background: 'url(/images/slide.svg) no-repeat center center',
          backgroundSize: 'contain',
          top: '50%',
          left: '50%',
          transform: 'translateX(-50%) translateY(-50%)',
          borderRadius: '50%',
        },
      },
    },
  })
);
