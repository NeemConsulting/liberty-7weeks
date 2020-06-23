import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles(({ breakpoints, palette, spacing }: Theme) =>
  createStyles({
    mainContentWrapper: {
      marginTop: spacing(7.5),
      overflow: 'hidden',
      '&.home-page': {
        paddingTop: 0,
      },
    },
    mode: {
      position: 'fixed',
      top: 10,
      left: 20,
      zIndex: 3,
      display: 'none',
      '& .MuiSwitch-track': {
        backgroundColor: palette.common.white,
      },
      '& .MuiFormControlLabel-label': {
        display: 'none',
      },
      [breakpoints.up('lg')]: {
        display: 'block',
      },
    },
    skipLink: {
      position: 'absolute',
      padding: spacing(0.5),
      zIndex: 4,
      color: palette.common.black,
      background: palette.common.white,
      border: `.0625rem solid ${palette.common.black}`,
      whiteSpace: 'nowrap',
      '&:not(:focus)': {
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: 'hidden',
        clip: 'rect(0, 0, 0, 0)',
        border: 0,
        pointerEvents: 'none',
      },
    },
  })
);
