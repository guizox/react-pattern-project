import { createMuiTheme } from "@material-ui/core/styles";
import palette from "./pallete";
import overrides from "./overrides";

const theme = createMuiTheme({
  palette,
  direction: "rtl",
  overrides
});

export default theme;
