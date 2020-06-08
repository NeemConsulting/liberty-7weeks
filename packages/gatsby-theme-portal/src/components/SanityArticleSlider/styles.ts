import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    section: {
      backgroundColor: theme.palette.secondary.main,
      '&.stacker': {
        backgroundColor: theme.palette.quaternary.main,
      },
    },
  })
);
