import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles(({ spacing }: Theme) =>
  createStyles({
    formWrapper: {
      margin: spacing(2),
      marginBottom: spacing(6),
    },
  })
);
