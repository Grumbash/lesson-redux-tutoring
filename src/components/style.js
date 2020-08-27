import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  flex: (props) => ({
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
    },
    padding: theme.spacing(3),
    display: "flex",
    backgroundColor: props.backgroundColor,
  }),
}));

export default useStyles;
