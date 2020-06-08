import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles(({ palette }: Theme) =>
  createStyles({
    section: {
      backgroundColor: palette.secondary.main,
      '&.stacker': {
        backgroundColor: palette.quaternary.main,
      },
    },
  })
);
