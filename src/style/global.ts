import { makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    marginTop: theme.spacing(3),
    textAlign: "center",
  },
  buttonContainer: {
    marginTop: 50,
    marginBottom: 50,
  },
  button:{
    minWidth: 225,
  },
  greenIcon:{
    color: "green"
  },
  marginBottom20: {
    marginBottom: "20px",
  },
  marginTop20: {
    marginTop: "20px",
  },
  marginRight10: {
    marginRight: "10px",
  },
}));
