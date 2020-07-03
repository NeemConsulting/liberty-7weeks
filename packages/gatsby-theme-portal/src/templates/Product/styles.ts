import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(1.25),
      margin: theme.spacing(1.25),
      textAlign: 'left',
      color: theme.palette.text.secondary,
    },
  })
);
